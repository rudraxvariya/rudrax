"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, MouseEvent, useEffect, useState } from "react"
import Link from "next/link"
import { PROJECTS } from "@/lib/projects"

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isTouch, setIsTouch] = useState(false)
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { damping: 20, stiffness: 200 })
  const sy = useSpring(y, { damping: 20, stiffness: 200 })
  const rX = useTransform(sy, [-0.5, 0.5], [7, -7])
  const rY = useTransform(sx, [-0.5, 0.5], [-7, 7])

  useEffect(() => { setIsTouch(window.matchMedia("(hover: none)").matches) }, [])

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (isTouch) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  function onLeave() { x.set(0); y.set(0) }

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        style={isTouch ? {} : { rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onMouseEnter={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className="group relative cursor-pointer"
      >
        {/* Outer glow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute -inset-px rounded-2xl pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${project.color}35, transparent, ${project.color}15)` }}
        />

        <div
          className={`relative glass-card rounded-2xl overflow-hidden flex flex-col h-full bg-gradient-to-br ${project.gradient} transition-all duration-500`}
          style={{ borderColor: `${project.color}25` }}
        >
          {/* Image / colour header */}
          <div className="relative h-36 sm:h-44 overflow-hidden img-zoom bg-[#0a0a14]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              onError={e => { (e.target as HTMLImageElement).style.display = "none" }}
            />

            {/* Fallback gradient */}
            <div
              className="absolute inset-0 flex items-end p-4"
              style={{ background: `linear-gradient(135deg, ${project.color}20, #050508 80%)` }}
            >
              <span
                className="text-7xl font-bold opacity-10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ color: project.color }}
              >
                {project.number}
              </span>
            </div>

            {/* Number badge */}
            <div
              className="absolute top-3 left-3 text-xs font-mono px-2.5 py-1 rounded-full border"
              style={{
                color: project.color,
                borderColor: `${project.color}50`,
                backgroundColor: `${project.color}15`,
                backdropFilter: "blur(8px)",
              }}
            >
              {project.number}
            </div>

            {/* Company badge */}
            <div className="absolute top-3 right-3 text-xs font-mono px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-zinc-400 backdrop-blur-sm">
              {project.company}
            </div>

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0d0d18] to-transparent" />
          </div>

          {/* Card body */}
          <div className="p-5 sm:p-6 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                {project.title}
              </h3>
              {/* Arrow indicator */}
              <motion.span
                animate={{ x: hovered ? 3 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-zinc-600 group-hover:text-white transition-colors flex-shrink-0 mt-0.5"
                style={{ color: hovered ? project.color : undefined }}
              >
                →
              </motion.span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-1.5 mb-5 flex-1">
              {project.highlights.map(h => (
                <li key={h} className="flex items-start gap-2 text-xs text-zinc-500">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: project.color }}
                  />
                  {h}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs font-mono"
                  style={{
                    backgroundColor: `${project.color}12`,
                    color: project.color,
                    border: `1px solid ${project.color}28`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-2 mt-auto" onClick={e => e.preventDefault()}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 hover:scale-105"
                    style={{
                      borderColor: `${project.color}40`,
                      color: project.color,
                      backgroundColor: `${project.color}10`,
                    }}
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current" strokeWidth={2}>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 bg-white/5 transition-all duration-200 hover:scale-105"
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Hover glow overlay */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 0%, ${project.glow}, transparent 65%)` }}
          />
        </div>
      </motion.div>
    </Link>
  )
}

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="projects" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-mono text-xs sm:text-sm text-pink-400 tracking-widest uppercase">
            03 — Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">
            Things I&apos;ve{" "}
            <span className="gradient-text">built</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto px-2">
            Key projects from my professional experience — each one shipped to real users.
          </p>
        </motion.div>

        {/* 2-col grid — 4 cards */}
        {inView && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
            style={{ perspective: "1200px" }}
          >
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 sm:mt-12"
        >
          <a
            href="https://github.com/rudraxvariya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-700 text-zinc-400 hover:text-white hover:border-violet-500/50 text-xs sm:text-sm font-mono transition-all duration-200 hover:bg-violet-500/10"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
