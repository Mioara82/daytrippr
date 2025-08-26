import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
