import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types/portfolio'
import { getAccent } from '@/lib/accents'
import { Card, CardDescription, CardFooter, CardHeader, CardTag, CardTitle } from '@/components/ui/Card'

interface ProjectCardProps {
  project: Project
  className?: string
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const accent = getAccent(project.accent)

  return (
    <Card
      as="article"
      accent={project.accent}
      className={`relative ${className}`}
      aria-labelledby={`project-title-${project.id}`}
    >
      <div>
        {/* Header: Category & Language/Status */}
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className={`size-1.5 rounded-full ${accent.dot}`} aria-hidden="true" />
            <CardTag accent={project.accent}>{project.category}</CardTag>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            {project.status && (
              <span className="inline-flex items-center gap-1 border border-accent-red/30 bg-accent-red-subtle px-2 py-0.5 text-[11px] font-semibold text-accent-red">
                <span className="size-1.5 rounded-full bg-accent-red animate-pulse" />
                {project.status}
              </span>
            )}
            <span className="border border-border bg-muted/60 px-2 py-0.5 text-foreground/80 font-medium">
              {project.language}
            </span>
          </div>
        </CardHeader>

        {/* Title */}
        <div className="mt-4">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </div>

        {/* Document Specification Table (Wikipedia / RFC Dossier style) */}
        {project.spec && (
          <div className="mt-5 overflow-hidden rounded-xs border border-border/80 bg-muted/20 font-mono text-[11px] divide-y divide-border/60">
            {project.spec.interface && (
              <div className="grid grid-cols-[90px_1fr] px-3 py-1.5 sm:grid-cols-[120px_1fr]">
                <span className="text-muted-foreground select-none">Interface:</span>
                <span className="text-foreground/90 font-medium">{project.spec.interface}</span>
              </div>
            )}
            {project.spec.protocol && (
              <div className="grid grid-cols-[90px_1fr] px-3 py-1.5 sm:grid-cols-[120px_1fr]">
                <span className="text-muted-foreground select-none">Protocol:</span>
                <span className="text-foreground/90 font-medium">{project.spec.protocol}</span>
              </div>
            )}
            {project.spec.ioModel && (
              <div className="grid grid-cols-[90px_1fr] px-3 py-1.5 sm:grid-cols-[120px_1fr]">
                <span className="text-muted-foreground select-none">I/O Model:</span>
                <span className="text-foreground/90 font-medium">{project.spec.ioModel}</span>
              </div>
            )}
          </div>
        )}

        {/* Technologies List */}
        <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="border border-border/70 bg-muted/40 px-2.5 py-1 text-foreground/85 transition-colors group-hover:border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <CardFooter>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 font-medium ${accent.text} hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 ${accent.ring}`}
          >
            <span>Source Code &amp; Architecture</span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-muted-foreground">Source confidential</span>
        )}

        {project.writeupUrl && (
          <span className="text-muted-foreground/60 select-none">
            Technical Write-up <span className="text-[10px] lowercase text-muted-foreground/50">(forthcoming)</span>
          </span>
        )}
      </CardFooter>
    </Card>
  )
}
