"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, MouseEvent } from "react"

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "17+", label: "GitHub Repos" },
  { value: "10+", label: "Tech Stack" },
  { value: "∞", label: "Cups of Coffee" },
]

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { damping: 22, stiffness: 200 })
  const sy = useSpring(y, { damping: 22, stiffness: 200 })
  const rX = useTransform(sy, [-0.5, 0.5], [6, -6])
  const rY = useTransform(sx, [-0.5, 0.5], [-6, 6])

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  function onLeave() { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  )
}

export function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
  }
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container} initial="hidden" animate={inView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* ── Left: photo + ring ── */}
          <motion.div variants={item} className="flex flex-col items-center lg:items-start gap-8">
            {/* Photo with spinning gradient border */}
            <div className="relative" style={{ perspective: "800px" }}>
              <TiltCard>
                {/* Spinning gradient ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-3xl opacity-70"
                  style={{
                    background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)",
                    filter: "blur(8px)",
                  }}
                />
                {/* Second slower ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-3xl opacity-30"
                  style={{
                    background: "conic-gradient(from 180deg, #ec4899, #7c3aed, #06b6d4, #ec4899)",
                    filter: "blur(16px)",
                  }}
                />

                {/* Photo frame */}
                <div className="relative w-52 h-52 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-violet-900/40 to-cyan-900/20">
                  {/* Actual photo */}
                  <img
                    src="/profile.jpg"
                    alt="Rudrax Variya"
                    className="w-full h-full object-cover"
                    onError={e => { (e.target as HTMLImageElement).style.display = "none" }}
                  />
                  {/* Fallback avatar */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-900/60 to-cyan-900/40">
                    <span className="text-6xl sm:text-8xl font-bold gradient-text-purple-cyan select-none">RV</span>
                  </div>
                  {/* Scan line on photo */}
                  <div className="scan-line absolute inset-0 opacity-50" />
                </div>
              </TiltCard>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 glass-card rounded-xl px-3 py-2 border-glow-animate"
              >
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white">Open to work</span>
                </div>
              </motion.div>

              {/* Top-left experience badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 glass-card rounded-xl px-3 py-2 glow-purple"
              >
                <div className="text-center">
                  <div className="text-lg font-bold gradient-text-purple-cyan">5+</div>
                  <div className="text-xs text-zinc-400 font-mono">Years</div>
                </div>
              </motion.div>
            </div>

            {/* Tech stack images row */}
            <motion.div variants={item} className="flex gap-2 flex-wrap justify-center lg:justify-start">
              {[
                { bg: "#20232a", color: "#61DAFB", short: "Re" },
                { bg: "#000",    color: "#fff",    short: "Nx" },
                { bg: "#3178C6", color: "#fff",    short: "TS" },
                { bg: "#339933", color: "#fff",    short: "No" },
                { bg: "#FF2D20", color: "#fff",    short: "Lv" },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold cursor-default"
                  style={{ backgroundColor: t.bg, color: t.color, boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" }}
                >
                  {t.short}
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.1 }} className="px-3 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center text-xs text-zinc-400 font-mono cursor-default">
                +7 more
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right: text ── */}
          <div>
            <motion.div variants={item} className="mb-3">
              <span className="font-mono text-xs sm:text-sm text-violet-400 tracking-widest uppercase">01 — About me</span>
            </motion.div>
            <motion.h2 variants={item} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Building things{" "}
              <span className="gradient-text-purple-cyan">people love</span>
            </motion.h2>
            <motion.div variants={item} className="space-y-4 text-zinc-400 leading-relaxed text-sm sm:text-base">
              <p>
                Hey! I&apos;m <span className="text-white font-semibold">Rudrax Variya</span> — a
                Frontend-focused Software Engineer from{" "}
                <span className="text-violet-400">Gandhinagar, India</span>, with a BE in Computer
                Engineering from L.D.R.P. Institute of Technology and Research.
              </p>
              <p>
                With 5+ years of professional experience, I&apos;ve worked at{" "}
                <span className="text-cyan-400 font-semibold">Bacancy Technology</span> and{" "}
                <span className="text-pink-400 font-semibold">WebMobTech Solutions</span> — building
                scalable web apps, reusable component libraries, and leading technical initiatives across
                cross-functional teams.
              </p>
              <p>
                I specialize in <span className="text-white">React, Next.js, and TypeScript</span> with a
                strong focus on architecture, performance, and polished user experience.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
              {["React.js","Next.js","TypeScript","Redux","Zustand","GraphQL","Tailwind CSS","Ant Design","Node.js","Vue.js","Svelte","Gatsby"].map(t => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono">{t}</span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map(s => (
                <motion.div
                  key={s.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-card rounded-xl p-3 sm:p-4 text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold gradient-text-purple-cyan">{s.value}</div>
                  <div className="text-xs text-zinc-500 font-mono mt-0.5 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-7 flex flex-wrap gap-4">
              <a
                href="mailto:variya.rudrax@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-300 hover:text-white hover:bg-violet-600/30 text-sm font-mono transition-all duration-200"
              >
                📧 variya.rudrax@gmail.com
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white font-mono transition-colors group"
              >
                View Contact
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
