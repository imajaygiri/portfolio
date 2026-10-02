import { Code2, Cpu, Network } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTag, CardTitle } from '@/components/ui/Card'
import Section from '@/components/layout/Section'

const pillars = [
  {
    icon: Cpu,
    title: 'Operating Systems & Kernels',
    accent: 'red' as const,
    tag: 'OS / KERNEL',
    description:
      'Studying process scheduling, virtual memory paging, address spaces, and POSIX system call boundaries in C and Rust.',
  },
  {
    icon: Network,
    title: 'Network Protocols & Sockets',
    accent: 'blue' as const,
    tag: 'NETWORKING',
    description:
      'Understanding packet lifecycles from raw Ethernet frames to transport states, UDP sockets, and non-blocking epoll event loops.',
  },
  {
    icon: Code2,
    title: 'Backend Infrastructure',
    accent: 'purple' as const,
    tag: 'BACKEND',
    description:
      'Architecting resilient Go services, bidirectional WebSocket communication, distributed state in Redis, and relational transactions in PostgreSQL.',
  },
]

export default function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="§ 01. POSITION & PHILOSOPHY"
      title="Engineering from the machine up."
      description="I am a BTech Computer Science student focused on systems programming, computer networking, and backend infrastructure. Rather than relying solely on high-level abstractions, I learn by building software from first principles."
      accent="red"
    >
      <div className="space-y-8">
        {/* Document Quote Banner */}
        <div className="rounded-xs border border-border bg-muted/30 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-red font-bold">
            Working Philosophy
          </p>
          <blockquote className="mt-2 text-xl font-medium text-foreground sm:text-2xl font-mono">
            &ldquo;When I don&apos;t understand something, I try to build it.&rdquo;
          </blockquote>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed sm:text-base">
            I do not claim professional seniority I do not possess. I am a student who builds serious technical projects to understand how protocols, kernels, and storage engines actually function. Everything on this site reflects independent implementations and experiments.
          </p>
        </div>

        {/* 3 Pillars using Modular Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} accent={item.accent}>
                <div>
                  <CardHeader>
                    <CardTag accent={item.accent}>{item.tag}</CardTag>
                    <Icon className="size-4 text-muted-foreground" />
                  </CardHeader>
                  <div className="mt-4">
                    <CardTitle className="text-base sm:text-base">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
