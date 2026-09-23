var path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  sassOptions: {
    // Project root is needed for `src/styles/...` imports, which legacy Sass resolved from cwd
    loadPaths: [__dirname, path.join(__dirname, 'src/styles')],
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
