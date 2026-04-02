"use client"

import { useLanguage } from "@/app/contexts/LanguageContext"
import { Github, Linkedin, Send, Mail, type LucideIcon } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import {
  LANDING_BUTTON_LABEL_CLASS,
  LANDING_FOOTER_DARK_LINK_BASE_CLASS,
  LANDING_LEAD_PARAGRAPH_CLASS,
  LANDING_SECTION_TITLE_CLASS,
} from "@/app/lib/landing-typography"

const FOOTER_BTN_PRIMARY =
  "footer-brutal-btn bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"

const FOOTER_BTN_LINKEDIN =
  "footer-brutal-btn bg-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground"

const FOOTER_DARK_LINK_FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"

const FOOTER_CONTACT_LINKS: {
  href: string
  label: string
  Icon: LucideIcon
  btnClassName: string
  darkTextClassName: string
}[] = [
  {
    href: "https://linkedin.com/in/nasoviva",
    label: "LinkedIn",
    Icon: Linkedin,
    btnClassName: FOOTER_BTN_LINKEDIN,
    darkTextClassName: `text-[#5ee9ff] hover:opacity-80 ${FOOTER_DARK_LINK_FOCUS} focus-visible:outline-[#5ee9ff]`,
  },
  {
    href: "https://github.com/nasoviva",
    label: "GitHub",
    Icon: Github,
    btnClassName:
      "footer-brutal-btn bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground",
    darkTextClassName: `text-[#f5ee38] hover:opacity-80 ${FOOTER_DARK_LINK_FOCUS} focus-visible:outline-[#f5ee38]`,
  },
  {
    href: "https://t.me/hverda",
    label: "Telegram",
    Icon: Send,
    btnClassName: FOOTER_BTN_PRIMARY,
    darkTextClassName: `text-[#ff4d3a] hover:opacity-80 ${FOOTER_DARK_LINK_FOCUS} focus-visible:outline-[#ff4d3a]`,
  },
  {
    href: "mailto:nasoviva@gmail.com",
    label: "Email",
    Icon: Mail,
    btnClassName:
      "footer-brutal-btn bg-[#b4ff39] text-[#0a0a0a] hover:bg-[#b4ff39] hover:text-[#0a0a0a]",
    darkTextClassName: `text-[#b4ff39] hover:opacity-80 ${FOOTER_DARK_LINK_FOCUS} focus-visible:outline-[#b4ff39]`,
  },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      id="footer"
      className="relative z-10 w-full bg-background text-foreground"
    >
      <div className="mx-auto w-full max-w-[min(100%,var(--site-content-max))] px-6 py-12 text-center transition-none sm:px-8 sm:py-16 lg:py-16">
        <h2
          className={`mx-auto mb-6 max-w-[min(100%,22rem)] opacity-100 transition-none sm:max-w-none ${LANDING_SECTION_TITLE_CLASS}`}
        >
          {t("contact.title")}
        </h2>

        <p
          className={`mx-auto mb-8 max-w-[min(100%,20rem)] opacity-100 transition-none sm:max-w-xl md:max-w-2xl ${LANDING_LEAD_PARAGRAPH_CLASS}`}
        >
          {t("contact.description")}
        </p>

        <div className="flex flex-wrap justify-center gap-4 dark:hidden">
          {FOOTER_CONTACT_LINKS.map(({ href, label, Icon, btnClassName }) => (
            <Button
              key={href}
              asChild
              variant="contact"
              className={`h-auto min-h-0 w-auto rounded-none px-[30px] py-[15px] ${LANDING_BUTTON_LABEL_CLASS} ${btnClassName}`}
            >
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-3"
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                {label}
              </a>
            </Button>
          ))}
        </div>

        <nav
          className="hidden flex-wrap justify-center gap-x-8 gap-y-4 dark:flex sm:gap-x-10 md:gap-x-12"
          aria-label={t("contact.title")}
        >
          {FOOTER_CONTACT_LINKS.map(({ href, label, darkTextClassName }) => (
            <a
              key={`dark-${href}`}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className={`${LANDING_FOOTER_DARK_LINK_BASE_CLASS} ${darkTextClassName}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
