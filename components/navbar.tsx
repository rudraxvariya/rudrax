"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(5,5,8,0)", "rgba(5,5,8,0.85)"]
  )
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      style={{ backgroundColor: bg }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
      />
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm glow-purple group-hover:scale-110 transition-transform">
            R
          </span>
          <span className="font-bold text-sm tracking-wide hidden sm:block">
            <span className="text-white">rudrax</span>
            <span className="text-violet-400">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  active === item.href.slice(1)
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {active === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/10 border border-violet-500/30"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-200 glow-purple hover:scale-105"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <span className={cn("w-5 h-0.5 bg-white transition-all duration-300", menuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("w-5 h-0.5 bg-white transition-all duration-300", menuOpen && "opacity-0")} />
          <span className={cn("w-5 h-0.5 bg-white transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-[#050508]/95 backdrop-blur-xl"
      >
        <ul className="px-6 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-4 text-center rounded-lg bg-violet-600 text-white text-sm font-semibold"
            >
              Hire me
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  )
}
