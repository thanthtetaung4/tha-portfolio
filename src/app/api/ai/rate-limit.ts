type Window = {
  limit: number;
  windowMs: number;
};

type Bucket = {
  hits: number[];
  expiresAt: number;
};

export type RateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfterSeconds: number };

// Short window stops rapid-fire spam, long window caps what a single visitor
// can cost per hour. Both are per client IP.
const WINDOWS: Window[] = [
  { limit: 5, windowMs: 60_000 },
  { limit: 40, windowMs: 60 * 60_000 },
];

const LONGEST_WINDOW_MS = Math.max(...WINDOWS.map((window) => window.windowMs));
const MAX_TRACKED_CLIENTS = 5_000;

// Lives per server instance, so it is a best-effort guard rather than a global
// quota — good enough to keep a single abuser from draining the API budget.
const buckets = new Map<string, Bucket>();

function pruneExpired(now: number): void {
  for (const [key, bucket] of buckets) {
    if (bucket.expiresAt <= now) buckets.delete(key);
  }
}

export function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("cf-connecting-ip")?.trim();

  return ip || "unknown";
}

export function checkRateLimit(key: string, now = Date.now()): RateLimitResult {
  if (buckets.size > MAX_TRACKED_CLIENTS) pruneExpired(now);

  const bucket = buckets.get(key);
  const hits =
    bucket && bucket.expiresAt > now
      ? bucket.hits.filter((hit) => hit > now - LONGEST_WINDOW_MS)
      : [];

  let retryAfterMs = 0;

  for (const { limit, windowMs } of WINDOWS) {
    const windowStart = now - windowMs;
    const hitsInWindow = hits.filter((hit) => hit > windowStart);

    if (hitsInWindow.length >= limit) {
      const oldestHit = hitsInWindow[hitsInWindow.length - limit];
      retryAfterMs = Math.max(retryAfterMs, oldestHit + windowMs - now);
    }
  }

  if (retryAfterMs > 0) {
    buckets.set(key, { hits, expiresAt: now + LONGEST_WINDOW_MS });
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1_000)),
    };
  }

  hits.push(now);
  buckets.set(key, { hits, expiresAt: now + LONGEST_WINDOW_MS });

  return { allowed: true };
}
