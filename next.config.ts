import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/ai": ["./data/**/*.md", "./src/app/api/ai/prompt.yaml"],
  },
};

export default nextConfig;
