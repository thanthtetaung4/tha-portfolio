import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time so the social card always matches the site copy.
 * Satori has no font fetching here on purpose — the bundled default keeps the
 * build hermetic and fast.
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 15% 15%, #2a1d52 0%, #0a0a0a 55%, #0a0a0a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              background: siteConfig.accentColor,
            }}
          />
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#c9c2e8",
            }}
          >
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "86px", fontWeight: 700, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: "44px",
              fontWeight: 600,
              color: siteConfig.accentColor,
            }}
          >
            {siteConfig.headline}
          </div>
          <div
            style={{
              fontSize: "30px",
              lineHeight: 1.4,
              color: "#b9b4c9",
              maxWidth: "900px",
            }}
          >
            Agentic AI, RAG systems and LLM evaluation — built with Next.js,
            Python and LangChain.
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {["Agentic AI", "RAG", "LLM Evaluation", "Next.js", "Python", "C"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  fontSize: "24px",
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(166, 132, 255, 0.45)",
                  background: "rgba(166, 132, 255, 0.12)",
                  color: "#e3ddf7",
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
