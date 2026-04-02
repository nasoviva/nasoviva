import type React from "react"
import "./globals.css"
import { Archivo_Black, Oswald, Roboto_Mono, Space_Mono } from "next/font/google"
import { LANDING_PRELOAD_IMAGE_PATHS } from "./lib/landing-preload-images"
import { Providers } from "./providers"

const spaceMono = Space_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-body-mono",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "700"],
  variable: "--font-mono-cyrillic",
  display: "swap",
})

const archivoBlack = Archivo_Black({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-heading-brutal",
})

const oswald = Oswald({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-cyrillic",
  display: "swap",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceMono.variable} ${robotoMono.variable} ${archivoBlack.variable} ${oswald.variable}`}
    >
      <head>
        {LANDING_PRELOAD_IMAGE_PATHS.map((href, index) => (
          <link
            key={href}
            rel="preload"
            href={href}
            as="image"
            {...(index === 0 ? { fetchPriority: "high" as const } : {})}
          />
        ))}
      </head>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
