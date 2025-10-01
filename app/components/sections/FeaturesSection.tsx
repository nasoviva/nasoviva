"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"

interface FeaturesSectionProps {
  isActive: boolean
}

export default function FeaturesSection({ isActive }: FeaturesSectionProps) {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t("features.title")}
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-muted-foreground"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("features.description")}
      </motion.p>
    </section>
  )
}
