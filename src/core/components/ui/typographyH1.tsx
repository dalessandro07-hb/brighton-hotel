export default function TypographyH1 ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <h1 className='text-7xl md:text-8xl font-bold'>
      {children}
    </h1>
  )
}
