import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/poc-react", // The name of your repository
  assetPrefix: "/poc-react", // The name of your repository
  output: 'export', // Enables static exports for GitHub Pages
  reactCompiler: true,
};

export default nextConfig;
