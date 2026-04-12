"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const ROLES = [
  "Full-Stack Developer",
  "React & Next.js Engineer",
  "Node.js Backend Dev",
  "UI/UX Enthusiast",
  "Open Source Contributor",
]

function useTypewriter(words: string[], speed = 75, pause = 2200) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const current = words[wordIndex % words.length]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && text === current) t = setTimeout(() => setDeleting(true), pause)
    else if (deleting && text === "") { setDeleting(false); setWordIndex(i => (i + 1) % words.length) }
    else t = setTimeout(() => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)), deleting ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [text, deleting, wordIndex, words, speed, pause])
  return text
}

/* Magnetic button wrapper */
function MagneticBtn({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })

  function onMove(e: React.MouseEvent) {
    const r = ref.current!.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.35)
    y.set((e.clientY - r.top - r.height / 2) * 0.35)
  }
  function onLeave() { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.a>
  )
}

/* Floating 3-D geometry pieces */
function FloatShape({ style, className }: { style?: React.CSSProperties; className?: string }) {
  return <div className={`absolute pointer-events-none ${className ?? ""}`} style={style} />
}

export function Hero() {
  const role = useTypewriter(ROLES)
  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)
  const blobX = useSpring(cursorX, { damping: 18, stiffness: 80 })
  const blobY = useSpring(cursorY, { damping: 18, stiffness: 80 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      document.documentElement.style.setProperty("--glow-x", `${e.clientX}px`)
      document.documentElement.style.setProperty("--glow-y", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [cursorX, cursorY])

  const containerV = { hidden: {}, show: { transition: { staggerChildren: 0.13 } } }
  const itemV = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24">

      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-20"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay absolute inset-0" />
      </div>

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 z-0 grid-bg opacity-60" />

      {/* ── Scan line ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="scan-line" />
      </div>

      {/* ── Magnetic cursor blob (desktop only) ── */}
      <motion.div
        className="pointer-events-none fixed z-10 hidden md:block"
        style={{
          x: useTransform(blobX, v => v - 200),
          y: useTransform(blobY, v => v - 200),
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="orb1 absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-violet-700/20 blur-3xl" />
        <div className="orb2 absolute bottom-1/4 right-1/4 w-56 sm:w-[500px] h-56 sm:h-[500px] rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="orb3 absolute top-2/3 left-1/3 w-40 sm:w-72 h-40 sm:h-72 rounded-full bg-pink-600/10 blur-3xl" />
      </div>

      {/* ── 3D floating shapes ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-right diamond */}
        <motion.div
          animate={{ rotate: [0, 360], y: [0, -20, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-20 right-12 sm:right-24 w-12 sm:w-20 h-12 sm:h-20 border border-violet-500/30 bg-violet-500/5 backdrop-blur-sm"
          style={{ transform: "rotate(45deg)" }}
        />
        {/* Bottom-left triangle */}
        <motion.div
          animate={{ rotate: [0, -360], y: [0, 16, 0] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
          className="absolute bottom-32 left-8 sm:left-20 w-10 sm:w-16 h-10 sm:h-16 border border-cyan-500/25 bg-cyan-500/5"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
        {/* Mid-right circle ring */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-8 sm:right-16 w-16 sm:w-28 h-16 sm:h-28 rounded-full border border-pink-500/25"
        />
        {/* Top-left small ring */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 left-8 sm:left-16 w-10 sm:w-18 h-10 sm:h-18 rounded-full border border-violet-400/20"
        />
        {/* Dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-violet-400/50"
            style={{ left: `${8 + (i * 8.1) % 84}%`, top: `${12 + (i * 6.7) % 76}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
            transition={{ duration: 3 + (i % 4), delay: (i % 5) * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <motion.div
        variants={containerV}
        initial="hidden"
        animate="show"
        className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemV} className="inline-flex mb-6 sm:mb-8">
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-300 text-xs font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for work · 5+ yrs exp
          </span>
        </motion.div>

        {/* Name — big staggered reveal */}
        <motion.div variants={itemV} className="mb-3 sm:mb-5">
          <h1 className="text-[clamp(3rem,12vw,7rem)] font-bold leading-[1] tracking-tight">
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            >
              Rudrax
            </motion.span>
            <motion.span
              className="block shimmer"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            >
              Variya
            </motion.span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div variants={itemV} className="mb-6 sm:mb-8 h-8 sm:h-10 flex items-center justify-center overflow-hidden">
          <span className="font-mono text-sm sm:text-lg text-cyan-400">
            <span className="text-violet-400">{"<"}</span>
            <span className="text-cyan-400"> {role}</span>
            <span className="cursor-blink text-violet-400">_</span>
            <span className="text-violet-400">{" />"}</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={itemV} className="max-w-xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 px-2">
          Based in{" "}
          <span className="text-violet-400 font-semibold">Ahmedabad, India</span> — crafting{" "}
          <span className="text-cyan-400 font-semibold">pixel-perfect UIs</span> and{" "}
          <span className="text-pink-400 font-semibold">scalable APIs</span>{" "}
          that millions of users trust.
        </motion.p>

        {/* CTAs — magnetic on desktop */}
        <motion.div variants={itemV} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <MagneticBtn
            href="#projects"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl bg-violet-600 text-white font-bold text-sm transition-all duration-300 glow-purple overflow-hidden text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </MagneticBtn>
          <MagneticBtn
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-violet-500/50 text-violet-300 hover:text-white hover:border-violet-400 font-bold text-sm transition-all duration-300 hover:bg-violet-500/10 text-center"
          >
            Let&apos;s Talk
          </MagneticBtn>
        </motion.div>

        {/* Socials */}
        <motion.div variants={itemV} className="mt-10 sm:mt-14 flex items-center justify-center gap-5">
          {[
            { label:"GitHub",   href:"https://github.com/rudraxvariya",             d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
            { label:"LinkedIn", href:"https://linkedin.com/in/rudraxvariya", d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
            { label:"Twitter",  href:"https://twitter.com/rudrax_variya",            d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
            { label:"Medium",   href:"https://medium.com/@variya.rudrax",           d:"M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" },
          ].map(s => (
            <motion.a
              key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-zinc-500 hover:text-violet-400 transition-colors duration-200 p-1"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d={s.d} /></svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemV}
          className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto"
        >
          {[
            { value: "5+", label: "Years" },
            { value: "17+", label: "Projects" },
            { value: "2", label: "Companies" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text-purple-cyan">{s.value}</div>
              <div className="text-xs text-zinc-600 font-mono mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  )
}
