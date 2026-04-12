"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Bacancy Technology",
    companyUrl: "https://bacancy.com",
    location: "Ahmedabad, India",
    period: "August 2023 — Present",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.3)",
    description:
      "Working as a dedicated developer maintaining and ensuring the stability of React and Angular web applications, while leading technical initiatives and knowledge-sharing across the team.",
    highlights: [
      "Maintained and ensured stability of React and Angular web applications",
      "Designed efficient project structures for new React projects, improving organisation and maintainability",
      "Provided frontend estimations for projects, ensuring accurate planning and resource allocation",
      "Led training sessions in React technology, fostering knowledge sharing and skill enhancement",
    ],
    tags: ["React", "Angular", "TypeScript", "Redux", "Project Architecture"],
  },
  {
    role: "Software Engineer",
    company: "WebMobTech Solutions Pvt. Ltd.",
    companyUrl: "https://webmobtech.com",
    location: "Ahmedabad, India",
    period: "May 2021 — July 2023",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.3)",
    description:
      "Designed and developed architectural frameworks for web applications, ensuring scalability, responsiveness, and performance. Collaborated with cross-functional teams and led sprint planning for a team of developers.",
    highlights: [
      "Designed architectural frameworks ensuring scalability, responsiveness, and performance optimisation",
      "Collaborated with cross-functional teams to define technical requirements aligned with business objectives",
      "Planned and coordinated sprint tasks — both personal assignments and delegation to junior members",
      "Conducted extensive R&D for new modules, exploring innovative technologies and methodologies",
      "Collaborated with graphic designers to transform concepts into visually captivating elements",
    ],
    tags: ["React", "Redux", "Redux Saga", "Ant Design", "Forge UI", "REST API"],
  },
  {
    role: "Software Engineer Intern",
    company: "WebMobTech Solutions Pvt. Ltd.",
    companyUrl: "https://webmobtech.com",
    location: "Ahmedabad, India",
    period: "December 2020 — April 2021",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.3)",
    description:
      "Achieved a 99% reduction in data errors through client-side validation on multistage forms, and built responsive, user-friendly websites with a focus on intuitive navigation and seamless interactions.",
    highlights: [
      "Achieved 99% reduction in data errors via client-side validation on complex multistage forms",
      "Built responsive, user-friendly and engaging websites using HTML, CSS, and JavaScript",
      "Contributed to UX optimisation — implemented intuitive navigation and seamless interactions",
    ],
    tags: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
  },
]

const EDUCATION = {
  degree: "Bachelor of Engineering — Computer Engineering",
  institution: "L.D.R.P. Institute of Technology and Research",
  location: "Gandhinagar, Gujarat, India",
  period: "May 2021",
  color: "#10b981",
  glow: "rgba(16,185,129,0.3)",
}

const AWARDS = [
  { title: "Employee of the Quarter", org: "Bacancy Services Pvt. Ltd.", year: "Q1 2025" },
  { title: "Team of the Quarter", org: "Bacancy Services Pvt. Ltd.", year: "Q2 2025" },
  { title: "Top Performer — Rockstar Rookie", org: "Bacancy Services Pvt. Ltd.", year: "May 2024" },
  { title: "Skill Enhancement Annual Service Award", org: "WebMobTech Solutions Pvt. Ltd.", year: "December 2021" },
  { title: "Hacktoberfest Participant", org: "DigitalOcean", year: "Oct 2020 – Oct 2022" },
]

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="experience" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="font-mono text-xs sm:text-sm text-violet-400 tracking-widest uppercase">
            04 — Experience
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            className="absolute left-3 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
          />

          <div className="space-y-8 sm:space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="relative pl-10 sm:pl-16"
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-3 sm:left-6 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center -translate-x-1/2"
                  style={{ borderColor: exp.color, backgroundColor: "#050508", boxShadow: `0 0 16px ${exp.glow}` }}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, type: "spring", bounce: 0.4 }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: exp.color }} />
                </motion.div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-5 sm:p-7 transition-all duration-300" style={{ borderColor: `${exp.color}25` }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg sm:text-xl">{exp.role}</h3>
                      <a
                        href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-sm transition-colors hover:underline"
                        style={{ color: exp.color }}
                      >
                        {exp.company}
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current" strokeWidth={2}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                    <div className="flex sm:flex-col sm:items-end gap-2 flex-wrap">
                      <div
                        className="text-xs font-mono px-3 py-1 rounded-full border self-start flex-shrink-0"
                        style={{ color: exp.color, borderColor: `${exp.color}40`, backgroundColor: `${exp.color}10` }}
                      >
                        {exp.period}
                      </div>
                      <div className="text-xs text-zinc-500 font-mono">{exp.location}</div>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.tags.map(tag => (
                      <span
                        key={tag} className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-xs font-mono"
                        style={{ backgroundColor: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}28` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="relative pl-10 sm:pl-16"
            >
              <motion.div
                className="absolute left-3 sm:left-6 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center -translate-x-1/2"
                style={{ borderColor: EDUCATION.color, backgroundColor: "#050508", boxShadow: `0 0 16px ${EDUCATION.glow}` }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.9, type: "spring", bounce: 0.4 }}
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: EDUCATION.color }} />
              </motion.div>
              <div className="glass-card rounded-2xl p-5 sm:p-7" style={{ borderColor: `${EDUCATION.color}25` }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3">
                  <div>
                    <div className="text-xs font-mono mb-1 tracking-widest uppercase" style={{ color: EDUCATION.color }}>Education</div>
                    <h3 className="text-white font-bold text-base sm:text-lg leading-snug">{EDUCATION.degree}</h3>
                    <p className="text-zinc-400 text-sm mt-1">{EDUCATION.institution}</p>
                    <p className="text-zinc-600 text-xs font-mono mt-0.5">{EDUCATION.location}</p>
                  </div>
                  <div
                    className="text-xs font-mono px-3 py-1 rounded-full border self-start flex-shrink-0"
                    style={{ color: EDUCATION.color, borderColor: `${EDUCATION.color}40`, backgroundColor: `${EDUCATION.color}10` }}
                  >
                    {EDUCATION.period}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 sm:mt-20"
        >
          <div className="text-center mb-8">
            <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">🏆 Awards & Activities</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AWARDS.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="glass-card rounded-xl p-4 text-center hover:border-amber-500/30 transition-colors"
              >
                <div className="text-2xl mb-2">
                  {i === 0 ? "🏆" : i === 1 ? "🤝" : i === 2 ? "🥇" : i === 3 ? "🏅" : "🎯"}
                </div>
                <div className="text-white text-xs font-semibold leading-snug mb-1">{a.title}</div>
                <div className="text-zinc-500 text-xs font-mono">{a.org}</div>
                <div className="text-amber-500/70 text-xs font-mono mt-1">{a.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
