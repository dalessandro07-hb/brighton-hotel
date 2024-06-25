import MainPageContainer from '@/app/components/layout/MainPageContainer'
import LoginForm from '@/app/(routes)/login/components/LoginForm'
import Footer from '@/app/components/layout/Footer'

import TypographyH1 from '@/core/components/ui/typographyH1'

export default function LoginPage () {
  return (
    <MainPageContainer withoutPadding withoutFooter withoutHeader>
      <section className='flex grow gap-5'>
        <header className='flex flex-col items-center justify-center p-5 gap-5 w-1/2 bg-primary text-primary-foreground'>
          <TypographyH1>
            Inicia sesión o regístrate
          </TypographyH1>
        </header>

        <div className='w-1/2 p-5 flex flex-col justify-center'>
          <LoginForm />
          <Footer />
        </div>
      </section>
    </MainPageContainer>
  )
}
