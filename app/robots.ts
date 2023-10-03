import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth/", "/api/", "/dashboard"],
    },
    sitemap: "https://url-shortner-drab-delta.vercel.app/sitemap.xml",
  };
}
