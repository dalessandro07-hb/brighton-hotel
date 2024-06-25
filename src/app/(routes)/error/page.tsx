'use client'

import MainPageContainer from '@/app/components/layout/MainPageContainer'
import { useSearchParams } from 'next/navigation'

export default function ErrorPage () {
  const searchParams = useSearchParams()

  const message = searchParams.get('message') ?? 'Ocurrió un error'

  return (
    <MainPageContainer>
      <section className="flex flex-col gap-2 grow justify-center">
        <h1 className='font-bold'>Ocurrió un error:</h1>

        <p className='text-xl font-medium text-destructive'>
          {message}
        </p>
      </section>
    </MainPageContainer>
  )
}
