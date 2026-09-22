import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com", // Update this if the domain was misspelled
      },
    ],
  },
};

export default nextConfig;
