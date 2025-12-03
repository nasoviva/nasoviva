"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "./contexts/ThemeContext"
import { LanguageProvider } from "./contexts/LanguageContext"

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    console.log("[Analytics] Vercel Analytics provider initialized")
    console.log("[Analytics] Environment:", process.env.NODE_ENV)
    console.log("[Analytics] Analytics component mounted and ready to track")
  }, [])
  
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
        <Analytics />
      </LanguageProvider>
    </ThemeProvider>
  )
}
