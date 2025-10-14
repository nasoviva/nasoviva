"use client"

import Layout from "./Layout"
import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/AboutSection"
import ProjectsSection from "./sections/ProjectsSection"
import SkillsSection from "./sections/SkillsSection"
import ExperienceSection from "./sections/ExperienceSection"
import Footer from "./Footer"

const sections = [
  { id: "hero", Component: HeroSection },
  { id: "about", Component: AboutSection },
  { id: "projects", Component: ProjectsSection },
  { id: "skills", Component: SkillsSection },
  { id: "experience", Component: ExperienceSection },
]

export default function LandingPage() {
  return (
    <Layout>
      {/* All sections on one page */}
      <div>
        {sections.map(({ id, Component }) => (
          <div key={id} className="active">
            <Component isActive={true} />
          </div>
        ))}
        <Footer />
      </div>
    </Layout>
  )
}