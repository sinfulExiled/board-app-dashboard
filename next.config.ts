/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "board-app-dashboard",
  assetPrefix: "./",
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
