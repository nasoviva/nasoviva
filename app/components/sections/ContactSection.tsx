"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Github, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"

interface ContactSectionProps {
  isActive: boolean
}


export default function ContactSection({ isActive }: ContactSectionProps) {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Badge className="dark:border-primary dark:text-primary dark:bg-transparent dark:hover:bg-primary/10 bg-primary text-primary-foreground border-primary hover:bg-primary/90 text-base md:text-lg lg:text-xl px-5 py-2 transition-colors">
          {t("hero.location")}
        </Badge>
      </motion.div>

      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t("contact.title")}
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl lg:text-2xl max-w-6xl mt-6 text-foreground pr-16 md:pr-24"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("contact.description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 flex justify-start"
      >
        <div className="flex flex-col gap-6">
          <motion.div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-48 dark:border-primary dark:text-primary dark:bg-transparent dark:hover:bg-primary/10 bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground text-sm md:text-base lg:text-lg"
            >
              <a
                href="https://linkedin.com/in/nasoviva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
          
          <motion.div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-48 dark:border-primary dark:text-primary dark:bg-transparent dark:hover:bg-primary/10 bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground text-sm md:text-base lg:text-lg"
            >
              <a
                href="https://github.com/nasoviva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </motion.div>
          
          <motion.div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-48 dark:border-primary dark:text-primary dark:bg-transparent dark:hover:bg-primary/10 bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground text-sm md:text-base lg:text-lg"
            >
              <a
                href="https://t.me/hverda_ar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="h-5 w-5" />
                Telegram
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
