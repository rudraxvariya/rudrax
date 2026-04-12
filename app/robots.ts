import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rudraxvariya.github.io/sitemap.xml",
    host: "https://rudraxvariya.github.io",
  }
}
