import Link from 'next/link'
import { format } from '@formkit/tempo'

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/core/components/ui/dropdown-menu'

import { Button } from '@/core/components/ui/button'
import { getUser } from '@/app/actions/getUser'
import { Avatar, AvatarFallback } from '@/core/components/ui/avatar'

export default async function DashboardAvatar () {
  const { user, error } = await getUser()

  if (!user || error) return null

  const userInitials = user.email?.slice(0, 2).toLocaleUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Avatar>
            <AvatarFallback>
              {userInitials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuLabel>Correo electrónico: </DropdownMenuLabel>
        <DropdownMenuItem>{user.email}</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Creado el: </DropdownMenuLabel>
        <DropdownMenuItem>{format(new Date(user.created_at))}</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/auth/logout">
            Cerrar sesión
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
