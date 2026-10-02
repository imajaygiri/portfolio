import type { WritingItem } from '@/types/portfolio'

export const writingItems: WritingItem[] = [
  {
    id: 'building-tcp-stack',
    title: 'Building a TCP Stack in Rust',
    subtitle: 'From virtual TUN/TAP interfaces to three-way SYN-ACK handshakes, sequence numbers, and retransmission queues.',
    category: 'Networking',
    technologies: ['Rust', 'TUN/TAP', 'TCP/IP', 'epoll'],
    status: 'Drafting',
    accent: 'red',
  },
  {
    id: 'understanding-epoll',
    title: 'Understanding Linux epoll Internals',
    subtitle: 'epoll vs poll vs select — how the Linux kernel monitors thousands of socket file descriptors in O(1) time.',
    category: 'Systems',
    technologies: ['Linux', 'C', 'Kernel', 'I/O Multiplexing'],
    status: 'Notes',
    accent: 'blue',
  },
  {
    id: 'how-dns-works',
    title: 'How DNS Works From the Wire Up',
    subtitle: 'Dissecting DNS wire packets, RFC 1035 name compression, UDP sockets, and constructing an authoritative server.',
    category: 'Networking',
    technologies: ['Go', 'UDP:53', 'RFC 1035', 'Protocols'],
    status: 'Drafting',
    accent: 'cyan',
  },
  {
    id: 'websocket-server-scratch',
    title: 'Building a WebSocket Server From Scratch',
    subtitle: 'RFC 6455 frame parsing, client handshake upgrades, binary masking transformations, and concurrent broadcast loops in Go.',
    category: 'Backend',
    technologies: ['Go', 'RFC 6455', 'WebSockets', 'Concurrency'],
    status: 'Planned',
    accent: 'purple',
  },
]
