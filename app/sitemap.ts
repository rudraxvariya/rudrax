import { MetadataRoute } from "next"
import { PROJECTS } from "@/lib/projects"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = PROJECTS.map((p) => ({
    url: `https://rudraxvariya.github.io/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: "https://rudraxvariya.github.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ]
}
