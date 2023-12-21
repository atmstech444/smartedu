/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export const dynamicParams = false",
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
