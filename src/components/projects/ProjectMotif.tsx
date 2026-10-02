import type { AccentColor } from '@/types/portfolio'

interface ProjectMotifProps {
  motif: 'network-packets' | 'dns-records' | 'dispatch-route'
  accent: AccentColor
}

export default function ProjectMotif({ motif }: ProjectMotifProps) {
  if (motif === 'network-packets') {
    return (
      <div className="relative h-20 w-full overflow-hidden rounded border border-accent-blue/15 bg-accent-blue-subtle/40 p-2 font-mono text-[10px]">
        {/* Abstract TCP Packet / Handshake Diagram */}
        <div className="flex h-full items-center justify-between px-3 text-muted-foreground">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] uppercase tracking-wider text-accent-blue">TUN/TAP</span>
            <div className="size-2 rounded-full bg-accent-blue/80 ring-2 ring-accent-blue/20" />
            <span className="text-[8px] text-muted-foreground/70">10.0.0.1</span>
          </div>

          <div className="relative flex flex-1 flex-col items-center justify-center px-4">
            <div className="h-px w-full bg-linear-to-r from-accent-blue/40 via-accent-blue to-accent-blue/40" />
            <div className="mt-1 flex w-full justify-between px-1 text-[8px] text-accent-blue/90">
              <span>SYN [seq=0]</span>
              <span>SYN-ACK [ack=1]</span>
              <span>ACK [seq=1]</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] uppercase tracking-wider text-accent-blue">USERSPACE</span>
            <div className="size-2 rounded-full bg-accent-blue/80 ring-2 ring-accent-blue/20" />
            <span className="text-[8px] text-muted-foreground/70">Rust Stack</span>
          </div>
        </div>
      </div>
    )
  }

  if (motif === 'dns-records') {
    return (
      <div className="relative h-20 w-full overflow-hidden rounded border border-accent-cyan/15 bg-accent-cyan-subtle/40 p-2 font-mono text-[10px]">
        {/* Abstract DNS Wire Record Tree */}
        <div className="flex h-full items-center justify-between px-3 text-muted-foreground">
          <div className="flex flex-col items-start gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-accent-cyan" />
              <span className="text-[9px] font-semibold text-accent-cyan">UDP:53 WIRE FORMAT</span>
            </div>
            <span className="text-[8px] text-muted-foreground/80">ID: 0x2A4F · QR: 1 · AA: 1</span>
          </div>

          <div className="flex items-center gap-2 text-[9px]">
            <span className="rounded border border-accent-cyan/30 bg-accent-cyan/10 px-1.5 py-0.5 text-accent-cyan">
              A 1.1.1.1
            </span>
            <span className="text-muted-foreground/40">&rarr;</span>
            <span className="rounded border border-accent-cyan/30 bg-accent-cyan/10 px-1.5 py-0.5 text-accent-cyan">
              NS ns1.auth
            </span>
          </div>
        </div>
      </div>
    )
  }

  // dispatch-route
  return (
    <div className="relative h-24 w-full overflow-hidden rounded border border-accent-purple/15 bg-accent-purple-subtle/40 p-3 font-mono text-[10px]">
      {/* Abstract Real-time Dispatch / Geospatial Pipeline */}
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between text-[9px]">
          <span className="flex items-center gap-1.5 text-accent-purple font-semibold">
            <span className="size-1.5 rounded-full bg-accent-purple animate-pulse" />
            GEO-DISPATCH PIPELINE
          </span>
          <span className="text-muted-foreground/80">WS / REDIS PUB-SUB / POSTGRES</span>
        </div>

        <div className="relative flex items-center justify-between px-2 text-[9px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="rounded bg-accent-purple/15 px-1.5 py-0.5 text-accent-purple">Rider (lat,lng)</span>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-3">
            <div className="h-px w-full bg-linear-to-r from-accent-purple/30 via-accent-purple to-accent-purple/30" />
            <span className="absolute -top-3 text-[8px] text-accent-purple">Spatial Kd-Tree &middot; Match &lt;15ms</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="rounded bg-accent-purple/15 px-1.5 py-0.5 text-accent-purple">Driver Dispatch</span>
          </div>
        </div>
      </div>
    </div>
  )
}
