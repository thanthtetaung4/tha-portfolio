import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2a1d52 0%, #0a0a0a 100%)",
          color: siteConfig.accentColor,
          fontSize: "104px",
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        T
      </div>
    ),
    size,
  );
}
