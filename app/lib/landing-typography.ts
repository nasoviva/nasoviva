const heroNameSizeBase =
  "text-[clamp(1.5rem,4.5vw,3.75rem)] md:text-[clamp(1.75rem,3.8vw,4.25rem)] xl:text-[clamp(2rem,3.2vw,5rem)]"

export const LANDING_HERO_NAME_SIZE_CLASS = `${heroNameSizeBase} min-[1600px]:text-[clamp(3.5rem,4.5vw,7rem)]`

export const LANDING_DISPLAY_SECTION_SCALE =
  "text-[clamp(1.25rem,3.4vw,2.4rem)] md:text-[clamp(1.4rem,2.6vw,2.85rem)] xl:text-[clamp(1.55rem,2.2vw,3.25rem)]"

export const LANDING_SECTION_TITLE_CLASS = `font-thin-heading font-semibold text-[#F4C430] uppercase leading-[1.1] tracking-tight ${LANDING_DISPLAY_SECTION_SCALE}`

export const LANDING_LEAD_PARAGRAPH_CLASS =
  "font-thin-heading text-base md:text-lg leading-snug text-muted-foreground"

export const LANDING_BODY_LG_CLASS = "font-mono text-base md:text-lg leading-[1.45]"

export const LANDING_HERO_SUBTITLE_CLASS = `hero-body-text mb-8 max-w-[500px] ${LANDING_BODY_LG_CLASS} font-semibold text-foreground uppercase`

export const LANDING_HERO_DESCRIPTION_CLASS = `hero-body-text hero-description mb-[30px] max-w-[500px] ${LANDING_BODY_LG_CLASS}`

export const LANDING_BODY_CLASS = "font-mono text-sm md:text-base leading-relaxed"

export const LANDING_LABEL_CLASS =
  "font-thin-heading font-semibold text-base md:text-lg uppercase leading-snug tracking-tight"

export const LANDING_ABOUT_CARD_TITLE_CLASS = `mb-[15px] ${LANDING_LABEL_CLASS}`

export const LANDING_ABOUT_CARD_BODY_CLASS = LANDING_BODY_CLASS

export const LANDING_PROJECT_CARD_TITLE_CLASS = `${LANDING_LABEL_CLASS} text-foreground`

export const LANDING_PROJECT_CARD_BODY_CLASS = `flex-1 ${LANDING_BODY_CLASS} text-foreground/85`

export const LANDING_PROJECT_CTA_CLASS =
  "block w-full origin-left font-mono text-sm md:text-base font-bold uppercase tracking-wide text-foreground transition-[color,transform] duration-200 ease-out group-hover/card:text-[#F4C430] hover:scale-[1.05]"

export const LANDING_EXPERIENCE_JOB_TITLE_CLASS =
  "font-thin-heading mb-4 text-base md:text-lg font-semibold uppercase tracking-[0.18em] text-inherit leading-relaxed"

export const LANDING_EXPERIENCE_BODY_CLASS = `${LANDING_BODY_CLASS} text-inherit opacity-90`

export const LANDING_NAV_LINK_CLASS =
  "font-thin-heading whitespace-nowrap text-base md:text-lg font-semibold uppercase tracking-tight text-foreground transition-colors hover:text-[#F4C430] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground px-0.5 sm:px-1"

/** Hero / brutal buttons: thin label sizing; add `font-semibold` (or `font-normal`) on the element. */
export const LANDING_BUTTON_LABEL_CLASS_NO_WEIGHT =
  "font-thin-heading text-sm md:text-base uppercase"

export const LANDING_FOOTER_DARK_LINK_BASE_CLASS =
  "footer-dark-text-link font-thin-heading text-base md:text-lg font-semibold uppercase tracking-[0.12em] no-underline transition-opacity"

export const LANDING_MARQUEE_ITEM_CLASS =
  "font-mono text-xs font-bold uppercase leading-none tracking-[0.14em] md:text-sm"

export const LANDING_MARQUEE_SEP_CLASS =
  "inline-block shrink-0 px-2 font-mono text-xs font-bold leading-none sm:px-2.5 md:px-3 md:text-sm"
