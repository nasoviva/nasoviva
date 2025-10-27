"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Github, Linkedin, Send, Mail } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="footer" className="relative w-full bg-white dark:bg-black backdrop-blur-md border-t border-gray-200 dark:border-transparent">
      <div className="max-w-1200px mx-auto px-8 py-16 text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
                  <Badge className="bg-secondary text-secondary-foreground text-xs md:text-sm px-5 py-2 font-normal">
            {t("hero.location")}
          </Badge>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-thin-heading leading-[1.1] tracking-tight mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("contact.title")}
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground font-thin-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("contact.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            variant="secondary"
            size="lg"
                    className="footer-link w-auto px-6 !bg-secondary !text-secondary-foreground hover:!bg-secondary hover:!text-secondary-foreground hover:scale-105 transition-transform duration-200 text-sm md:text-base font-normal"
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
          
          <Button
            asChild
            variant="secondary"
            size="lg"
                    className="footer-link w-auto px-6 !bg-secondary !text-secondary-foreground hover:!bg-secondary hover:!text-secondary-foreground hover:scale-105 transition-transform duration-200 text-sm md:text-base font-normal"
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
          
          <Button
            asChild
            variant="secondary"
            size="lg"
                    className="footer-link w-auto px-6 !bg-secondary !text-secondary-foreground hover:!bg-secondary hover:!text-secondary-foreground hover:scale-105 transition-transform duration-200 text-sm md:text-base font-normal"
          >
            <a
              href="https://t.me/hverda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Send className="h-5 w-5" />
              Telegram
            </a>
          </Button>
          
          <Button
            asChild
            variant="secondary"
            size="lg"
                    className="footer-link w-auto px-6 !bg-secondary !text-secondary-foreground hover:!bg-secondary hover:!text-secondary-foreground hover:scale-105 transition-transform duration-200 text-sm md:text-base font-normal"
          >
            <a
              href="mailto:nasoviva@gmail.com"
              className="flex items-center gap-3"
            >
              <Mail className="h-5 w-5" />
              Email
            </a>
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}
