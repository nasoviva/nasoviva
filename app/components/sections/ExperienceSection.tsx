"use client"

import { useLanguage } from "@/app/contexts/LanguageContext"
import AnimatedElement from "@/app/components/ui/animated-element"
import {
  LANDING_EXPERIENCE_BODY_CLASS,
  LANDING_EXPERIENCE_JOB_TITLE_CLASS,
  LANDING_SECTION_TITLE_CLASS,
} from "@/app/lib/landing-typography"

function renderStructuredDescription(description: string) {
  const blocks = description.split(/\n\n+/).filter((b) => b.trim().length > 0)
  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean)
    const isBulletList = lines.length > 0 && lines.every((l) => l.startsWith("•"))
    if (isBulletList) {
      return (
        <ul
          key={blockIndex}
          className={`mt-3 list-none space-y-2.5 pl-0 first:mt-0 ${LANDING_EXPERIENCE_BODY_CLASS}`}
        >
          {lines.map((line, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="shrink-0 opacity-70" aria-hidden>
                •
              </span>
              <span>{line.replace(/^•\s*/, "")}</span>
            </li>
          ))}
        </ul>
      )
    }
    return (
      <p
        key={blockIndex}
        className={`mt-3 first:mt-0 ${LANDING_EXPERIENCE_BODY_CLASS}`}
      >
        {lines.join(" ")}
      </p>
    )
  })
}

export default function ExperienceSection() {
  const { t } = useLanguage()
  const experienceItems = [t("experience.item1"), t("experience.item2")].filter(
    (item) => item.trim().length > 0
  )
  const parsedExperienceItems = experienceItems.map((item) => {
    const [title, ...descriptionLines] = item.split("\n")
    const description = descriptionLines.join("\n").trim()
    return {
      title,
      description,
    }
  })

  return (
    <section id="experience" className="relative w-full bg-background text-foreground">
      <div className="w-full text-foreground">
        <div className="mt-6 mb-6 px-8 text-center sm:px-10 md:mb-8 md:mt-8 md:px-[60px]">
          <AnimatedElement direction="up" distance={32} delay={0.05} playImmediately>
            <h2 className={LANDING_SECTION_TITLE_CLASS}>
              {t("experience.title")}
            </h2>
          </AnimatedElement>
        </div>

        <div className="experience-content w-full space-y-12 border-4 border-black bg-white px-8 pb-16 pt-10 text-left text-black transition-colors duration-200 hover:bg-black hover:text-white md:space-y-16 md:px-[60px] md:pb-24 md:pt-12 lg:space-y-20 lg:pb-28 dark:border-white dark:bg-black dark:text-white dark:hover:border-black dark:hover:bg-white dark:hover:text-black">
          {parsedExperienceItems.map((item, index) => (
            <AnimatedElement
              key={index}
              direction="up"
              distance={28}
              delay={0.15 + index * 0.08}
              playImmediately
            >
              <article className="w-full">
                <h3 className={LANDING_EXPERIENCE_JOB_TITLE_CLASS}>
                  {item.title}
                </h3>
                {item.description && (
                  <div>{renderStructuredDescription(item.description)}</div>
                )}
              </article>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
