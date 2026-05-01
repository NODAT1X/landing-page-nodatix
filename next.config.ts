import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.1.203",
    "192.168.1.XX",
  ],
};

export default nextConfig;