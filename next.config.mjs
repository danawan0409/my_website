/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: '/my_website',
  assetPrefix: '/my_website/',
};

export default nextConfig;
