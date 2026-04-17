import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MarqueeStrip } from "@/components/marquee-strip"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Testimonials } from "@/components/testimonials"
import { GithubStats } from "@/components/github-stats"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <MarqueeStrip />
        <Skills />
        <Projects />
        <Experience />
        <GithubStats />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
