import { focusItems } from '@/data/focus'
import { Card, CardDescription, CardFooter, CardHeader, CardTag, CardTitle } from '@/components/ui/Card'
import Section from '@/components/layout/Section'

export default function FocusSection() {
  return (
    <Section
      id="focus"
      eyebrow="§ 04. CURRENT EXPLORATION"
      title="Active Systems Deep Dives"
      description="Active engineering topics I am currently reading RFCs for, examining in kernel sources, and testing in experimental code."
      accent="purple"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {focusItems.map((item) => (
          <Card
            key={item.index}
            accent={item.accent}
          >
            <div>
              <CardHeader>
                <span className="font-mono text-2xl font-bold text-foreground/40">
                  {item.index}
                </span>
                <CardTag accent={item.accent}>{item.domain}</CardTag>
              </CardHeader>

              <div className="mt-4">
                <CardTitle className="text-base sm:text-base">
                  {item.topic}
                </CardTitle>
                <CardDescription className="text-xs">
                  {item.description}
                </CardDescription>
              </div>
            </div>

            <CardFooter className="mt-6 pt-3 text-[11px] text-muted-foreground">
              <span>Status</span>
              <span className="font-mono font-medium text-foreground">In Progress</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  )
}
