"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.title": "Victoria Nasonova",
    "hero.subtitle": "Frontend Developer creating beautiful and functional user experiences",
    "hero.location": "Based in Argentina",
    "about.title": "What I Do",
    "about.description": "• Enhance and maintain internal applications\n• Build and launch websites for partners\n• Design and integrate APIs with Xano\n• Automate workflows to improve team efficiency",
    "about.item1": "Enhance and maintain internal applications",
    "about.item2": "Build and launch websites for partners",
    "about.item3": "Design and integrate APIs with Xano",
    "about.item4": "Automate workflows to improve team efficiency",
    "skills.title": "Skills & Technologies",
    "skills.description": "Proficient in modern frontend technologies and tools, with a focus on creating scalable and maintainable code.",
    "skills.certificates": "Certificates & Achievements",
    "experience.title": "Experience & Education",
    "experience.description": "• Junior Frontend Developer at ATLAS ANALYTICS — enhancing internal no-code/low-code products, building websites, integrating APIs with Xano, and automating workflows with Make.\n• 6-month apprenticeship in frontend development\n• 1-year JavaScript & React program at RS School",
    "experience.item1": "Junior Frontend Developer at ATLAS ANALYTICS — enhancing internal no-code/low-code products, building websites, integrating APIs with Xano, and automating workflows with Make.",
    "experience.item2": "6-month apprenticeship in frontend development",
    "experience.item3": "1-year JavaScript & React program at RS School",
    "contact.title": "Get In Touch",
    "contact.description": "Let's work together to bring your ideas to life",
    "hero.badge": "Available for work",
    "hero.download": "Download CV",
    "skills.frontend": "Frontend",
    "skills.frontend.desc": "React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS",
    "skills.tools": "Tools & Libraries",
    "skills.tools.desc": "Git, Webpack, Vite, Framer Motion, Zustand, React Query",
    "skills.testing": "Testing",
    "skills.testing.desc": "Jest, React Testing Library, Cypress, Playwright",
    "skills.other": "Other",
    "skills.other.desc": "Node.js, Express, MongoDB, PostgreSQL, Docker",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "hero.title": "Victoria Nasonova",
    "hero.subtitle": "Desarrolladora Frontend creando experiencias de usuario hermosas y funcionales",
    "hero.location": "Basada en Argentina",
    "about.title": "Lo Que Hago",
    "about.description": "• Mejoro y mantengo aplicaciones internas\n• Construyo y lanzo sitios web para socios\n• Diseño e integro APIs con Xano\n• Automatizo flujos de trabajo para mejorar la eficiencia del equipo",
    "about.item1": "Mejoro y mantengo aplicaciones internas",
    "about.item2": "Construyo y lanzo sitios web para socios",
    "about.item3": "Diseño e integro APIs con Xano",
    "about.item4": "Automatizo flujos de trabajo para mejorar la eficiencia del equipo",
    "skills.title": "Habilidades y Tecnologías",
    "skills.description": "Experto en tecnologías y herramientas frontend modernas, con enfoque en crear código escalable y mantenible.",
    "skills.certificates": "Certificados y Logros",
    "experience.title": "Experiencia y Educación",
    "experience.description": "• Desarrolladora Frontend Junior en ATLAS ANALYTICS — mejorando productos internos no-code/low-code, construyendo sitios web, integrando APIs con Xano y automatizando flujos de trabajo con Make.\n• Pasantía de 6 meses en desarrollo frontend\n• Programa de 1 año de JavaScript & React en RS School",
    "experience.item1": "Desarrolladora Frontend Junior en ATLAS ANALYTICS — mejorando productos internos no-code/low-code, construyendo sitios web, integrando APIs con Xano y automatizando flujos de trabajo con Make.",
    "experience.item2": "Pasantía de 6 meses en desarrollo frontend",
    "experience.item3": "Programa de 1 año de JavaScript & React en RS School",
    "contact.title": "Ponte en Contacto",
    "contact.description": "Trabajemos juntos para dar vida a tus ideas",
    "hero.badge": "Disponible para trabajar",
    "hero.download": "Descargar CV",
    "skills.frontend": "Frontend",
    "skills.frontend.desc": "React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS",
    "skills.tools": "Herramientas y Librerías",
    "skills.tools.desc": "Git, Webpack, Vite, Framer Motion, Zustand, React Query",
    "skills.testing": "Testing",
    "skills.testing.desc": "Jest, React Testing Library, Cypress, Playwright",
    "skills.other": "Otros",
    "skills.other.desc": "Node.js, Express, MongoDB, PostgreSQL, Docker",
  },
  ru: {
    "nav.home": "Главная",
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.contact": "Контакты",
    "hero.title": "Виктория Насонова",
    "hero.subtitle": "Frontend разработчик, создающий красивые и функциональные пользовательские интерфейсы",
    "hero.location": "Находится в Аргентине",
    "about.title": "Что Я Делаю",
    "about.description": "• Улучшаю и поддерживаю внутренние приложения\n• Создаю и запускаю веб-сайты для партнеров\n• Проектирую и интегрирую API с Xano\n• Автоматизирую рабочие процессы для повышения эффективности команды",
    "about.item1": "Улучшаю и поддерживаю внутренние приложения",
    "about.item2": "Создаю и запускаю веб-сайты для партнеров",
    "about.item3": "Проектирую и интегрирую API с Xano",
    "about.item4": "Автоматизирую рабочие процессы для повышения эффективности команды",
    "skills.title": "Навыки и Технологии",
    "skills.description": "Владею современными frontend технологиями и инструментами, с фокусом на создание масштабируемого и поддерживаемого кода.",
    "skills.certificates": "Сертификаты и Достижения",
    "experience.title": "Опыт и Образование",
    "experience.description": "• Младший Frontend разработчик в ATLAS ANALYTICS — улучшение внутренних no-code/low-code продуктов, создание веб-сайтов, интеграция API с Xano и автоматизация рабочих процессов с Make.\n• 6-месячная стажировка в области frontend разработки\n• 1-годичная программа JavaScript & React в RS School",
    "experience.item1": "Младший Frontend разработчик в ATLAS ANALYTICS — улучшение внутренних no-code/low-code продуктов, создание веб-сайтов, интеграция API с Xano и автоматизация рабочих процессов с Make.",
    "experience.item2": "6-месячная стажировка в области frontend разработки",
    "experience.item3": "1-годичная программа JavaScript & React в RS School",
    "contact.title": "Свяжитесь со Мной",
    "contact.description": "Давайте работать вместе, чтобы воплотить ваши идеи в жизнь",
    "hero.badge": "Доступен для работы",
    "hero.download": "Скачать резюме",
    "skills.frontend": "Frontend",
    "skills.frontend.desc": "React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS",
    "skills.tools": "Инструменты и Библиотеки",
    "skills.tools.desc": "Git, Webpack, Vite, Framer Motion, Zustand, React Query",
    "skills.testing": "Тестирование",
    "skills.testing.desc": "Jest, React Testing Library, Cypress, Playwright",
    "skills.other": "Прочее",
    "skills.other.desc": "Node.js, Express, MongoDB, PostgreSQL, Docker",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
