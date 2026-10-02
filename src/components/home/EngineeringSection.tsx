import { engineeringCategories } from '@/data/skills'
import { Card, CardDescription, CardHeader, CardTag, CardTitle } from '@/components/ui/Card'
import Section from '@/components/layout/Section'

export default function EngineeringSection() {
  return (
    <Section
      id="engineering"
      eyebrow="§ 03. TECHNICAL AREAS"
      title="Systems Stack & Core Domains"
      description="Technologies, kernel interfaces, and protocols I work with daily to build low-level software and backend services."
      accent="blue"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {engineeringCategories.map((category) => (
          <Card
            key={category.id}
            accent={category.accent}
          >
            <div>
              <CardHeader>
                <CardTag accent={category.accent}>{category.name}</CardTag>
              </CardHeader>

              <div className="mt-4">
                <CardTitle className="text-base sm:text-base">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-xs">
                  {category.description}
                </CardDescription>
              </div>

              {/* Technologies List */}
              <ul className="mt-5 space-y-1.5 font-mono text-xs text-foreground/85 border-t border-border/60 pt-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2"
                  >
                    <span className="text-muted-foreground/60 select-none" aria-hidden="true">
                      &rsaquo;
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
