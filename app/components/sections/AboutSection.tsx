"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import AnimatedElement from "@/app/components/ui/animated-element"

interface AboutSectionProps {
  isActive: boolean
}

export default function AboutSection({ isActive }: AboutSectionProps) {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative w-full flex flex-col justify-center items-center text-center p-8 md:p-16 lg:p-24">
      <AnimatedElement
        direction="up"
        distance={60}
        delay={0.2}
      >
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-thin-heading leading-[1.1] tracking-tight">
          {t("about.title")}
        </h2>
      </AnimatedElement>

      <AnimatedElement
        className="max-w-6xl mt-8 mx-auto"
        direction="up"
        distance={40}
        delay={0.4}
        stagger={true}
        staggerChildren={0.1}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Internal Applications Card */}
          <motion.div
            className="bg-secondary text-secondary-foreground rounded-xl p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3,
              scale: { duration: 0.2, ease: "easeInOut" }
            }}
          >
            <h3 className="text-lg font-medium-thin mb-4 text-secondary-foreground">{t("about.card1.title")}</h3>
            <p className="text-sm leading-relaxed text-secondary-foreground font-thin-heading">
              {t("about.item1")}
            </p>
          </motion.div>

          {/* Partner Websites Card */}
          <motion.div
            className="bg-secondary text-secondary-foreground rounded-xl p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              scale: { duration: 0.2, ease: "easeInOut" }
            }}
          >
            <h3 className="text-lg font-medium-thin mb-4 text-secondary-foreground">{t("about.card2.title")}</h3>
            <p className="text-sm leading-relaxed text-secondary-foreground font-thin-heading">
              {t("about.item2")}
            </p>
          </motion.div>

          {/* API Integration Card */}
          <motion.div
            className="bg-secondary text-secondary-foreground rounded-xl p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.5,
              scale: { duration: 0.2, ease: "easeInOut" }
            }}
          >
            <h3 className="text-lg font-medium-thin mb-4 text-secondary-foreground">{t("about.card3.title")}</h3>
            <p className="text-sm leading-relaxed text-secondary-foreground font-thin-heading">
              {t("about.item3")}
            </p>
          </motion.div>

          {/* Workflow Automation Card */}
          <motion.div
            className="bg-secondary text-secondary-foreground rounded-xl p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.6,
              scale: { duration: 0.2, ease: "easeInOut" }
            }}
          >
            <h3 className="text-lg font-medium-thin mb-4 text-secondary-foreground">{t("about.card4.title")}</h3>
            <p className="text-sm leading-relaxed text-secondary-foreground font-thin-heading">
              {t("about.item4")}
            </p>
          </motion.div>
        </div>
      </AnimatedElement>
    </section>
  )
}
