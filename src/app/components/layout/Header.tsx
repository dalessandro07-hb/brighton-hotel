import Link from 'next/link'

import { getUser } from '@/app/(routes)/auth/actions/getUser'
import UserAvatar from '@/app/components/user/UserAvatar'
import { Button } from '@/core/components/ui/button'

const headerLinks = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Habitaciones',
    href: '/habitaciones'
  }
]

export default async function Header ({
  sticky
}: {
  sticky?: boolean
}) {
  const { user } = await getUser()

  return (
    <header className={`flex justify-between gap-5 px-5 py-2 dark bg-background text-foreground backdrop-blur-lg ${sticky ? 'sticky top-0 left-0 right-0 -m-5 mb-5' : 'w-full'}`}>

      <ul className='flex items-center gap-5'>
        {headerLinks.map(({ label, href }) => (
          <li key={href}>
            <Link className='hover:underline' href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {user ? (
        <UserAvatar user={user} />
      ) : (
        <Button asChild variant="link">
          <Link href="/login">
            Iniciar sesión
          </Link>
        </Button>
      )}
    </header>
  )
}
