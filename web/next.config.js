/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    skipWaiting: true,
  },
});
