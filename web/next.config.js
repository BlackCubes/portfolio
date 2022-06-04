import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';

/** @type {import('next').NextConfig} */
const initialNextConfig = {
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
};

const nextConfig = withPWA({
  ...initialNextConfig,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    skipWaiting: true,
  },
});

export default nextConfig;
