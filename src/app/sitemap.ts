import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/site";

/**
 * Single-page site, so the sitemap is small on purpose — the resume PDF is
 * listed because Google indexes PDFs and it carries the same keywords.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      // Bare origin, byte-identical to the canonical tag Next emits for "/".
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/resume.pdf"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
