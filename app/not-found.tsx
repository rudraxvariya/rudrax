"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050508] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-700/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 z-0 grid-bg opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-lg mx-auto"
      >
        {/* Glitchy 404 */}
        <motion.div
          animate={{ x: [0, -2, 2, -1, 1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3 }}
          className="text-[clamp(5rem,20vw,10rem)] font-bold leading-none select-none"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 40px rgba(124,58,237,0.4))",
          }}
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="font-mono text-xs text-violet-400 tracking-widest uppercase mb-4">
            Page not found
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Looks like you&apos;re lost in the void
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="group relative px-8 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all duration-300 glow-purple flex items-center gap-2"
          >
            <motion.span animate={{ x: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              ←
            </motion.span>
            Back to Home
          </Link>
          <Link
            href="/#projects"
            className="px-8 py-3 rounded-2xl border border-violet-500/40 text-violet-300 hover:text-white hover:border-violet-400 font-bold text-sm transition-all duration-300 hover:bg-violet-500/10"
          >
            View Projects
          </Link>
        </motion.div>

        {/* Floating dots */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-violet-400/40"
              style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [0, -16, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3 + i * 0.5, delay: i * 0.4, repeat: Infinity }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
