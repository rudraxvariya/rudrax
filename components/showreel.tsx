"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Showreel() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-violet-600/8 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="font-mono text-xs sm:text-sm text-cyan-400 tracking-widest uppercase">
            ✦ Preview
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">
            See it in{" "}
            <span className="gradient-text">action</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-md mx-auto">
            A quick look at the interfaces and experiences I build.
          </p>
        </motion.div>

        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative group"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-700" />

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden gradient-border-spin">
            <div className="relative aspect-video bg-[#0d0d18] flex items-center justify-center">
              {/* Fallback gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-[#0d0d18] to-cyan-900/30" />

              {/* Mock browser chrome */}
              <div className="absolute top-0 inset-x-0 h-8 sm:h-10 bg-[#111]/80 flex items-center gap-2 px-4 border-b border-white/5 z-10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4 h-4 sm:h-5 bg-white/5 rounded-full flex items-center justify-center">
                  <span className="text-zinc-600 text-xs font-mono">rudraxvariya.github.io</span>
                </div>
              </div>

              {/* Preview image */}
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                alt="Portfolio preview"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Scan lines overlay */}
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: "repeating-linear-gradient(0deg, rgba(124,58,237,0.03) 0px, rgba(124,58,237,0.03) 1px, transparent 1px, transparent 4px)"
              }} />

              {/* Corner tags */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                {["React", "Next.js", "Motion"].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-black/50 border border-white/10 text-zinc-400 backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
