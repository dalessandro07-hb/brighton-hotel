import { redirect } from 'next/navigation'
import { LogOutIcon } from 'lucide-react'

import { signout } from '@/app/(routes)/login/actions'

import { createClient } from '@/core/utils/supabase/server'

import TypographyH1 from '@/core/components/ui/typographyH1'
import MainPageContainer from '@/app/components/layout/MainPageContainer'
import { Button } from '@/core/components/ui/button'

export default async function ProfilePage () {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error ?? !data?.user) {
    redirect('/login')
  }

  return (
    <MainPageContainer>
      <TypographyH1>¡Bienvenido {data.user.email}</TypographyH1>

      <form>
        <Button variant="destructive" className='flex gap-3 items-center w-max' formAction={signout}>
          <LogOutIcon size={18} />
          Cerrar sesión
        </Button>
      </form>
    </MainPageContainer>
  )
}
