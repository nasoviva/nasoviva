import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Victoria Nasonova - Frontend Developer",
  description: "Frontend Developer creating beautiful and functional user experiences. Specialized in React, Next.js, TypeScript, and modern web technologies.",
  keywords: "frontend developer, react, next.js, typescript, web development, ui/ux, portfolio",
  author: "Victoria Nasonova",
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
