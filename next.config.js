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

    // @see https://formatjs.io/docs/guides/advanced-usage/
    /*config.module.resolve.alias = {
      '@formatjs/icu-messageformat-parser': '@formatjs/icu-messageformat-parser/no-parser'
    }*/

    return config;
  },
  images: {
    domains: ['[::1]'],
  },
  i18n: {
    locales: ['en', 'ru', 'pl'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  webpack5: true,
  reactStrictMode: true
});