const {
  createVanillaExtractPlugin,
} = require("@syfxlin/next-plugin-vanilla-extract");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  experimental: {
    appDir: true,
  },
  fastRefresh: true,
  concurrentFeatures: true,
  swcMinify: true,
};

module.exports = withVanillaExtract(nextConfig);
