import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import type { AccentColor } from '@/types/portfolio'
import { getAccent } from '@/lib/accents'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
  accent?: AccentColor
  className?: string
  children: ReactNode
  external?: boolean
} & ComponentPropsWithoutRef<T>

export function Card<T extends ElementType = 'div'>({
  as,
  accent,
  className = '',
  children,
  external,
  ...props
}: CardProps<T>) {
  // If href is passed and as is not specified, default to anchor
  const Component = as || ('href' in props ? 'a' : 'div')
  const accentStyle = accent ? getAccent(accent) : null

  const externalProps =
    Component === 'a' && external
      ? { target: '_blank', rel: 'noreferrer' }
      : {}

  return (
    <Component
      className={`group relative flex flex-col justify-between rounded-sm border border-border bg-card p-6 sm:p-7 transition-all duration-200 ${
        accentStyle ? `${accentStyle.hoverCard} hover:-translate-y-0.5` : 'hover:border-foreground/40'
      } ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </Component>
  )
}

export function CardHeader({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={`flex items-center justify-between gap-3 ${className}`}>{children}</div>
}

export function CardTitle({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <h3 className={`text-lg sm:text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-foreground ${className}`}>
      {children}
    </h3>
  )
}

export function CardDescription({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <p className={`mt-2.5 text-sm leading-relaxed text-muted-foreground ${className}`}>{children}</p>
}

export function CardContent({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={`mt-4 ${className}`}>{children}</div>
}

export function CardFooter({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={`mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4 font-mono text-xs ${className}`}>
      {children}
    </div>
  )
}

export function CardTag({
  accent,
  children,
  className = '',
}: {
  accent?: AccentColor
  children: ReactNode
  className?: string
}) {
  const accentStyle = accent ? getAccent(accent) : null

  return (
    <span
      className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs border ${
        accentStyle
          ? `${accentStyle.badge}`
          : 'border-border bg-muted/60 text-muted-foreground'
      } ${className}`}
    >
      {children}
    </span>
  )
}
