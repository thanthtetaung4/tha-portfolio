/**
 * Single source of truth for anything that has to stay in sync across
 * metadata, sitemap, robots, manifest, the OG image and the JSON-LD graph.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://thant.dev";

export const siteConfig = {
  url: siteUrl,
  name: "Thant Htet Aung",
  shortName: "Thant",
  jobTitle: "AI Software Engineer",
  headline: "AI Software Engineer & Full-Stack Developer",
  description:
    "Thant Htet Aung is an AI software engineer and full-stack developer in Singapore, building agentic AI, RAG systems and LLM evaluation tooling with Next.js, Python and LangChain.",
  // Kept short enough that Google is unlikely to truncate the snippet.
  shortDescription:
    "AI software engineer and full-stack developer building agentic AI, RAG and LLM evaluation systems.",
  locale: "en_SG",
  email: "thanthtetaung3502@gmail.com",
  telephone: "+65 8060 1305",
  location: {
    city: "Singapore",
    country: "SG",
  },
  themeColor: "#0a0a0a",
  accentColor: "#a684ff",
  keywords: [
    "Thant Htet Aung",
    "AI software engineer",
    "full-stack developer",
    "software engineer Singapore",
    "agentic AI",
    "RAG",
    "LLM evaluation",
    "LangChain",
    "Next.js developer",
    "Python developer",
    "system programming",
    "42 Singapore",
    "portfolio",
  ],
  socials: {
    github: "https://github.com/thanthtetaung4",
    linkedin: "https://www.linkedin.com/in/thant-htet-aung/",
    discord: "https://discordapp.com/users/908020600751140914",
    whatsapp: "https://wa.me/+6580601305",
  },
} as const;

export const sameAs: string[] = [
  siteConfig.socials.github,
  siteConfig.socials.linkedin,
];

/** Absolute URL helper — structured data and OG tags must never use relative paths. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, `${siteUrl}/`).toString();
}
