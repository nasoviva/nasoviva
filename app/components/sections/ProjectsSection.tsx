"use client"

import { useLanguage } from "@/app/contexts/LanguageContext"
import AnimatedElement from "@/app/components/ui/animated-element"
import {
  LANDING_PROJECT_CARD_BODY_CLASS,
  LANDING_PROJECT_CARD_TITLE_CLASS,
  LANDING_PROJECT_CTA_CLASS,
  LANDING_SECTION_TITLE_CLASS,
} from "@/app/lib/landing-typography"

const projectCards = [
  { id: "atlas", image: "/atlas.png" },
  { id: "to-done", image: "/toDone.png" },
  { id: "partner-sites", image: "/signals.png" },
  { id: "ui-implementation", image: "/cristmas_shop.png" },
  { id: "movie-picker", image: "/movie-picker.png" },
  { id: "random-game", image: "/flappy.png" },
] as const

function getProjectHref(id: string): string {
  switch (id) {
    case "atlas":
      return "https://atlasanalytics.co/"
    case "partner-sites":
      return "https://www.joinsignals.io/"
    case "ui-implementation":
      return "https://nasoviva.github.io/Christmas-shop/christmas-shop/pages/home/index.html"
    case "movie-picker":
      return "https://nasoviva.github.io/movie-picker/movie-picker/pages/"
    case "to-done":
      return "https://to-done-nasoviva.vercel.app/"
    case "random-game":
      return "https://nasoviva.github.io/random-game/random-game/pages/index.html"
    default:
      return "#"
  }
}

function previewAltKey(id: string): `projects.${(typeof projectCards)[number]["id"]}.previewAlt` {
  return `projects.${id}.previewAlt` as `projects.${(typeof projectCards)[number]["id"]}.previewAlt`
}

function cellBorders(index: number, total: number): string {
  const isLeftCol = index % 2 === 0
  const isLast = index === total - 1
  const spanFull = isLast && total % 2 === 1
  const lastRowStart = total - (total % 2 === 0 ? 2 : 1)

  let cls = "border-foreground "
  if (index < total - 1) cls += "border-b-4 "
  if (index >= lastRowStart) cls += "sm:border-b-0 "

  if (isLeftCol && !spanFull) cls += "sm:border-r-4 "
  if (spanFull) cls += "sm:col-span-2 "
  return cls
}

export default function ProjectsSection() {
  const { t } = useLanguage()
  const total = projectCards.length

  return (
    <section id="projects" className="projects-section relative bg-background">
      <div className="w-full text-foreground">
        <div className="mt-6 mb-6 px-8 text-center sm:px-10 md:mb-8 md:mt-8 md:px-[60px]">
          <AnimatedElement direction="up" distance={32} delay={0.05}>
            <h2 className={LANDING_SECTION_TITLE_CLASS}>
              {t("projects.title")}
            </h2>
          </AnimatedElement>
        </div>

        <AnimatedElement direction="up" distance={28} delay={0.12}>
          <div className="border-4 border-foreground bg-background">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {projectCards.map((project, index) => {
                const href = getProjectHref(project.id)
                return (
                  <a
                    key={project.id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/card flex min-h-0 flex-col bg-background text-foreground no-underline transition-colors duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${cellBorders(index, total)}`}
                  >
                    <div className="p-4 sm:p-5">
                      <div className="relative aspect-video w-full overflow-hidden rounded-none border-4 border-foreground bg-background">
                        <img
                          src={project.image}
                          alt={t(previewAltKey(project.id))}
                          decoding="async"
                          className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover/card:scale-[1.02]"
                        />
                      </div>
                    </div>

                    <h3
                      className={`px-3 pt-2 text-left sm:px-4 sm:pt-3 ${LANDING_PROJECT_CARD_TITLE_CLASS}`}
                    >
                      {t(`projects.${project.id}.name`)}
                    </h3>

                    <p
                      className={`px-3 pb-1 pt-2 text-left sm:px-4 ${LANDING_PROJECT_CARD_BODY_CLASS}`}
                    >
                      {t(`projects.${project.id}.description`)}
                    </p>

                    <span
                      className={`mb-3 mt-1 px-3 py-2 text-left sm:mb-4 sm:px-4 ${LANDING_PROJECT_CTA_CLASS}`}
                    >
                      {t("projects.explore")}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}
