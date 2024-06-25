import { Avatar, AvatarFallback } from '@/core/components/ui/avatar'

import type { User } from '@supabase/supabase-js'

export default function UserAvatar ({ user }: {
  user: User
}) {
  const initials = `${user?.email?.charAt(0)}${user?.email?.charAt(1)}`

  return (
    <div className='flex items-center gap-2'>
      <Avatar>
        <AvatarFallback className='uppercase'>{initials}</AvatarFallback>
      </Avatar>
    </div>
  )
}
