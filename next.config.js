/** @type {import('next').NextConfig} */
module.exports = {
  // This is needed to get dynamic SVG import working
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  images: {
    domains: ['[::1]'],
  },
  webpack5: true,
  reactStrictMode: true
}