/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
  reactStrictMode: true,
};

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
