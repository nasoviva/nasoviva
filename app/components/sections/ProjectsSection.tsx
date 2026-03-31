"use client"

import { useState } from "react"
import { useLanguage } from "@/app/contexts/LanguageContext"
import AnimatedElement from "@/app/components/ui/animated-element"

const projects = [
  {
    id: "to-done",
    image: "/toDone.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "atlas",
    image: "/atlas-project.png",
    technologies: ["React", "Next.js",  "TypeScript","Tailwind CSS"],
  },
  {
    id: "partner-sites",
    image: "/signals.png", 
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "ui-implementation",
    image: "/ui-implementation.png",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
  },
  {
    id: "movie-picker",
    image: "/movie-picker.png",
    technologies: ["HTML", "CSS", "JavaScript"],
  }
]

export default function ProjectsSection({ isActive }: { isActive: boolean }) {
  const [activeProject, setActiveProject] = useState("to-done")
  const { t } = useLanguage()

  const activeProjectData = projects.find((p) => p.id === activeProject) || projects[0]

  const getContent = (projectId: string) => {
    switch (projectId) {
      case "atlas":
        return {
          description: t("projects.atlas.description"),
          features: []
        }
      case "partner-sites":
        return {
          description: t("projects.partner-sites.description"),
          features: []
        }
      case "ui-implementation":
        return {
          description: t("projects.ui-implementation.description"),
          features: []
        }
      case "movie-picker":
        return {
          description: t("projects.movie-picker.description"),
          features: []
        }
      case "to-done":
        return {
          description: t("projects.to-done.description"),
          features: []
        }
      default:
        return {
          description: t("projects.descriptionFallback"),
          features: [
            { number: "0", label: t("projects.stats.features") },
            { number: "0%", label: t("projects.stats.complete") },
            { number: "0", label: t("projects.stats.technologies") }
          ]
        }
    }
  }

  const content = getContent(activeProject)

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-8 text-foreground">
          {/* Section Title and Description */}
          <div className="text-center mb-8">
            <AnimatedElement
              direction="up"
              distance={60}
              delay={0.2}
            >
              <h2 className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-thin-heading leading-[1.1] tracking-tight mb-8">
                {t("projects.title")}
              </h2>
            </AnimatedElement>
            <AnimatedElement
              direction="up"
              distance={40}
              delay={0.4}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-6xl mx-auto mb-8 font-thin-heading">
                {t("projects.subtitle")}
              </p>
            </AnimatedElement>
          </div>

          {/* Project Selection Buttons */}
          <AnimatedElement
            direction="up"
            distance={30}
            delay={0.6}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {projects.map((project) => (
              <button
                key={project.id}
                        className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-normal transition-all duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base ${
                  activeProject === project.id
                    ? "bg-primary text-primary-foreground hover:scale-105"
                    : "border border-primary bg-transparent text-primary hover:scale-105"
                }`}
                onClick={() => setActiveProject(project.id)}
              >
                {t(`projects.${project.id}.name`)}
              </button>
            ))}
          </AnimatedElement>

          {/* Content */}
          <AnimatedElement
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-8"
            direction="up"
            distance={40}
            delay={0.8}
          >
            {/* Left Column - Text */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium-thin mb-4">
                {t(`projects.${activeProjectData.id}.name`)}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0 mb-6 font-thin-heading">
                {content.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                {activeProjectData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-5 mb-6 justify-center lg:justify-start">
                {content.features.map((feature, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">{feature.number}</div>
                    <div className="text-sm text-muted-foreground">{feature.label}</div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="text-center lg:text-left flex flex-col sm:flex-row gap-3">
                {activeProject === "atlas" ? (
                  <a
                    href="https://atlasanalytics.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:scale-105 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-normal"
                  >
                    {t("projects.viewWebsite")}
                  </a>
                ) : activeProject === "partner-sites" ? (
                  <a
                    href="https://www.joinsignals.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:scale-105 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-normal"
                  >
                    {t("projects.viewWebsite")}
                  </a>
                ) : activeProject === "ui-implementation" ? (
                  <>
                    <a
                      href="https://github.com/nasoviva/Christmas-shop"
                      target="_blank"
                      rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:scale-105 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-normal"
                    >
                      {t("projects.viewCode")}
                    </a>
                    <a
                      href="https://nasoviva.github.io/Christmas-shop/christmas-shop/pages/home/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:scale-105 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-normal"
                    >
                      {t("projects.viewWebsite")}
                    </a>
                  </>
                ) : activeProject === "movie-picker" ? (
                  <>
                    <a
                      href="https://github.com/nasoviva/movie-picker"
                      target="_blank"
                      rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:scale-105 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-normal"
                    >
                      {t("projects.viewCode")}
                    </a>
                    <a
                      href="https://nasoviva.github.io/movie-picker/movie-picker/pages/"
                      target="_blank"
                      rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:scale-105 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-normal"
                    >
                      {t("projects.viewWebsite")}
                    </a>
                  </>
                ) : activeProject === "to-done" ? (
                  <>
                    <a
                      href="https://github.com/nasoviva/Task-Management-Application"
                      target="_blank"
                      rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:scale-105 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-normal"
                    >
                      {t("projects.viewCode")}
                    </a>
                    <a
                      href="https://to-done-nasoviva.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:scale-105 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-normal"
                    >
                      {t("projects.viewWebsite")}
                    </a>
                  </>
                ) : (
                  <a
                    href="#"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:scale-105 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-normal"
                  >
                    {t("projects.learnMore")}
                  </a>
                )}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">
                {activeProject === "atlas" ? (
                  <a
                    href="https://atlasanalytics.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-64 rounded-lg shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-200"
                  >
                    <img
                      src="/atlas.png"
                      alt={t("projects.atlas.previewAlt")}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </a>
                ) : activeProject === "partner-sites" ? (
                  <a
                    href="https://www.joinsignals.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-64 rounded-lg shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-200"
                  >
                    <img
                      src="/signals.png"
                      alt={t("projects.partner-sites.previewAlt")}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </a>
                ) : activeProject === "ui-implementation" ? (
                  <a
                    href="https://nasoviva.github.io/Christmas-shop/christmas-shop/pages/home/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-64 rounded-lg shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-200"
                  >
                    <img
                      src="/cristmas_shop.png"
                      alt={t("projects.ui-implementation.previewAlt")}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </a>
                ) : activeProject === "movie-picker" ? (
                  <a
                    href="https://nasoviva.github.io/movie-picker/movie-picker/pages/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-64 rounded-lg shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-200"
                  >
                    <img
                      src="/movie-picker.png"
                      alt={t("projects.movie-picker.previewAlt")}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </a>
                ) : activeProject === "to-done" ? (
                  <a
                    href="https://to-done-nasoviva.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-64 rounded-lg shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-200"
                  >
                    <img
                      src="/toDone.png"
                      alt={t("projects.to-done.previewAlt")}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </a>
                ) : (
                  <div className="w-full h-64 bg-secondary rounded-lg shadow-2xl flex items-center justify-center">
                    <span className="text-muted-foreground text-lg">
                      {t(`projects.${activeProjectData.id}.name`)} {t("projects.preview")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
