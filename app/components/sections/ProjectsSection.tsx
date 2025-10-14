"use client"

import { useState } from "react"
import { useLanguage } from "@/app/contexts/LanguageContext"
import AnimatedElement from "@/app/components/ui/animated-element"

const projects = [
  {
    id: "atlas",
    name: "Company Website",
    description: "Corporate website development and maintenance",
    image: "/atlas-project.png",
    technologies: ["JavaScript", "HTML", "CSS", "CARRD", "Brevo"],
    category: "Web Development"
  },
  {
    id: "partner-sites",
    name: "Partner Website",
    description: "Modern responsive websites for business partners",
    image: "/signals.png", 
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web Development"
  },
  {
    id: "ui-implementation",
    name: "UI Implementation",
    description: "Pixel-perfect Figma designs brought to life",
    image: "/ui-implementation.png",
    technologies: ["JavaScript", "HTML", "CSS", "Figma", "Git"],
    category: "UI/UX"
  }
]

export default function ProjectsSection({ isActive }: { isActive: boolean }) {
  const [activeProject, setActiveProject] = useState("atlas")
  const { t, language } = useLanguage()

  const activeProjectData = projects.find((p) => p.id === activeProject) || projects[0]

  const getContent = (projectId: string) => {
    switch (projectId) {
      case "atlas":
        return {
          description: language === 'ru' 
            ? "Разработка и поддержка корпоративного веб-сайта ATLAS ANALYTICS. Создание современного, адаптивного сайта с интеграцией различных технологий для обеспечения функциональности и производительности."
            : language === 'es'
            ? "Desarrollo y mantenimiento del sitio web corporativo de ATLAS ANALYTICS. Creación de un sitio web moderno y responsivo con integración de diversas tecnologías para garantizar funcionalidad y rendimiento."
            : "Corporate website development and maintenance for ATLAS ANALYTICS. Creating a modern, responsive website with integration of various technologies to ensure functionality and performance.",
          features: []
        }
      case "partner-sites":
        return {
          description: language === 'ru'
            ? "Создание современных адаптивных веб-сайтов для партнеров компании. Полная разработка от дизайна до развертывания с использованием современных технологий."
            : language === 'es'
            ? "Creación de sitios web modernos y responsivos para socios comerciales. Desarrollo completo desde el diseño hasta el despliegue utilizando tecnologías modernas."
            : "Modern responsive website development for business partners. Complete development from design to deployment using cutting-edge technologies.",
          features: []
        }
      case "ui-implementation":
        return {
          description: language === 'ru'
            ? "Воплощение дизайнов из Figma с пиксельной точностью. Создание чистых, последовательных и удобных интерфейсов с адаптивным дизайном. Фронтенд часть учебного проекта."
            : language === 'es'
            ? "Implementación de diseños de Figma con precisión pixel-perfect. Creación de interfaces limpias, consistentes y amigables con diseño responsivo. Parte frontend de un proyecto educativo."
            : "Pixel-perfect Figma design implementation. Creating clean, consistent, and user-friendly interfaces with responsive design principles. Frontend part of an educational project.",
          features: []
        }
      default:
        return {
          description: "Project description",
          features: [
            { number: "0", label: "FEATURES" },
            { number: "0%", label: "COMPLETE" },
            { number: "0", label: "TECHNOLOGIES" }
          ]
        }
    }
  }

  const content = getContent(activeProject)


  const getTitle = () => {
    return language === 'ru' ? 'Мои Проекты' : 
           language === 'es' ? 'Mis Proyectos' : 
           'My Projects'
  }

  const getSubtitle = () => {
    return language === 'ru' ? 'Разработка современных решений с использованием передовых технологий' :
           language === 'es' ? 'Desarrollo de soluciones modernas utilizando tecnologías avanzadas' :
           'Building modern solutions using cutting-edge technologies'
  }

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Dots pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

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
                {getTitle()}
              </h2>
            </AnimatedElement>
            <AnimatedElement
              direction="up"
              distance={40}
              delay={0.4}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-6xl mx-auto mb-8 font-thin-heading">
                {getSubtitle()}
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
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base ${
                  activeProject === project.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => setActiveProject(project.id)}
              >
                {project.name}
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
                {activeProjectData.name}
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
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-medium-thin"
                  >
                    {language === 'ru' ? 'Посмотреть сайт' : 
                     language === 'es' ? 'Ver sitio web' : 
                     'View Website'}
                  </a>
                ) : activeProject === "partner-sites" ? (
                  <a
                    href="https://www.joinsignals.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-medium-thin"
                  >
                    {language === 'ru' ? 'Посмотреть сайт' : 
                     language === 'es' ? 'Ver sitio web' : 
                     'View Website'}
                  </a>
                ) : activeProject === "ui-implementation" ? (
                  <>
                    <a
                      href="https://github.com/nasoviva/Christmas-shop"
                      target="_blank"
                      rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-medium-thin"
                    >
                      {language === 'ru' ? 'Открыть код' : 
                       language === 'es' ? 'Ver código' : 
                       'View Code'}
                    </a>
                    <a
                      href="https://nasoviva.github.io/Christmas-shop/christmas-shop/pages/home/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-medium-thin"
                    >
                      {language === 'ru' ? 'Посмотреть сайт' : 
                       language === 'es' ? 'Ver sitio web' : 
                       'View Website'}
                    </a>
                  </>
                ) : (
                  <a
                    href="#"
                            className="project-button inline-block h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 min-w-32 text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-200 whitespace-nowrap flex items-center justify-center font-medium-thin"
                  >
                    {language === 'ru' ? 'Подробнее' : 
                     language === 'es' ? 'Más Detalles' : 
                     'Learn More'}
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
                      alt="ATLAS ANALYTICS Website Preview"
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
                      alt="Signals.io Preview"
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
                      alt="Christmas Shop Preview"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </a>
                ) : (
                  <div className="w-full h-64 bg-secondary rounded-lg shadow-2xl flex items-center justify-center">
                    <span className="text-muted-foreground text-lg">
                      {activeProjectData.name} Preview
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
