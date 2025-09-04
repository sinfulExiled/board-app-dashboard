/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",

  basePath: isGithubPages ? "/board-app-dashboard" : "",
  
  assetPrefix: isGithubPages ? "/board-app-dashboard/" : "./",

  trailingSlash: true,

  images: {
    unoptimized: true, 
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  devIndicators: false,
};

console.log("Next.js Config:", {
  basePath: nextConfig.basePath,
  assetPrefix: nextConfig.assetPrefix,
});

module.exports = nextConfig;
