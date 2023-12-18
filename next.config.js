/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export const dynamicParams = false",
  images: { unoptimized: true },
};

module.exports = nextConfig;
