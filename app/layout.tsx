import type React from "react"
import "./globals.css"
import { Roboto } from "next/font/google"
import { LANDING_PRELOAD_IMAGE_PATHS } from "./lib/landing-preload-images"
import { Providers } from "./providers"

const roboto = Roboto({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
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
      className={roboto.variable}
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
