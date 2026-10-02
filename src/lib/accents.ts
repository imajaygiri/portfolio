import type { AccentColor } from '@/types/portfolio'

export interface AccentStyle {
  text: string
  bgSubtle: string
  border: string
  borderHover: string
  badge: string
  dot: string
  ring: string
  hoverCard: string
}

export const accentStyles: Record<AccentColor, AccentStyle> = {
  red: {
    text: 'text-accent-red',
    bgSubtle: 'bg-accent-red-subtle',
    border: 'border-accent-red/25',
    borderHover: 'hover:border-accent-red',
    badge: 'bg-red-500/10 text-accent-red border-red-500/25',
    dot: 'bg-accent-red',
    ring: 'focus-visible:ring-accent-red',
    hoverCard: 'hover:border-accent-red hover:bg-accent-red-subtle/30',
  },
  blue: {
    text: 'text-accent-blue',
    bgSubtle: 'bg-accent-blue-subtle',
    border: 'border-accent-blue/20',
    borderHover: 'hover:border-accent-blue',
    badge: 'bg-blue-500/10 text-accent-blue border-blue-500/20',
    dot: 'bg-accent-blue',
    ring: 'focus-visible:ring-accent-blue',
    hoverCard: 'hover:border-accent-blue hover:bg-accent-blue-subtle/30',
  },
  cyan: {
    text: 'text-accent-cyan',
    bgSubtle: 'bg-accent-cyan-subtle',
    border: 'border-accent-cyan/20',
    borderHover: 'hover:border-accent-cyan',
    badge: 'bg-cyan-500/10 text-accent-cyan border-cyan-500/20',
    dot: 'bg-accent-cyan',
    ring: 'focus-visible:ring-accent-cyan',
    hoverCard: 'hover:border-accent-cyan hover:bg-accent-cyan-subtle/30',
  },
  purple: {
    text: 'text-accent-purple',
    bgSubtle: 'bg-accent-purple-subtle',
    border: 'border-accent-purple/20',
    borderHover: 'hover:border-accent-purple',
    badge: 'bg-purple-500/10 text-accent-purple border-purple-500/20',
    dot: 'bg-accent-purple',
    ring: 'focus-visible:ring-accent-purple',
    hoverCard: 'hover:border-accent-purple hover:bg-accent-purple-subtle/30',
  },
  green: {
    text: 'text-accent-green',
    bgSubtle: 'bg-accent-green-subtle',
    border: 'border-accent-green/20',
    borderHover: 'hover:border-accent-green',
    badge: 'bg-emerald-500/10 text-accent-green border-emerald-500/20',
    dot: 'bg-accent-green',
    ring: 'focus-visible:ring-accent-green',
    hoverCard: 'hover:border-accent-green hover:bg-accent-green-subtle/30',
  },
  orange: {
    text: 'text-accent-orange',
    bgSubtle: 'bg-accent-orange-subtle',
    border: 'border-accent-orange/20',
    borderHover: 'hover:border-accent-orange',
    badge: 'bg-amber-500/10 text-accent-orange border-amber-500/20',
    dot: 'bg-accent-orange',
    ring: 'focus-visible:ring-accent-orange',
    hoverCard: 'hover:border-accent-orange hover:bg-accent-orange-subtle/30',
  },
}

export function getAccent(accent: AccentColor = 'blue'): AccentStyle {
  return accentStyles[accent] || accentStyles.blue
}
