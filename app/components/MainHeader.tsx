"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { useLanguage } from "../contexts/LanguageContext"
import { Menu, Moon, Sun, X } from "lucide-react"
import { LANDING_NAV_LINK_CLASS } from "@/app/lib/landing-typography"
import { Button } from "./ui/button"

export default function MainHeader() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")
    const next = isDark ? "light" : "dark"
    setTheme(next)
  }
  const { language, setLanguage, t } = useLanguage()

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const mq = window.matchMedia("(min-width: 768px)")
    const onViewportDesktop = () => {
      if (mq.matches) {
        setMobileMenuOpen(false)
      }
    }
    mq.addEventListener("change", onViewportDesktop)
    return () => mq.removeEventListener("change", onViewportDesktop)
  }, [mobileMenuOpen])

  const navItems = [
    { key: "projects", href: "#projects" },
    { key: "experience", href: "#experience" },
    { key: "contact", href: "#footer" },
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center bg-transparent max-[1439px]:px-[clamp(0.75rem,2.5vw,1.25rem)] sm:max-[1439px]:px-[clamp(1rem,3vw,1.5rem)]">
      {mobileMenuOpen && (
        <div
          role="presentation"
          aria-hidden
          className="fixed inset-0 z-40 cursor-default bg-transparent md:hidden"
          onClick={closeMobileMenu}
        />
      )}
      <div className="landing-header-bar relative z-50 w-full max-w-[min(100%,var(--site-content-max))] bg-background py-3 pl-4 pr-4 sm:py-4 sm:pl-8 sm:pr-6 md:pl-10 md:pr-8 lg:pl-[60px] lg:pr-[60px]">
        <div className="flex w-full min-w-0 flex-col items-stretch justify-center gap-3 md:flex-row md:flex-nowrap md:items-center md:justify-between md:gap-x-2 md:gap-y-0 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-3">
          <div className="hidden lg:block" aria-hidden="true" />
          <nav
            className="hidden min-w-0 flex-1 flex-nowrap items-center justify-start gap-x-2 gap-y-1 min-w-0 flex-wrap sm:gap-x-3 md:flex lg:max-w-none lg:flex-nowrap lg:justify-center lg:gap-x-4 xl:gap-x-6"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={LANDING_NAV_LINK_CLASS}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          <div className="flex w-full shrink-0 flex-nowrap items-center justify-between gap-2 md:ml-auto md:w-auto md:shrink-0 md:justify-end sm:gap-3 lg:ml-0 lg:justify-self-end lg:gap-4">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="rounded-none border-2 border-foreground bg-[#F4C430] text-black transition-opacity hover:bg-[#F4C430] hover:text-black hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground md:hidden max-[360px]:h-9 max-[360px]:w-9"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              )}
            </Button>

            <div className="ml-auto flex items-center gap-2 max-[360px]:gap-1.5 sm:gap-3">
              <div className="header-lang-toggle flex h-10 items-center gap-0 rounded-none bg-transparent max-[360px]:h-9">
                {(["en", "es", "ru"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`header-lang-toggle-btn flex h-full items-center justify-center rounded-none px-1.5 font-semibold tabular-nums tracking-wide transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground max-[360px]:px-1 sm:px-2 md:px-3 ${
                      language === lang
                        ? "bg-[#F4C430] text-black"
                        : "bg-transparent text-foreground hover:bg-[#F4C430] hover:text-black"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="theme-toggle rounded-none bg-transparent text-foreground transition-opacity hover:opacity-80 dark:hover:bg-[#F4C430] dark:hover:text-black dark:hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground max-[360px]:h-9 max-[360px]:w-9"
                aria-label={mounted && resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
              >
                {!mounted ? (
                  <Moon className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                ) : resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                ) : (
                  <Moon className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                )}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-nav"
            className="mt-3 flex flex-col gap-2 bg-background p-3 md:hidden"
            aria-label="Mobile"
          >
            {navItems.map((item) => (
              <a
                key={`mobile-${item.key}`}
                href={item.href}
                className={LANDING_NAV_LINK_CLASS}
                onClick={closeMobileMenu}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
