import { PROJECTS, getProjectBySlug } from "@/lib/projects"
import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/project-detail"

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug)
  const prev = PROJECTS[currentIndex - 1] ?? null
  const next = PROJECTS[currentIndex + 1] ?? null

  return <ProjectDetail project={project} prev={prev} next={next} />
}
