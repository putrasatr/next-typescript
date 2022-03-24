/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  images: {
    loader: "default",
    domains: ["104.248.145.157", "localhost"],
  },
});

module.exports = nextConfig;
