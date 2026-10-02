import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '@/data/navigation'
import { siteConfig } from '@/data/site'
import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav
        aria-label="Document Navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5 sm:px-8"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-bold tracking-wider text-foreground uppercase transition-colors hover:text-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
        >
          <span className="size-2 rounded-full bg-accent-red" aria-hidden="true" />
          <span>{siteConfig.name}</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 font-mono text-xs uppercase sm:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
            >
              <span>{item.label}</span>
              {item.external && (
                <ArrowUpRight className="size-3 text-accent-red" aria-hidden="true" />
              )}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="grid size-8 place-items-center rounded-xs border border-border text-foreground transition-colors hover:border-accent-red hover:text-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
          >
            {isOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-6 py-4 sm:hidden"
        >
          <div className="flex flex-col gap-3 font-mono text-xs uppercase">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className="flex items-center justify-between py-2 text-muted-foreground transition-colors hover:text-accent-red"
              >
                <span>{item.label}</span>
                {item.external && <ArrowUpRight className="size-3.5 text-accent-red" aria-hidden="true" />}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
