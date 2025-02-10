import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Включает next export
  images: {
    unoptimized: true, // Отключает image optimization (Render не поддерживает)
  },
};

export default nextConfig;
