/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: '/my_website', //uncomment for deployment
  assetPrefix: '/my_website/', //uncomment for deployment
};

export default nextConfig;
