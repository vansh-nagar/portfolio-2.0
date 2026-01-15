import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  devIndicators: false,
};

import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
});

export default withMDX({
  ...nextConfig,
  pageExtensions: ["js", "ts", "tsx", "md", "mdx"],
});
