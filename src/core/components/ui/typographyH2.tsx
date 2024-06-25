export default function TypographyH2 ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <h1 className='text-4xl md:text-5xl font-bold'>
      {children}
    </h1>
  )
}
