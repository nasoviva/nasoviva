"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "./contexts/LanguageContext"

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    console.log("[Analytics] Vercel Analytics provider initialized")
    console.log("[Analytics] Environment:", process.env.NODE_ENV)
    console.log("[Analytics] Analytics component mounted and ready to track")
  }, [])
  
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      themes={["light", "dark"]}
      enableSystem={false}
      storageKey="theme"
    >
      <LanguageProvider>
        {children}
        <Analytics />
      </LanguageProvider>
    </ThemeProvider>
  )
}
