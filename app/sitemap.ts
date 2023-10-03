import { MetadataRoute } from "next";
const baseUrl = "https://url-shortner-drab-delta.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
