/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },

  images: {
    domains: ["aluwkoerwzabqcambtmj.supabase.co"],
  },
};

module.exports = nextConfig;
