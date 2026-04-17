"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Status = "idle" | "sending" | "success" | "error"

// Set your Formspree form ID here — get one free at https://formspree.io
// e.g. "https://formspree.io/f/xpwzabcd"
const FORMSPREE_URL = "https://formspree.io/f/xpwzabcd"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const data = new FormData(e.currentTarget)
    const name = (data.get("name") as string)?.trim()
    const email = (data.get("email") as string)?.trim()
    const msg = (data.get("message") as string)?.trim()

    if (!name || !email || !msg) {
      setStatus("error")
      setMessage("Please fill in all required fields.")
      return
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })

      if (res.ok) {
        setStatus("success")
        setMessage("Message sent! I'll get back to you soon.")
        formRef.current?.reset()
      } else {
        throw new Error()
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please email me directly.")
    }

    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="glass-card rounded-2xl p-6 sm:p-8 border border-violet-500/15"
    >
      <div className="mb-6">
        <h3 className="text-white font-bold text-lg mb-1">Send a message</h3>
        <p className="text-zinc-500 text-sm font-mono">I usually reply within 24 hours.</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono text-zinc-500 mb-1.5">
              Name <span className="text-violet-400">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Rudrax Variya"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-mono text-zinc-500 mb-1.5">
              Email <span className="text-violet-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-mono text-zinc-500 mb-1.5">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Project idea / freelance / just saying hi"
            className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-mono text-zinc-500 mb-1.5">
            Message <span className="text-violet-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project or what you'd like to collaborate on..."
            className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-200 resize-none"
          />
        </div>

        <AnimatePresence>
          {status !== "idle" && status !== "sending" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-mono ${
                status === "success"
                  ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                  : "bg-red-500/10 border border-red-500/30 text-red-400"
              }`}
            >
              <span>{status === "success" ? "✓" : "✕"}</span>
              {message}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm transition-all duration-200 glow-purple flex items-center justify-center gap-2"
        >
          {status === "sending" ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={2}>
                <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}
