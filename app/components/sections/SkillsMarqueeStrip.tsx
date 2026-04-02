"use client"

import { Fragment } from "react"
import { LANDING_MARQUEE_ITEM_CLASS, LANDING_MARQUEE_SEP_CLASS } from "@/app/lib/landing-typography"

export default function SkillsMarqueeStrip() {
  const techLogos = [
    { id: "javascript", name: "JavaScript" },
    { id: "typescript", name: "TypeScript" },
    { id: "html", name: "HTML" },
    { id: "react", name: "React" },
    { id: "css3", name: "CSS3" },
    { id: "tailwindcss", name: "TailwindCSS" },
    { id: "daisyui", name: "DaisyUI" },
    { id: "vite", name: "Vite" },
    { id: "git", name: "Git" },
    { id: "figma", name: "Figma" },
    { id: "eslint", name: "ESLint" },
    { id: "prettier", name: "Prettier" },
    { id: "husky", name: "Husky" },
    { id: "vitest", name: "Vitest" },
    { id: "react-testing-library", name: "React Testing Library" },
  ] as const

  const itemClass = LANDING_MARQUEE_ITEM_CLASS
  const sepClass = LANDING_MARQUEE_SEP_CLASS

  const MarqueeSegment = ({ copy }: { copy: "a" | "b" }) => (
    <span className="inline-flex w-max flex-nowrap items-center whitespace-nowrap text-white">
      {techLogos.map((item, i) => (
        <Fragment key={`${item.id}-${copy}`}>
          {i > 0 && (
            <span className={sepClass} aria-hidden>
              //
            </span>
          )}
          <span className={itemClass}>{item.name.toUpperCase()}</span>
        </Fragment>
      ))}
      <span className={sepClass} aria-hidden>
        //
      </span>
    </span>
  )

  return (
    <div className="mx-auto w-full max-w-[min(100%,var(--site-content-max))]">
      <div className="skills-marquee-strip marquee overflow-hidden border-y-4 border-black bg-black px-6 py-3 text-white sm:px-8 md:px-10 md:py-4">
        <div className="marquee-content flex w-max animate-marquee-loop">
          <MarqueeSegment copy="a" />
          <MarqueeSegment copy="b" />
        </div>
      </div>
    </div>
  )
}
