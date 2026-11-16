import path from "node:path";
import type { NextConfig } from "next";

const isPages = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "ilc-robotix";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  outputFileTracingRoot: path.join(process.cwd()),
  ...(isPages
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
    : {}),
};

export default nextConfig;
