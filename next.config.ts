import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,


  output: "export",


  basePath: "/darshchandnani.github.io",
  assetPrefix: "/darshchandnani.github.io/",

  env: {
    googleAnalyticsId:
      process.env.NODE_ENV === "production"
        ? process.env.GA_MEASUREMENT_ID
        : "",
  },
};

export default nextConfig;
