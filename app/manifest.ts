import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Url Shortner",
    short_name: "tinyurl",
    description: "A simple url shortner app",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#6C63FF",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
