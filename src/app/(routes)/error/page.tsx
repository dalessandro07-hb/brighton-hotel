import MainPageContainer from '@/app/components/layout/MainPageContainer'

export default function ErrorPage ({ searchParams }: {
  searchParams: {
    message?: string
  }
}) {
  const message = String(searchParams.message) ?? 'Ocurrió un error'

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
