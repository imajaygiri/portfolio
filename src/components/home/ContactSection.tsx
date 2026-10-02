import type { SVGProps } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { contactItems } from '@/data/contact'
import { getAccent } from '@/lib/accents'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Section from '@/components/layout/Section'

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

export default function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="§ 07. CORRESPONDENCE"
      title="Direct Channels & Inquiries"
      description="Direct points of contact for technical discussions on systems programming, network internals, or engineering roles."
      accent="red"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {contactItems.map((item) => {
          const accent = getAccent(item.accent)

          // Normalize mailto href so clicking email immediately opens the default mail client
          const isEmail = item.name === 'Email'
          const mailHref = isEmail
            ? item.href.startsWith('mailto:')
              ? item.href
              : `mailto:${item.href}`
            : item.href

          const renderIcon = () => {
            if (item.name === 'GitHub') return <GithubIcon className={`size-4.5 ${accent.text}`} />
            if (item.name === 'LinkedIn') return <LinkedinIcon className={`size-4.5 ${accent.text}`} />
            return <Mail className={`size-4.5 ${accent.text}`} />
          }

          return (
            <Card
              key={item.name}
              as="a"
              href={mailHref}
              external={!isEmail}
              accent={item.accent}
              className="group cursor-pointer select-none"
            >
              <div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {renderIcon()}
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                      {item.name}
                    </span>
                  </div>
                  <ArrowUpRight className={`size-4 ${accent.text} transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
                </CardHeader>

                <div className="mt-4">
                  <CardTitle className="text-base sm:text-base font-mono">
                    {item.label}
                  </CardTitle>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {isEmail
                      ? 'Click to launch your mail client directly'
                      : `Open ${item.name} profile`}
                  </p>
                </div>
              </div>

              <CardFooter className="mt-4 pt-3">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                  <span className={`size-1.5 rounded-full ${accent.dot}`} />
                  <span>{isEmail ? 'DIRECT MAIL' : 'PUBLIC PROFILE'}</span>
                </div>
                <span className={`font-mono text-[11px] font-medium ${accent.text}`}>
                  {isEmail ? 'compose ↗' : 'visit ↗'}
                </span>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
