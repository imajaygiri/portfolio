import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    id: 'tcp-ip-stack',
    title: 'TCP/IP Userspace Stack',
    category: 'NETWORKING & PROTOCOLS',
    language: 'Rust',
    description:
      'Userspace implementation of the Transmission Control Protocol (TCP) over virtual TUN/TAP network interfaces. Explores state machine transitions (LISTEN, SYN_RCVD, ESTABLISHED, FIN_WAIT), sliding window packet parsing, and timer-driven retransmission queues.',
    technologies: ['Rust', 'TUN/TAP', 'TCP/IP', 'IPv4', 'epoll', 'TimerFD'],
    accent: 'red',
    spec: {
      interface: 'Virtual TUN/TAP (Layer 3 IPv4)',
      protocol: 'RFC 793 / RFC 1122 Transmission Control Protocol',
      ioModel: 'Linux epoll & TimerFD event loop',
      state: 'Handshake, sequence sync & sliding window',
    },
    githubUrl: 'https://github.com/imajaygiri',
    writeupUrl: '#',
  },
  {
    id: 'dns-server',
    title: 'Authoritative DNS Server',
    category: 'NAME RESOLUTION & UDP',
    language: 'Go',
    description:
      'Authoritative Domain Name System (DNS) server exploring raw DNS wire-format parsing, UDP socket multiplexing, and record resolution. Decodes binary headers, question flags, and answers according to RFC 1035.',
    technologies: ['Go', 'UDP', 'DNS Wire Format', 'Packet Parsing', 'RFC 1035'],
    accent: 'cyan',
    spec: {
      interface: 'Raw POSIX UDP Socket (Port 53)',
      protocol: 'RFC 1035 Domain Names - Implementation & Spec',
      ioModel: 'Concurrent Go worker pools & goroutines',
      state: 'Authoritative zone parsing & answer compression',
    },
    githubUrl: 'https://github.com/imajaygiri',
    writeupUrl: '#',
  },
  {
    id: 'ride-platform',
    title: 'Distributed Ride Dispatch Platform',
    category: 'BACKEND ARCHITECTURE',
    language: 'Go',
    status: 'In Progress',
    featured: true,
    description:
      'Real-time geospatial dispatch and ride-hailing backend engine. Investigates high-frequency driver location tracking, spatial Kd-tree spatial proximity indexing, concurrent ride matchmaking pipelines, and distributed state coordination.',
    technologies: ['Go', 'WebSockets', 'PostgreSQL', 'Redis Pub/Sub', 'MapLibre', 'Azure'],
    accent: 'purple',
    spec: {
      interface: 'Full-duplex WebSocket connection streams',
      protocol: 'Geospatial spatial indexing & dispatch telemetry',
      ioModel: 'Redis pub/sub messaging with Postgres ACID ledger',
      state: 'Real-time driver location heartbeat tracking',
    },
    githubUrl: 'https://github.com/imajaygiri',
  },
]
