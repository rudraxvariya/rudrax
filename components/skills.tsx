"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.3)",
    skills: [
      { name: "React.js / Next.js / Gatsby", level: 95 },
      { name: "TypeScript / JavaScript", level: 93 },
      { name: "Redux / Zustand / Tanstack Query", level: 88 },
      { name: "Tailwind / SCSS / Bootstrap", level: 92 },
    ],
  },
  {
    title: "UI Libraries & Frameworks",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.3)",
    skills: [
      { name: "Ant Design / Material UI", level: 90 },
      { name: "Vue.js / Svelte", level: 72 },
      { name: "GraphQL / REST", level: 85 },
      { name: "Node.js / Express.js", level: 78 },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.3)",
    skills: [
      { name: "Git / GitLab", level: 95 },
      { name: "Vercel / Netlify / Heroku", level: 88 },
      { name: "Linux / macOS / Windows", level: 85 },
      { name: "Slack / ClickUp / Trello", level: 90 },
    ],
  },
]

const TECH_ICONS = [
  { name: "React",      short: "Re", bg: "#20232a", color: "#61DAFB" },
  { name: "Next.js",   short: "Nx", bg: "#000000", color: "#ffffff" },
  { name: "TypeScript",short: "TS", bg: "#3178C6", color: "#ffffff" },
  { name: "Redux",     short: "Rx", bg: "#764ABC", color: "#ffffff" },
  { name: "GraphQL",   short: "GQ", bg: "#E535AB", color: "#ffffff" },
  { name: "Tailwind",  short: "Tw", bg: "#06B6D4", color: "#ffffff" },
  { name: "Ant Design",short: "An", bg: "#1677FF", color: "#ffffff" },
  { name: "Vue.js",    short: "Vu", bg: "#42B883", color: "#ffffff" },
  { name: "Gatsby",    short: "Ga", bg: "#663399", color: "#ffffff" },
  { name: "Node.js",   short: "No", bg: "#339933", color: "#ffffff" },
  { name: "Git",       short: "Gi", bg: "#F05032", color: "#ffffff" },
  { name: "Vercel",    short: "Vc", bg: "#000000", color: "#ffffff" },
]

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  }

  return (
    <section id="skills" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
          {/* Header */}
          <motion.div variants={item} className="text-center mb-10 sm:mb-16">
            <span className="font-mono text-xs sm:text-sm text-cyan-400 tracking-widest uppercase">
              02 — Skills
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              My <span className="gradient-text">tech stack</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto px-2">
              Technologies I use daily — from crafting UIs to building APIs and deploying to the cloud.
            </p>
          </motion.div>

          {/* Skill bars — 1 col mobile, 2 col sm, 3 col lg */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16"
          >
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="glass-card rounded-2xl p-5 sm:p-6 hover:border-violet-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.glow}` }}
                  />
                  <h3 className="font-bold text-white text-sm sm:text-base">{cat.title}</h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {cat.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs sm:text-sm text-zinc-300 font-mono leading-tight">{skill.name}</span>
                        <span className="text-xs text-zinc-500 font-mono ml-2 flex-shrink-0">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                            boxShadow: `0 0 10px ${cat.glow}`,
                          }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + i * 0.1,
                            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tech icon grid — wraps nicely on all sizes */}
          <motion.div variants={item}>
            <div className="text-xs text-zinc-600 font-mono text-center mb-5 sm:mb-6 tracking-widest uppercase">
              Technologies I work with
            </div>
            <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
              {TECH_ICONS.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.12, y: -4 }}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 group cursor-default"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-200"
                    style={{
                      backgroundColor: tech.bg,
                      color: tech.color,
                      boxShadow: `0 0 0 1px rgba(255,255,255,0.08)`,
                    }}
                  >
                    {tech.short}
                  </div>
                  <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors font-mono hidden sm:block">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
