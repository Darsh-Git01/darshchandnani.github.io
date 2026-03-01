import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: "",
  assetPrefix: "",

  images: {
    unoptimized: true,
  },

  reactStrictMode: false,
};

export default nextConfig;
