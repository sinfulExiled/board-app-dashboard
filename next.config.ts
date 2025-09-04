/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "board-app-dashboard",
  assetPrefix: "./board-app-dashboard",
  trailingSlash: true,

  images: {
    unoptimized: true, 
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  devIndicators: false,
};

module.exports = nextConfig;
