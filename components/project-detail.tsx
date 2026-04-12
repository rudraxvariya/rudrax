"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Project } from "@/lib/projects"

export function ProjectDetail({
  project,
  prev,
  next,
}: {
  project: Project
  prev: Project | null
  next: Project | null
}) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      {/* Back button */}
      <div className="fixed top-6 left-4 sm:left-8 z-50">
        <motion.button
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white/10 text-zinc-400 hover:text-white text-sm font-mono transition-colors"
        >
          ← Back
        </motion.button>
      </div>

      {/* Hero banner */}
      <div className="relative h-64 sm:h-96 overflow-hidden">
        <img
          src={project.heroBg}
          alt={project.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/40 via-[#050508]/20 to-[#050508]" />

        <div
          className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(ellipse at center, ${project.color}, transparent 70%)` }}
        />

        <div className="absolute bottom-8 left-0 right-0 px-4 sm:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xs font-mono px-3 py-1 rounded-full border"
                style={{ color: project.color, borderColor: `${project.color}50`, backgroundColor: `${project.color}15` }}
              >
                {project.number}
              </span>
              <span className="text-xs font-mono text-zinc-500">{project.company}</span>
              <span className="text-xs font-mono text-zinc-600">·</span>
              <span className="text-xs font-mono text-zinc-500">{project.period}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">{project.title}</h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: project.color }}>
                Overview
              </h2>
              <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">{project.overview}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xs font-mono tracking-widest uppercase mb-5" style={{ color: project.color }}>
                Key Contributions
              </h2>
              <ul className="space-y-4">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className="text-zinc-300 text-sm sm:text-base leading-relaxed">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl overflow-hidden border border-white/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-5 space-y-5" style={{ borderColor: `${project.color}25` }}>
              <div>
                <div className="text-xs text-zinc-600 font-mono mb-1">Company</div>
                <div className="text-white font-semibold text-sm">{project.company}</div>
              </div>
              <div>
                <div className="text-xs text-zinc-600 font-mono mb-1">Role</div>
                <div className="text-white font-semibold text-sm">{project.role}</div>
              </div>
              <div>
                <div className="text-xs text-zinc-600 font-mono mb-1">Period</div>
                <div className="text-white font-semibold text-sm">{project.period}</div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5" style={{ borderColor: `${project.color}25` }}>
              <div className="text-xs text-zinc-600 font-mono mb-4">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono"
                    style={{
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Prev / Next navigation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between"
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex items-center gap-3 glass-card rounded-xl px-5 py-4 hover:border-white/20 transition-colors"
            >
              <span className="text-zinc-600 group-hover:text-white transition-colors">←</span>
              <div>
                <div className="text-xs text-zinc-600 font-mono mb-0.5">Previous</div>
                <div className="text-sm text-white font-semibold leading-snug">{prev.title}</div>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center gap-3 glass-card rounded-xl px-5 py-4 hover:border-white/20 transition-colors sm:flex-row-reverse text-right"
            >
              <span className="text-zinc-600 group-hover:text-white transition-colors">→</span>
              <div>
                <div className="text-xs text-zinc-600 font-mono mb-0.5">Next</div>
                <div className="text-sm text-white font-semibold leading-snug">{next.title}</div>
              </div>
            </Link>
          ) : <div />}
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            href="/#projects"
            className="text-xs font-mono text-zinc-600 hover:text-violet-400 transition-colors"
          >
            ← All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
