import Link from 'next/link'
import { BookmarkIcon, CircleDollarSignIcon, ClipboardCheckIcon, Edit2Icon, Home, SlackIcon, TagIcon } from 'lucide-react'
import ThemeToggle from '@/core/components/theme-toggle'

const links = [
  { href: '/', icon: Home, label: 'Dashboard' },
  { href: '#', icon: Edit2Icon, label: 'Recepción' },
  { href: '#', icon: ClipboardCheckIcon, label: 'Huésped' },
  { href: '#', icon: BookmarkIcon, label: 'Habitaciones' },
  { href: '#', icon: TagIcon, label: 'Oferta' },
  { href: '#', icon: CircleDollarSignIcon, label: 'Tarifa' }
]

export default function DashboardAside () {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-44 justify-between flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col gap-10 p-5 w-full">
        <Link
          href="#"
          className="group flex shrink-0 items-center gap-2 rounded-full text-lg font-semibold text-primary md:text-base"
        >
          <SlackIcon className="h-7 w-7 transition-all group-hover:scale-110" />
          <span>Brighton</span>
        </Link>

        <div className='flex flex-col gap-2'>
          {links.map((link, index) => {
            const LinkIcon = link.icon

            return (
              <Link
                key={index}
                href={link.href}
                title={link.label}
                className="flex gap-3 items-center grow rounded-lg text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary p-2"
              >
                {<LinkIcon className="h-5 w-5" />}
                <span className="text-xs">{link.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      <div className="p-5">
        <ThemeToggle />
      </div>
    </aside>
  )
}
