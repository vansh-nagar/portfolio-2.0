import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vanshnagar.me";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/designs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pick-your-petal`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/threejs`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
