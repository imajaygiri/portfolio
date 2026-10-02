import type { FocusItem } from '@/types/portfolio'

export const focusItems: FocusItem[] = [
  {
    index: '01',
    domain: 'Networking',
    topic: 'TCP/IP Internals',
    description: 'Connection states, sliding window flow control, congestion avoidance, and packet parsing over TUN/TAP devices.',
    accent: 'blue',
  },
  {
    index: '02',
    domain: 'Systems',
    topic: 'Linux & OS Internals',
    description: 'Low-level syscall boundaries, memory layout, process scheduling, and epoll-driven event loops in C and Rust.',
    accent: 'cyan',
  },
  {
    index: '03',
    domain: 'Backend',
    topic: 'Go Backend Architecture',
    description: 'Concurrent pipeline design, goroutine orchestration, Redis pub/sub messaging, and relational data modeling.',
    accent: 'purple',
  },
  {
    index: '04',
    domain: 'Infrastructure',
    topic: 'Distributed Systems Primitives',
    description: 'Consensus mechanisms, failure detection, RPC protocols, and running reproducible environments in containers.',
    accent: 'green',
  },
]
