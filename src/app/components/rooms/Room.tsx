import Image from 'next/image'
import dynamic from 'next/dynamic'

import { Button } from '@/core/components/ui/button'
import { formatCurrency } from '@/core/lib/helpers'

import type { IRoom } from '@/core/types'
import RoomLoadingSkeleton from '@/app/components/rooms/RoomLoadingSkeleton'

function Room ({
  room
}: {
  room: IRoom
}) {
  return (
    <li
      className='shadow rounded p-5 flex flex-col justify-between grow gap-2'
    >
      <Image
        className='w-full object-cover'
        src={room.url}
        alt={room.title}
        width={800}
        height={800}
        quality={100}
      />

      <h3 className='text-lg'>{room.title}</h3>
      <p className='text-sm text-muted-foreground'>{room.url}</p>

      <Button>
        Reservar por {formatCurrency(room.price)}
      </Button>
    </li>
  )
}

export default dynamic(async () => await Promise.resolve(Room), {
  ssr: false,
  loading: () => <RoomLoadingSkeleton />
})
