import type { EngineeringCategory } from '@/types/portfolio'

export const engineeringCategories: EngineeringCategory[] = [
  {
    id: 'systems',
    name: 'SYSTEMS',
    description: 'Kernel boundaries, memory layout, process models, and concurrency primitives.',
    accent: 'blue',
    skills: [
      'C',
      'C++',
      'Rust',
      'Linux',
      'Operating Systems',
      'Memory Management',
      'Processes & Threads',
    ],
  },
  {
    id: 'networking',
    name: 'NETWORKING',
    description: 'Transport protocols, packet lifecycles, socket programming, and async I/O.',
    accent: 'cyan',
    skills: [
      'TCP/IP',
      'DNS',
      'HTTP',
      'WebSockets',
      'Unix Sockets',
      'TUN/TAP',
      'epoll',
    ],
  },
  {
    id: 'backend',
    name: 'BACKEND',
    description: 'High-throughput services, transactional storage, caching, and distributed patterns.',
    accent: 'purple',
    skills: [
      'Go',
      'PostgreSQL',
      'Redis',
      'REST APIs',
      'WebSockets',
      'Docker',
    ],
  },
  {
    id: 'tools',
    name: 'TOOLS & INFRA',
    description: 'Developer tooling, terminal environments, container runtimes, and deployment.',
    accent: 'green',
    skills: [
      'Git',
      'Linux',
      'Neovim',
      'Docker',
      'Azure',
    ],
  },
]
