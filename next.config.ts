import type { NextConfig } from "next";
const nextConfig: NextConfig = { poweredByHeader: false, devIndicators: false, turbopack: {root: process.cwd()}, outputFileTracingRoot: process.cwd() };
export default nextConfig;
