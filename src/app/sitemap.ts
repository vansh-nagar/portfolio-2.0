import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vanshnagar.me";
  const now = new Date();

  return [
    // Homepage - highest priority
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Alternate URL format
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Projects page - very important for portfolio
    {
      url: `${base}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Designs page
    {
      url: `${base}/designs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Interactive pages
    {
      url: `${base}/pick-your-petal`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Any additional pages you may have
    {
      url: `${base}/threejs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
