"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Download } from "lucide-react"
import AnimatedElement from "@/app/components/ui/animated-element"

interface HeroSectionProps {
  isActive: boolean
}

export default function HeroSection({ isActive }: HeroSectionProps) {
  const { t, language } = useLanguage()
  
  // Choose CV file based on language
  const cvFile = language === 'ru' ? '/Резюме_Насонова.pdf' : '/CV_Nasonova.pdf'
  const cvFileName = language === 'ru' ? 'Резюме_Насонова.pdf' : 'CV_Nasonova.pdf'

  return (
    <section className="relative w-full flex flex-col justify-center items-center text-center p-8 md:p-16 lg:p-24">
      {/* Profile Photo */}
      <AnimatedElement
        className="mb-8"
        direction="up"
        distance={30}
        delay={0.2}
      >
        <motion.div
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <img
            src="/image.png"
            alt="Victoria Nasonova"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatedElement>

      <AnimatedElement
        className="mb-12"
        direction="up"
        distance={20}
        delay={0.4}
      >
                <Badge className="bg-secondary/80 text-secondary-foreground text-xs md:text-sm px-5 py-2 hover:bg-secondary/80 hover:text-secondary-foreground font-normal">
          {t("hero.badge")}
        </Badge>
      </AnimatedElement>

      <AnimatedElement
        direction="up"
        distance={60}
        delay={0.6}
      >
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-thin-heading leading-[1.1] tracking-tight">
          {t("hero.title")}
        </h1>
      </AnimatedElement>

      <AnimatedElement
        direction="up"
        distance={40}
        delay={0.8}
      >
        <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mt-6 text-foreground mx-auto text-center font-thin-heading">
          {t("hero.subtitle")}
        </p>
      </AnimatedElement>

      <AnimatedElement
        className="mt-8"
        direction="up"
        distance={30}
        delay={1.0}
      >
        <div className="flex justify-center">
          <Button
            asChild
            variant="default"
                    className="download-button h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground px-6 min-w-32 font-normal"
          >
            <a
              href={cvFile}
              download={cvFileName}
              className="flex items-center gap-3 h-full whitespace-nowrap"
            >
              <Download className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm md:text-base lg:text-lg">{t("hero.download")}</span>
            </a>
          </Button>
        </div>
      </AnimatedElement>

    </section>
  )
}
