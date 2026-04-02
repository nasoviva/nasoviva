"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { useLanguage } from "../contexts/LanguageContext"
import { Moon, Sun } from "lucide-react"
import { LANDING_NAV_LINK_CLASS } from "@/app/lib/landing-typography"
import { Button } from "./ui/button"

export default function MainHeader() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")
    const next = isDark ? "light" : "dark"
    console.log("[MainHeader] theme toggle", { isDark, next })
    setTheme(next)
  }
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { key: "projects", href: "#projects" },
    { key: "experience", href: "#experience" },
    { key: "contact", href: "#footer" },
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center bg-transparent max-[1439px]:px-[clamp(0.75rem,2.5vw,1.25rem)] sm:max-[1439px]:px-[clamp(1rem,3vw,1.5rem)]">
      <div className="landing-header-bar w-full max-w-[min(100%,var(--site-content-max))] border-b-4 border-foreground bg-background py-3 pl-4 pr-4 sm:py-4 sm:pl-8 sm:pr-6 md:pl-10 md:pr-8 lg:pl-[60px] lg:pr-[60px]">
        <div className="flex w-full min-w-0 flex-col items-center justify-center gap-3 min-[424px]:flex-row min-[424px]:flex-nowrap min-[424px]:items-center min-[424px]:justify-between min-[424px]:gap-x-2 min-[424px]:gap-y-0 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-3">
          <div className="hidden lg:block" aria-hidden="true" />
          <nav className="flex min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 max-[423px]:w-full max-[423px]:flex-none max-[423px]:justify-center min-[424px]:min-w-0 min-[424px]:flex-1 min-[424px]:flex-nowrap min-[424px]:justify-start sm:gap-x-3 lg:max-w-none lg:flex-nowrap lg:justify-center lg:gap-x-4 xl:gap-x-6">
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

          <div className="flex w-full shrink-0 flex-nowrap items-center justify-center gap-2 max-[423px]:ml-0 max-[423px]:justify-center min-[424px]:ml-auto min-[424px]:w-auto min-[424px]:shrink-0 min-[424px]:justify-end sm:gap-3 lg:ml-0 lg:justify-self-end lg:gap-4">
            <div className="header-lang-toggle flex h-10 items-center gap-0 rounded-none border-2 border-foreground bg-transparent">
              {(["en", "es", "ru"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`header-lang-toggle-btn flex h-full items-center justify-center rounded-none px-1.5 font-semibold tabular-nums tracking-wide transition-colors sm:px-2 md:px-3 ${
                    language === lang
                      ? "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                      : "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
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
              className="theme-toggle rounded-none border-2 border-foreground bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
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
    </header>
  )
}
