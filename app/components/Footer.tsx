"use client"

import { useLanguage } from "../contexts/LanguageContext"
import {
  LANDING_FOOTER_DARK_LINK_BASE_CLASS,
  LANDING_LEAD_PARAGRAPH_CLASS,
  LANDING_SECTION_TITLE_CLASS,
} from "@/app/lib/landing-typography"

const FOOTER_LINK_FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:focus-visible:outline-white"

const FOOTER_LINK_APPEARANCE = `${LANDING_FOOTER_DARK_LINK_BASE_CLASS} text-foreground hover:text-[#F4C430] dark:text-white dark:hover:text-[#F4C430] ${FOOTER_LINK_FOCUS}`

const FOOTER_CONTACT_LINKS = [
  { href: "https://linkedin.com/in/nasoviva", label: "LinkedIn" },
  { href: "https://github.com/nasoviva", label: "GitHub" },
  { href: "https://t.me/hverda", label: "Telegram" },
  { href: "mailto:nasoviva@gmail.com", label: "Email" },
] as const

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

        <nav
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-10 md:gap-x-12"
          aria-label={t("contact.title")}
        >
          {FOOTER_CONTACT_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className={FOOTER_LINK_APPEARANCE}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
