"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Check } from "lucide-react"

interface AboutSectionProps {
  isActive: boolean
}

export default function AboutSection({ isActive }: AboutSectionProps) {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t("about.title")}
      </motion.h2>

      <motion.div
        className="text-lg md:text-xl lg:text-2xl max-w-6xl mt-6 text-foreground pr-16 md:pr-24"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" style={{ strokeWidth: 3 }} />
            <span>{t("about.item1")}</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" style={{ strokeWidth: 3 }} />
            <span>{t("about.item2")}</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" style={{ strokeWidth: 3 }} />
            <span>{t("about.item3")}</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" style={{ strokeWidth: 3 }} />
            <span>{t("about.item4")}</span>
          </li>
        </ul>
      </motion.div>
    </section>
  )
}
