"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import TechLogosCarousel from "../ui/tech-logos-carousel"
import { 
  FileText, 
  Code, 
  Globe, 
  Atom, 
  Palette, 
  Wind, 
  Layers, 
  Zap, 
  GitBranch, 
  Shield, 
  Sparkles, 
  TestTube,
  TestTube2
} from "lucide-react"

interface SkillsSectionProps {
  isActive: boolean
}

export default function SkillsSection({ isActive }: SkillsSectionProps) {
  const { t } = useLanguage()

  // Tech logos with CSS classes and icons
  const techLogos = [
    { id: "javascript", name: "JavaScript", logo: "", icon: Code },
    { id: "typescript", name: "TypeScript", logo: "", icon: FileText },
    { id: "html", name: "HTML", logo: "", icon: Globe },
    { id: "react", name: "React", logo: "", icon: Atom },
    { id: "css3", name: "CSS3", logo: "", icon: Palette },
    { id: "tailwindcss", name: "TailwindCSS", logo: "", icon: Wind },
    { id: "daisyui", name: "DaisyUI", logo: "", icon: Layers },
    { id: "vite", name: "Vite", logo: "", icon: Zap },
    { id: "git", name: "Git", logo: "", icon: GitBranch },
    { id: "figma", name: "Figma", logo: "", icon: Palette },
    { id: "eslint", name: "ESLint", logo: "", icon: Shield },
    { id: "prettier", name: "Prettier", logo: "", icon: Sparkles },
    { id: "husky", name: "Husky", logo: "", icon: GitBranch },
    { id: "vitest", name: "Vitest", logo: "", icon: TestTube },
    { id: "react-testing-library", name: "React Testing Library", logo: "", icon: TestTube2 },
  ]

  // Placeholder certificates - you can replace these with actual certificate images later
  const certificates = [
    {
      id: "rs-school-js",
      name: "JavaScript/Frontend",
      issuer: "RS School",
      date: "2024",
      image: "/certificates/rs-school-js.jpg",
      url: "https://app.rs.school/certificate/your-certificate-id"
    },
    {
      id: "rs-school-react",
      name: "React Development",
      issuer: "RS School", 
      date: "2024",
      image: "/certificates/rs-school-react.jpg",
      url: "https://app.rs.school/certificate/your-certificate-id"
    },
    {
      id: "atlas-analytics",
      name: "Frontend Developer",
      issuer: "ATLAS ANALYTICS",
      date: "2024",
      image: "/certificates/atlas-analytics.jpg"
    },
    {
      id: "javascript-basics",
      name: "JavaScript Basics",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: "/certificates/freecodecamp-js.jpg",
      url: "https://freecodecamp.org/certification/your-username/javascript-algorithms-and-data-structures"
    },
    {
      id: "html-css",
      name: "HTML & CSS",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: "/certificates/freecodecamp-html-css.jpg",
      url: "https://freecodecamp.org/certification/your-username/responsive-web-design"
    },
    {
      id: "typescript",
      name: "TypeScript Fundamentals",
      issuer: "Microsoft Learn",
      date: "2024",
      image: "/certificates/microsoft-typescript.jpg",
      url: "https://learn.microsoft.com/certifications/typescript"
    },
    {
      id: "git-github",
      name: "Git & GitHub",
      issuer: "GitHub",
      date: "2024",
      image: "/certificates/github-git.jpg",
      url: "https://github.com/skills"
    },
    {
      id: "figma-design",
      name: "UI/UX Design",
      issuer: "Figma",
      date: "2024",
      image: "/certificates/figma-design.jpg",
      url: "https://www.figma.com/education/"
    },
    {
      id: "nodejs-backend",
      name: "Node.js Backend",
      issuer: "Node.js Foundation",
      date: "2024",
      image: "/certificates/nodejs-backend.jpg"
    },
    {
      id: "mongodb",
      name: "MongoDB Developer",
      issuer: "MongoDB University",
      date: "2024",
      image: "/certificates/mongodb.jpg",
      url: "https://university.mongodb.com/"
    }
  ]


  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t("skills.title")}
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl lg:text-2xl max-w-6xl mt-6 text-foreground pr-16 md:pr-24"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("skills.description")}
      </motion.p>

      {/* Tech logos carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <TechLogosCarousel logos={techLogos} />
      </motion.div>

    </section>
  )
}
