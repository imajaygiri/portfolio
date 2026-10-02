import { ArrowUpRight } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { siteConfig } from '@/data/site'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-16 sm:py-20 font-mono text-xs">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 space-y-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          {/* Masthead Colophon */}
          <div className="space-y-3 font-sans">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-accent-red" />
              <span className="font-mono text-base font-bold text-foreground uppercase tracking-wider">
                {siteConfig.name}
              </span>
            </div>
            <p className="font-mono text-xs text-accent-red font-semibold uppercase tracking-wider">
              {siteConfig.tagline}
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Personal engineering notebook and systems workspace. Exploring userspace network protocols, Linux kernel interfaces, and concurrent distributed architectures.
            </p>
            <div className="pt-2 font-mono text-xs">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-foreground hover:text-accent-red transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Quick Index */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-2 gap-3.5 uppercase">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-accent-red"
                >
                  <span>{item.label}</span>
                  {item.external && <ArrowUpRight className="size-3 text-accent-red" />}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-border/80 pt-4 text-muted-foreground">
              <span>Status: <strong className="text-foreground font-medium">B.Tech CS Student</strong></span>
              <a
                href="#top"
                className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent-red"
              >
                <span>Top of document &uarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border/80 pt-6 sm:flex-row sm:items-center text-muted-foreground">
          <p>
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. Designed as an open technical ledger.
          </p>
          <p className="text-[11px] text-muted-foreground/75">
            Inspired by Arpit Bhayani &middot; Built for Ajay Giri
          </p>
        </div>
      </div>
    </footer>
  )
}
