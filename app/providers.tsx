"use client"

import type { ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "./contexts/LanguageContext"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
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
