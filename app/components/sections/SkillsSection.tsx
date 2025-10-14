"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import TechLogosCarousel from "../ui/tech-logos-carousel"
import AnimatedElement from "@/app/components/ui/animated-element"
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
  const { t, language } = useLanguage()

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
    <section id="skills" className="relative w-full flex flex-col justify-center items-center text-center p-8 md:p-16 lg:p-24">
      <AnimatedElement
        direction="up"
        distance={60}
        delay={0.2}
      >
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-thin-heading leading-[1.1] tracking-tight">
          {t("skills.title")}
        </h2>
      </AnimatedElement>

      <AnimatedElement
        direction="up"
        distance={40}
        delay={0.4}
      >
        <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mt-6 text-foreground mx-auto text-center font-thin-heading">
          {t("skills.description")}
        </p>
      </AnimatedElement>

      {/* Tech logos carousel */}
      <AnimatedElement
        direction="up"
        distance={50}
        delay={0.6}
        className="mt-8"
      >
        <TechLogosCarousel logos={techLogos} />
      </AnimatedElement>

      {/* Skills List */}
      <AnimatedElement
        direction="up"
        distance={40}
        delay={0.8}
        className="mt-12 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {/* Frontend Development */}
          <div className="bg-secondary/80 rounded-lg p-6">
            <h3 className="text-lg font-medium-thin mb-4 text-primary">
              {language === 'ru' ? 'Frontend Разработка' : 
               language === 'es' ? 'Desarrollo Frontend' : 
               'Frontend Development'}
            </h3>
            <ul className="space-y-2 text-sm font-thin-heading">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                React & Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                JavaScript & TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                HTML5 & CSS3
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                TailwindCSS & Styled Components
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Responsive Design
              </li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-secondary/80 rounded-lg p-6">
            <h3 className="text-lg font-medium-thin mb-4 text-primary">
              {language === 'ru' ? 'Инструменты и Технологии' : 
               language === 'es' ? 'Herramientas y Tecnologías' : 
               'Tools & Technologies'}
            </h3>
            <ul className="space-y-2 text-sm font-thin-heading">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Git & GitHub
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Vite & Webpack
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                ESLint & Prettier
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Vitest & Testing Library
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Husky & Lint-staged
              </li>
            </ul>
          </div>

          {/* Low-Code */}
          <div className="bg-secondary/80 rounded-lg p-6">
            <h3 className="text-lg font-medium-thin mb-4 text-primary">
              {language === 'ru' ? 'Low-Code' : 
               language === 'es' ? 'Low-Code' : 
               'Low-Code'}
            </h3>
            <ul className="space-y-2 text-sm font-thin-heading">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Xano
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Airtable
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Make
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                UIBakery
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Tilda
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Carrd
              </li>
            </ul>
          </div>
        </div>
      </AnimatedElement>

    </section>
  )
}
