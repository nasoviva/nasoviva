import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "Solo Builders Community",
  description: "Accelerator platform for solo builders working on side projects",
    generator: 'v0.app'
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Apply dark theme background when dark class is present
              function updateBackground() {
                const backgroundContainer = document.querySelector('.background-container');
                if (backgroundContainer) {
                  const isDark = document.documentElement.classList.contains('dark');
                  backgroundContainer.style.backgroundImage = isDark ? "url('/black.jpeg')" : "url('/light.jpeg')";
                  console.log('Background updated:', isDark ? 'dark' : 'light');
                }
              }
              
              // Wait for DOM to be ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', updateBackground);
              } else {
                updateBackground();
              }
              
              // Watch for theme changes
              const observer = new MutationObserver(updateBackground);
              observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class']
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
