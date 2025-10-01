"use client"

import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Download } from "lucide-react"

interface HeroSectionProps {
  isActive: boolean
}

export default function HeroSection({ isActive }: HeroSectionProps) {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Badge className="dark:border-primary dark:text-primary dark:bg-transparent dark:hover:bg-primary/10 bg-primary text-primary-foreground border-primary hover:bg-primary/90 text-base md:text-lg lg:text-xl px-5 py-2 transition-colors">
          {t("hero.badge")}
        </Badge>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t("hero.title")}
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl lg:text-2xl max-w-6xl mt-6 text-foreground pr-16 md:pr-24"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("hero.subtitle")}
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          className="flex justify-start"
          style={{ transformOrigin: "left center" }}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-auto min-w-48 px-6 dark:border-primary dark:text-primary dark:bg-transparent dark:hover:bg-primary/10 bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground text-sm md:text-base lg:text-lg"
          >
            <a
              href="/CV_Nasonova.pdf"
              download="CV_Nasonova.pdf"
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <Download className="h-5 w-5 flex-shrink-0" />
              {t("hero.download")}
            </a>
          </Button>
        </motion.div>
      </motion.div>

    </section>
  )
}
