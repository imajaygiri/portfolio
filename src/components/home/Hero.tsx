import type { SVGProps } from 'react'
import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import { siteConfig } from '@/data/site'

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Document Masthead"
      className="border-b border-border bg-background pt-16 pb-16 sm:pt-24 sm:pb-24"
    >
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          {/* Main Lead Column */}
          <div className="space-y-6">
            {/* Red Document Accent Line */}
            <div className="h-1 w-12 bg-accent-red" />

            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {siteConfig.name}
              </h1>
              <p className="mt-2 text-base sm:text-lg font-medium text-foreground/80 font-mono">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Document Paragraphs */}
            <div className="space-y-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
              <p>
                {siteConfig.bio}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                I am a BTech Computer Science student learning systems from first principles. When I don&apos;t understand how an abstraction operates, I write a minimal userspace implementation—exploring packet headers, kernel socket multiplexing, and concurrent service architectures.
              </p>
            </div>

            {/* Editorial Blockquote */}
            <blockquote className="border-l-2 border-accent-red pl-4 py-1 text-sm sm:text-base font-mono italic text-foreground/90 bg-muted/30">
              &ldquo;{siteConfig.philosophy}&rdquo;
            </blockquote>

            {/* Arpit-Style Social Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 font-mono text-xs">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xs border border-border bg-card px-3 py-1.5 font-medium text-foreground transition-all hover:border-accent-red hover:text-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
              >
                <GithubIcon className="size-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="size-3 text-muted-foreground" />
              </a>

              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xs border border-border bg-card px-3 py-1.5 font-medium text-foreground transition-all hover:border-accent-red hover:text-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
              >
                <LinkedinIcon className="size-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="size-3 text-muted-foreground" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 rounded-xs border border-border bg-card px-3 py-1.5 font-medium text-foreground transition-all hover:border-accent-red hover:text-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
              >
                <Mail className="size-3.5" />
                <span>{siteConfig.email}</span>
              </a>

              <a
                href={siteConfig.resumeUrl}
                className="inline-flex items-center gap-1.5 rounded-xs border border-border bg-card px-3 py-1.5 font-medium text-muted-foreground transition-all hover:border-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <FileText className="size-3.5" />
                <span>Curriculum Vitae</span>
              </a>
            </div>
          </div>

          {/* Right Column: Wikipedia-Style Technical Infobox */}
          <div className="rounded-xs border border-border bg-card p-5 font-mono text-xs shadow-2xs">
            <div className="border-b border-border pb-2.5 flex items-center justify-between">
              <span className="font-bold uppercase tracking-wider text-accent-red text-[11px]">
                TECHNICAL DOSSIER
              </span>
              <span className="text-[10px] text-muted-foreground">REF #AG-2026</span>
            </div>

            <div className="mt-3.5 space-y-2.5 text-[11px] divide-y divide-border/60">
              <div className="pt-2 flex justify-between gap-2">
                <span className="text-muted-foreground">Focus:</span>
                <span className="text-right text-foreground font-semibold">Systems &amp; Networks</span>
              </div>

              <div className="pt-2 flex justify-between gap-2">
                <span className="text-muted-foreground">Degree:</span>
                <span className="text-right text-foreground">B.Tech Computer Science</span>
              </div>

              <div className="pt-2 flex justify-between gap-2">
                <span className="text-muted-foreground">Languages:</span>
                <span className="text-right text-foreground font-semibold">Go · Rust · C · C++</span>
              </div>

              <div className="pt-2 flex justify-between gap-2">
                <span className="text-muted-foreground">Networking:</span>
                <span className="text-right text-accent-red font-medium">TCP/IP · DNS · epoll</span>
              </div>

              <div className="pt-2 flex justify-between gap-2">
                <span className="text-muted-foreground">OS Interfaces:</span>
                <span className="text-right text-foreground">TUN/TAP · Sockets</span>
              </div>

              <div className="pt-2 flex justify-between gap-2">
                <span className="text-muted-foreground">Storage/State:</span>
                <span className="text-right text-foreground">PostgreSQL · Redis</span>
              </div>

              <div className="pt-2 flex justify-between gap-2">
                <span className="text-muted-foreground">Direct Mail:</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-right text-accent-red hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
