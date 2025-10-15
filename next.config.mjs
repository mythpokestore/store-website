/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        "*.svg": ["@svgr/webpack?-svgo,+titleProp,+ref"],
      },
    },
  },
};

export default nextConfig;
