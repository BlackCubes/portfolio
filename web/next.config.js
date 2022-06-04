import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';

/** @type {import('next').NextConfig} */
const initialNextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
};

const nextConfig = withPWA({
  ...initialNextConfig,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});

export default nextConfig;
