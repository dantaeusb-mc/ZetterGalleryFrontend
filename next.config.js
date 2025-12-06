var path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
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
    locales: ['en', 'ru', 'zh', 'pl', 'fr', 'de', 'tr', 'uk', 'pt'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  output: 'standalone',
  reactStrictMode: true,
};
