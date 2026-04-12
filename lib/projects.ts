export const PROJECTS = [
  {
    slug: "agricultural-project",
    number: "01",
    title: "Agricultural Project",
    company: "Bacancy Technology",
    period: "2023 — Present",
    role: "Frontend Developer",
    description:
      "Frontend development on both React and Angular legacy systems — optimized the codebase, implemented an efficient reusable folder structure, integrated latest frameworks, and added localization for multi-language support.",
    overview:
      "This agricultural management platform serves farmers and agribusinesses with real-time crop monitoring, yield analytics, and supply chain tracking. As the dedicated frontend developer, I inherited a dual React + Angular codebase and led a systematic modernization effort to improve stability, performance, and developer experience.",
    highlights: [
      "Maintained and enhanced React & Angular legacy applications",
      "Optimized codebase for performance and best practices",
      "Implemented reusable folder structure for maintainability",
      "Added localization for multi-language global audience support",
      "Coordinated cross-functional project planning and delivery",
    ],
    tags: ["React", "Angular", "TypeScript", "Localization", "Redux"],
    color: "#10b981",
    glow: "rgba(16,185,129,0.3)",
    gradient: "from-emerald-600/25 to-green-900/25",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    heroBg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
  },
  {
    slug: "pro-watch-security-suite",
    number: "02",
    title: "Pro-Watch Security Suite",
    company: "WebMobTech Solutions",
    period: "2022 — 2023",
    role: "Frontend Developer",
    description:
      "Dedicated frontend developer on the Pro-Watch Integrated Security Suite — built licensing pages for upgrade/downgrade flows, managed camera analytics, integrated ML models via Redux Saga, and conducted API optimizations.",
    overview:
      "Pro-Watch is an enterprise-grade integrated security management platform used by large facilities to monitor CCTV feeds, manage access control, and run AI-powered threat detection. I was responsible for building and maintaining the entire frontend, working closely with backend and ML teams to deliver a seamless, high-performance interface.",
    highlights: [
      "Built licensing pages for upgrade/downgrade and camera analytics",
      "Used Forge UI design framework for intuitive interfaces",
      "Implemented Redux & Redux Saga for state and async data flow",
      "Integrated seamlessly with a Machine Learning-based model",
      "Conducted API optimizations to improve system performance",
    ],
    tags: ["React", "Redux", "Redux Saga", "Forge UI", "REST API", "ML"],
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.3)",
    gradient: "from-violet-600/25 to-purple-900/25",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    heroBg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  },
  {
    slug: "intertec-healthcare",
    number: "03",
    title: "Intertec Healthcare",
    company: "WebMobTech Solutions",
    period: "2021 — 2022",
    role: "Frontend Developer",
    description:
      "Built reusable React components for a healthcare services platform — handled complex multi-step forms with large datasets, implemented multi-language localization, lazy loading, and used Ant Design for a polished UI.",
    overview:
      "Intertec is a healthcare services portal enabling patients to book appointments, submit medical histories, and access health records across multiple regions. I built a comprehensive reusable component library and tackled the platform's most complex challenge — a multi-step intake form handling thousands of data points with full localization support.",
    highlights: [
      "Developed common and reusable React component library",
      "Handled complex multi-step forms with large data sets",
      "Implemented localization for multi-language support",
      "Applied lazy loading to optimize page load performance",
      "Worked with Ant Design (antd) for consistent, accessible UI",
    ],
    tags: ["React", "Ant Design", "Localization", "Lazy Loading", "Forms"],
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.3)",
    gradient: "from-cyan-600/25 to-blue-900/25",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    heroBg: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80",
  },
  {
    slug: "softacheck-code-review-platform",
    number: "04",
    title: "SoftaCheck — Code Review Platform",
    company: "WebMobTech Solutions",
    period: "2021",
    role: "Lead Frontend Developer",
    description:
      "Spearheaded a unified platform consolidating Code Review, Static Analysis (C/C++), and Doxygen documentation — integrated with GitHub repositories for seamless code collaboration and version control.",
    overview:
      "SoftaCheck is an internal developer tooling platform that unifies code review workflows, static analysis for C/C++ vulnerabilities, and auto-generated Doxygen documentation into a single cohesive interface. I led the frontend architecture and implementation, integrating directly with the GitHub API for repository browsing and pull request management.",
    highlights: [
      "Consolidated Code Review, Static Analysis & Doxygen into one platform",
      "Implemented static analysis for C/C++ code vulnerability detection",
      "Integrated with GitHub for seamless collaboration and version control",
      "Led cross-functional coordination for timely delivery",
    ],
    tags: ["React", "GitHub API", "Static Analysis", "C/C++", "Doxygen"],
    color: "#ec4899",
    glow: "rgba(236,72,153,0.3)",
    gradient: "from-pink-600/25 to-rose-900/25",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    heroBg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80",
  },
]

export type Project = (typeof PROJECTS)[0]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
