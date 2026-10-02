export type AccentColor = 'red' | 'blue' | 'cyan' | 'purple' | 'green' | 'orange'

export interface Project {
  id: string
  title: string
  category: string
  language: string
  status?: string
  description: string
  technologies: string[]
  accent: AccentColor
  spec?: {
    interface?: string
    protocol?: string
    ioModel?: string
    state?: string
  }
  featured?: boolean
  githubUrl?: string
  writeupUrl?: string
}

export interface EngineeringCategory {
  id: string
  name: string
  description: string
  accent: AccentColor
  skills: string[]
}

export interface FocusItem {
  index: string
  domain: string
  topic: string
  description: string
  accent: AccentColor
}

export interface WritingItem {
  id: string
  title: string
  subtitle: string
  category: string
  technologies: string[]
  status: 'Drafting' | 'Planned' | 'Notes' | 'Published'
  accent: AccentColor
}

export interface ContactItem {
  name: string
  label: string
  href: string
  accent: AccentColor
  external?: boolean
  isPlaceholder?: boolean
  note?: string
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface SiteConfig {
  name: string
  tagline: string
  bio: string
  philosophy: string
  githubUrl: string
  linkedinUrl: string
  email: string
  resumeUrl: string
  copyrightYear: number
}
