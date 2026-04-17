"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ContactForm } from "@/components/contact-form"

const SOCIALS = [
  {
    label: "Email",
    value: "variya.rudrax@gmail.com",
    href: "mailto:variya.rudrax@gmail.com",
    color: "#7c3aed",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth={1.5}>
        <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "rudraxvariya",
    href: "https://linkedin.com/in/rudraxvariya",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "rudraxvariya",
    href: "https://github.com/rudraxvariya",
    color: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    value: "@rudrax_variya",
    href: "https://twitter.com/rudrax_variya",
    color: "#1d9bf0",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    value: "@variya.rudrax",
    href: "https://medium.com/@variya.rudrax",
    color: "#10b981",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
]

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText("variya.rudrax@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  }

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
          {/* Header */}
          <motion.div variants={item} className="text-center mb-10 sm:mb-16">
            <span className="font-mono text-xs sm:text-sm text-pink-400 tracking-widest uppercase">
              05 — Contact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Let&apos;s <span className="gradient-text">work together</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto px-2 leading-relaxed">
              I&apos;m currently open to new opportunities. Whether it&apos;s a full-time role,
              freelance project, or just a chat — my inbox is always open.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={item} className="mb-10 sm:mb-14">
            <ContactForm />
          </motion.div>

          {/* Divider */}
          <motion.div variants={item} className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-xs text-zinc-600 font-mono tracking-widest whitespace-nowrap">OR REACH ME DIRECTLY</span>
            <div className="flex-1 h-px bg-white/5" />
          </motion.div>

          {/* Big email CTA */}
          <motion.div variants={item} className="flex justify-center mb-10 sm:mb-16 px-2">
            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-4 glass-card rounded-2xl px-5 sm:px-8 py-4 sm:py-6 border-glow-animate cursor-pointer group hover:border-violet-500/50 transition-all duration-300 active:scale-98"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:bg-violet-600/30 transition-colors flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current" strokeWidth={1.5}>
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm sm:text-lg font-mono text-white group-hover:text-violet-300 transition-colors">
                variya.rudrax@gmail.com
              </span>
              <span className="text-xs font-mono text-zinc-500 group-hover:text-violet-400 transition-colors flex-shrink-0">
                {copied ? "✓ Copied!" : "tap to copy"}
              </span>
            </button>
          </motion.div>

          {/* Divider */}
          <motion.div variants={item} className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-xs text-zinc-600 font-mono tracking-widest whitespace-nowrap">OR FIND ME ON</span>
            <div className="flex-1 h-px bg-white/5" />
          </motion.div>

          {/* Social grid — 1 col on mobile, 2 col sm, 3 col lg */}
          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="glass-card rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 group transition-all duration-200 active:scale-98"
                style={{ borderColor: `${s.color}20` }}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: `${s.color}15`,
                    color: s.color,
                    boxShadow: `0 0 0 1px ${s.color}25`,
                  }}
                >
                  {s.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-zinc-500 font-mono mb-0.5">{s.label}</div>
                  <div
                    className="text-xs sm:text-sm font-medium truncate transition-colors duration-200 group-hover:text-white"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </div>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-none stroke-current text-zinc-700 group-hover:text-zinc-400 transition-colors flex-shrink-0"
                  strokeWidth={2}
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="mt-16 sm:mt-24 text-center px-4"
      >
        <div className="h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6 sm:mb-8" />
        <p className="text-zinc-600 text-xs sm:text-sm font-mono">
          Designed & built by <span className="text-violet-400">Rudrax Variya</span> · Ahmedabad, India · {new Date().getFullYear()}
        </p>
        <p className="text-zinc-700 text-xs font-mono mt-2">
          Built with Next.js · Framer Motion · Tailwind CSS · Space Grotesk
        </p>
      </motion.div>
    </section>
  )
}
