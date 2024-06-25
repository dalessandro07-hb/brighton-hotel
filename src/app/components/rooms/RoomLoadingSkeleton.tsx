import { Skeleton } from '@/core/components/ui/skeleton'

function RoomLoadingSkeletonList () {
  return (
    <section className='grid grid-cols-4 gap-5'>
      {[...Array(12)].map((_, i) => (
        <RoomLoadingSkeleton key={i} />
      ))}
    </section>
  )
}

export default function RoomLoadingSkeleton ({ asList = false }: { asList?: boolean }) {
  return asList ? (
    <RoomLoadingSkeletonList />
  ) : (
    <section className='shadow rounded p-5 flex flex-col justify-between grow gap-2'>
      <Skeleton className='w-full h-64' />
      <Skeleton className='w-3/4 h-8' />
      <Skeleton className='w-4/5 h-5' />
      <Skeleton className='w-full h-10 rounded-md' />
    </section>
  )
}
