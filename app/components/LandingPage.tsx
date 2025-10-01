"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Layout from "./Layout"
import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/AboutSection"
import SkillsSection from "./sections/SkillsSection"
import ExperienceSection from "./sections/ExperienceSection"
import ContactSection from "./sections/ContactSection"

const sections = [
  { id: "hero", Component: HeroSection },
  { id: "about", Component: AboutSection },
  { id: "skills", Component: SkillsSection },
  { id: "experience", Component: ExperienceSection },
  { id: "contact", Component: ContactSection },
]

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <Layout>
      {/* Navigation dots */}
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full my-2 transition-all ${
              index === activeSection ? "bg-primary scale-150" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            onClick={() => handleNavClick(index)}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </nav>

      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-30" style={{ scaleX }} />

      {/* Sections container */}
      <div ref={containerRef} className="h-full overflow-y-auto snap-y snap-mandatory">
        {sections.map(({ id, Component }, index) => (
          <Component key={id} isActive={index === activeSection} />
        ))}
      </div>
    </Layout>
  )
}