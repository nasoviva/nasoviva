"use client"

import Layout from "./Layout"
import HeroSection from "./sections/HeroSection"
import ProjectsSection from "./sections/ProjectsSection"
import ExperienceSection from "./sections/ExperienceSection"
import Footer from "./Footer"

export default function LandingPage() {
  return (
    <Layout>
      <div>
        <div className="active">
          <HeroSection />
        </div>
        <div className="active">
          <ProjectsSection />
        </div>
        <div className="active">
          <ExperienceSection />
        </div>
        <Footer />
      </div>
    </Layout>
  )
}