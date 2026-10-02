import type { ContactItem } from '@/types/portfolio'

export const contactItems: ContactItem[] = [
  {
    name: 'GitHub',
    label: 'github.com/imajaygiri',
    href: 'https://github.com/imajaygiri',
    accent: 'blue',
    external: true,
    isPlaceholder: false,
  },
  {
    name: 'LinkedIn',
    label: 'linkedin.com/in/ajay-giri',
    href: 'https://www.linkedin.com/in/ajay-giri-8a8604380?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    accent: 'cyan',
    external: true,
    isPlaceholder: false,
  },
  {
    name: 'Email',
    label: 'sinexcosec@gmail.com',
    href: 'mailto:sinexcosec@gmail.com',
    accent: 'red',
    external: false,
    isPlaceholder: false,
  },
]
