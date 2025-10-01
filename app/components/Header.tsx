"use client"

import { useTheme } from "../contexts/ThemeContext"
import { useLanguage } from "../contexts/LanguageContext"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4 md:p-6">
      <div className="flex justify-end items-center">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Selector */}
          <div className="flex gap-1 bg-primary/10 dark:bg-transparent rounded-lg border border-primary/20 dark:border-primary h-10 items-center">
            {(["en", "es", "ru"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 md:px-3 h-10 rounded text-xs md:text-sm font-medium transition-colors flex items-center justify-center ${
                  language === lang
                    ? "bg-primary text-white hover:bg-primary/90 hover:text-white"
                    : "text-muted-foreground hover:text-foreground dark:text-primary dark:hover:bg-primary/10"
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
    </header>
  )
}
