const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
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
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  webpack5: true,
  reactStrictMode: true
});