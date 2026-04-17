"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const GITHUB_USER = "rudraxvariya"

const PINNED_REPOS = [
  {
    name: "rudraxvariya.github.io",
    description: "Personal portfolio built with Next.js, Framer Motion & Tailwind CSS.",
    language: "TypeScript",
    langColor: "#3178C6",
    stars: 2,
    forks: 0,
    url: "https://github.com/rudraxvariya/rudraxvariya.github.io",
  },
  {
    name: "weather-app",
    description: "React weather app using OpenWeatherMap API with live forecasts.",
    language: "JavaScript",
    langColor: "#F7DF1E",
    stars: 1,
    forks: 0,
    url: "https://github.com/rudraxvariya/weather-app",
  },
  {
    name: "moviedb-app",
    description: "Movie discovery app powered by The Movie Database API.",
    language: "JavaScript",
    langColor: "#F7DF1E",
    stars: 1,
    forks: 0,
    url: "https://github.com/rudraxvariya/moviedb-app",
  },
]

const STATS = [
  { value: "17+", label: "Public Repos" },
  { value: "5+", label: "Years Active" },
  { value: "10+", label: "Technologies" },
  { value: "∞", label: "Commits" },
]

export function GithubStats() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="github" ref={ref} className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs sm:text-sm text-emerald-400 tracking-widest uppercase">
            — Open Source
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-zinc-400 text-sm max-w-xl mx-auto">
            Actively building and shipping. Here&apos;s a snapshot of my open-source presence.
          </p>
        </motion.div>

        {/* Contribution graph via GitHub readme stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card rounded-2xl p-4 sm:p-6 mb-8 overflow-hidden"
        >
          <div className="text-xs text-zinc-500 font-mono mb-4">Contribution Graph</div>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/7c3aed/${GITHUB_USER}`}
              alt="GitHub contribution chart"
              className="w-full max-w-2xl rounded-lg opacity-90"
              style={{ filter: "brightness(1.1)" }}
            />
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-emerald-400">{s.value}</div>
              <div className="text-xs text-zinc-500 font-mono mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Pinned repos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PINNED_REPOS.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.12 }}
              whileHover={{ y: -3 }}
              className="glass-card rounded-xl p-4 flex flex-col gap-3 hover:border-emerald-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-zinc-500 flex-shrink-0">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span className="text-white text-sm font-semibold truncate">{repo.name}</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed flex-1">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 4.517 1.48-8.279L0 9.306l8.332-1.151z"/></svg>
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6.75-15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.25 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm13.5-1.5A3 3 0 0 0 15 7.5a2.97 2.97 0 0 0 .285 1.266L12 12.561l-3.285-3.795A2.97 2.97 0 0 0 9 7.5a3 3 0 1 0-3 3 2.97 2.97 0 0 0 1.5-.405v6.81a2.97 2.97 0 0 0-1.5-.405 3 3 0 1 0 3 3 2.97 2.97 0 0 0-.285-1.266L12 14.94l3.285 3.195A2.97 2.97 0 0 0 15 19.5a3 3 0 1 0 3-3 2.97 2.97 0 0 0-1.5.405V9.096a2.97 2.97 0 0 0 1.5.404 3 3 0 0 0 0-6z"/></svg>
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-8"
        >
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-700 text-zinc-400 hover:text-white hover:border-emerald-500/50 text-xs sm:text-sm font-mono transition-all duration-200 hover:bg-emerald-500/10"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  )
}
