import type {NextConfig} from "next";

const staticExport = process.env.JADE_STATIC_EXPORT === "1";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  turbopack: {root: process.cwd()},
  outputFileTracingRoot: process.cwd(),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  ...(staticExport ? {output: "export", trailingSlash: true, images: {unoptimized: true}} : {}),
};
export default nextConfig;
