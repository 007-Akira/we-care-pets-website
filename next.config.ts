import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    localPatterns: [
      {
        pathname: "/images/we-care-pets/**",
        search: "",
      },
      {
        pathname: "/images/we-care-pets/gallery/**",
        search: "?v=2026-07-10-4",
      },
      {
        pathname: "/images/we-care-pets/about-page.webp",
        search: "?v=2026-07-10-2",
      },
    ],
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
