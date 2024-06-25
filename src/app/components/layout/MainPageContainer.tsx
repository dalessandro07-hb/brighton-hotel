import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'

export default function MainPageContainer (
  {
    children,
    withoutPadding = false,
    withoutFooter = false,
    withoutHeader = false
  }: {
    children: React.ReactNode
    withoutPadding?: boolean
    withoutFooter?: boolean
    withoutHeader?: boolean
  }
) {
  return (
    <>
      {!withoutHeader && <Header />}
      <main className={`flex flex-col justify-between grow gap-5 ${withoutPadding ? '' : 'p-5'}`}>
        <section className="flex flex-col grow justify-evenly">
          {children}
        </section>
        {!withoutFooter && <Footer />}
      </main>
    </>
  )
}
