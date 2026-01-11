import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://vanshnagar.me";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/", "/_next/", "/static/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "Slurp", // Yahoo
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
