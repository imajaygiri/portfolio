import type { WritingItem } from '@/types/portfolio'
import { getAccent } from '@/lib/accents'
import { Card, CardDescription, CardFooter, CardHeader, CardTag, CardTitle } from '@/components/ui/Card'

interface WritingCardProps {
  item: WritingItem
}

export default function WritingCard({ item }: WritingCardProps) {
  const accent = getAccent(item.accent)

  return (
    <Card as="article" accent={item.accent}>
      <div>
        {/* Top: Category Tag & Status */}
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className={`size-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
            <CardTag accent={item.accent}>{item.category}</CardTag>
          </div>
          <span className="font-mono text-[11px] border border-border bg-muted/50 px-2 py-0.5 text-muted-foreground">
            {item.status}
          </span>
        </CardHeader>

        {/* Title & Summary */}
        <div className="mt-4">
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.subtitle}</CardDescription>
        </div>
      </div>

      {/* Footer Meta (no reading time) */}
      <CardFooter>
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          {item.technologies.map((t, idx) => (
            <span key={t} className="inline-flex items-center text-foreground/80 font-medium">
              <span>{t}</span>
              {idx < item.technologies.length - 1 && (
                <span className="ml-2 text-border select-none" aria-hidden="true">&middot;</span>
              )}
            </span>
          ))}
        </div>

        <span className={`font-mono text-[11px] font-medium ${accent.text}`}>
          [Working Paper]
        </span>
      </CardFooter>
    </Card>
  )
}
