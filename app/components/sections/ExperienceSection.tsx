"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Check } from "lucide-react"
import AnimatedElement from "@/app/components/ui/animated-element"

interface ExperienceSectionProps {
  isActive: boolean
}

export default function ExperienceSection({ isActive }: ExperienceSectionProps) {
  const { t } = useLanguage()

  return (
    <section id="experience" className="relative w-full flex flex-col justify-center items-center text-center p-8 md:p-16 lg:p-24">
      <AnimatedElement
        direction="up"
        distance={60}
        delay={0.2}
      >
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-thin-heading leading-[1.1] tracking-tight">
          {t("experience.title")}
        </h2>
      </AnimatedElement>

      <AnimatedElement
        className="text-lg md:text-xl lg:text-2xl max-w-4xl mt-6 text-foreground mx-auto font-thin-heading"
        direction="up"
        distance={40}
        delay={0.4}
        stagger={true}
        staggerChildren={0.1}
      >
        <ul className="space-y-6">
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" style={{ strokeWidth: 3 }} />
            <span className="text-left">{t("experience.item1")}</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" style={{ strokeWidth: 3 }} />
            <span className="text-left">{t("experience.item2")}</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" style={{ strokeWidth: 3 }} />
            <span className="text-left">{t("experience.item3")}</span>
          </li>
        </ul>
      </AnimatedElement>
    </section>
  )
}
