var path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import("next").NextConfig} */
module.exports = withBundleAnalyzer({
  // This is needed to get dynamic SVG import working
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // @see https://formatjs.io/docs/guides/advanced-usage/
    /*config.module.resolve.alias = {
      '@formatjs/icu-messageformat-parser': '@formatjs/icu-messageformat-parser/no-parser'
    }*/

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zetter.gallery',
        port: '443',
        pathname: '/**',
      },
    ],
    domains: ['[::1]', 'localhost', 'zetter.gallery'],
  },
  i18n: {
    locales: ['en', 'ru', 'pl', 'fr', 'de', 'tr', 'uk', 'pt'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  output: 'standalone',
  reactStrictMode: true,
});
