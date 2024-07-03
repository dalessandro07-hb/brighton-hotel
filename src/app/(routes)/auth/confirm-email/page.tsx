import Link from 'next/link'

import MainPageContainer from '@/app/components/layout/MainPageContainer'

import TypographyH1 from '@/core/components/ui/typographyH1'
import { Button } from '@/core/components/ui/button'
import { getUser } from '@/app/(routes)/auth/actions/getUser'

export default async function ConfirmEmailPage () {
  const { user } = await getUser()

  return user ? (
    <MainPageContainer withoutHeader>
      <TypographyH1>
        Ya puedes acceder a tu cuenta.
      </TypographyH1>

      <Button className='w-max' asChild variant="link">
        <Link href="/dashboard">Ir al dashboard</Link>
      </Button>
    </MainPageContainer>
  ) : (
    <MainPageContainer withoutHeader>
      <TypographyH1>
        🥳 Casi listo, revisa tu correo electronico y confírmalo para acceder.
      </TypographyH1>

      <Button className='w-max' asChild variant="link">
        <Link href="/login">Iniciar sesión</Link>
      </Button>
    </MainPageContainer>
  )
}
