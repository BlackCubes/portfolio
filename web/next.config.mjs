import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
};

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
