'use client'

import MainPageContainer from '@/app/components/layout/MainPageContainer'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Search () {
  const searchParams = useSearchParams()
  const message = searchParams.get('message') ?? 'Ocurrió un error'

  return <p className='text-xl font-medium text-destructive'>
    {message}
  </p>
}

export default function ErrorPage () {
  return (
    <MainPageContainer>
      <section className="flex flex-col gap-2 grow justify-center">
        <h1 className='font-bold'>Ocurrió un error:</h1>

        <Suspense fallback={<p>Cargando...</p>}>
          <Search />
        </Suspense>
      </section>
    </MainPageContainer>
  )
}
