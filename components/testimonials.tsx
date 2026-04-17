"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const TESTIMONIALS = [
  {
    name: "Colleague / Manager",
    role: "Senior Engineer, Bacancy Technology",
    avatar: "CM",
    color: "#7c3aed",
    text: "Rudrax consistently delivers high-quality, well-architected frontend code. His ability to pick up new technologies quickly and mentor junior developers makes him a true asset to any team.",
  },
  {
    name: "Tech Lead",
    role: "Lead Developer, WebMobTech Solutions",
    avatar: "TL",
    color: "#06b6d4",
    text: "Working with Rudrax was a pleasure. He has a sharp eye for UI/UX details and his Redux architecture on our security suite project was clean and highly maintainable.",
  },
  {
    name: "Project Manager",
    role: "PM, WebMobTech Solutions",
    avatar: "PM",
    color: "#ec4899",
    text: "Rudrax brings both technical excellence and great communication skills. He was always proactive in sprint planning, delivered on time, and never compromised on code quality.",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-amber-400">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="testimonials" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-violet-600/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-cyan-500/6 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="font-mono text-xs sm:text-sm text-amber-400 tracking-widest uppercase">
            — Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">
            What people <span className="gradient-text">say</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto px-2">
            Kind words from colleagues and managers I&apos;ve had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              style={{ borderColor: `${t.color}25` }}
            >
              <Stars />
              <p className="text-zinc-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: `${t.color}20`, color: t.color, border: `1px solid ${t.color}40` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-zinc-500 text-xs font-mono">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-8 text-xs text-zinc-600 font-mono"
        >
          Full recommendations on{" "}
          <a
            href="https://linkedin.com/in/rudraxvariya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
          >
            LinkedIn
          </a>
        </motion.p>
      </div>
    </section>
  )
}
