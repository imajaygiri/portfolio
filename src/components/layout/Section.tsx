import type { ReactNode } from 'react'
import type { AccentColor } from '@/types/portfolio'
import { getAccent } from '@/lib/accents'

interface SectionProps {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  accent?: AccentColor
  children: ReactNode
  className?: string
  containerClassName?: string
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  accent = 'blue',
  children,
  className = '',
  containerClassName = '',
}: SectionProps) {
  const accentStyle = getAccent(accent)

  return (
    <section
      id={id}
      className={`border-b border-border/80 py-20 sm:py-28 ${className}`}
    >
      <div className={`mx-auto w-full max-w-5xl px-6 sm:px-8 ${containerClassName}`}>
        {(eyebrow || title || description) && (
          <header className="mb-12 sm:mb-16 space-y-3">
            {eyebrow && (
              <div className="flex items-center gap-2">
                <span className={`size-1.5 rounded-full ${accentStyle.dot}`} aria-hidden="true" />
                <p className={`font-mono text-xs font-semibold uppercase tracking-widest ${accentStyle.text}`}>
                  {eyebrow}
                </p>
              </div>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}

        {children}
      </div>
    </section>
  )
}
