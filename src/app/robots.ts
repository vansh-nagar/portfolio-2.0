import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://vanshnagar.me";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/private/"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
