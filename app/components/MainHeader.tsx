"use client"

import { useTheme } from "../contexts/ThemeContext"
import { useLanguage } from "../contexts/LanguageContext"
import { Moon, Sun, MessageCircle } from "lucide-react"
import { Button } from "./ui/button"

export default function MainHeader() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { key: "about", href: "#about" },
    { key: "projects", href: "#projects" },
    { key: "skills", href: "#skills" },
    { key: "experience", href: "#experience" }
  ]

  return (
    <header className="sticky top-0 z-50 bg-muted/30 backdrop-blur-sm border-b border-border">
      <div className="max-w-1200px mx-auto px-8 py-4">
        <div className="flex items-center relative">
          {/* Navigation Menu - Centered */}
          <nav className="hidden xl:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm md:text-base lg:text-lg font-medium-thin text-foreground hover:text-foreground transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Controls - Always on the right */}
          <div className="ml-auto flex items-center gap-4">
            {/* Contact Button */}
            <Button
              asChild
              variant="default"
              className="contact-button h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 min-w-32 font-medium-thin"
            >
              <a
                href="#footer"
                className="flex items-center gap-3 h-full whitespace-nowrap"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-lg">
                  {language === 'en' ? 'Contact' : 
                   language === 'es' ? 'Contacto' : 
                   'Контакты'}
                </span>
              </a>
            </Button>

            {/* Language Selector */}
            <div className="flex gap-1 bg-primary/10 dark:bg-transparent rounded-lg border border-primary/20 dark:border-primary h-10 items-center">
              {(["en", "es", "ru"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 md:px-3 h-10 rounded text-xs md:text-sm font-medium transition-colors flex items-center justify-center ${
                    language === lang
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleTheme} 
              className="theme-toggle"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
