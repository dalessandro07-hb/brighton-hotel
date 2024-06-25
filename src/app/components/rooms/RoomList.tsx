import dynamic from 'next/dynamic'

import Room from '@/app/components/rooms/Room'
import RoomLoadingSkeleton from '@/app/components/rooms/RoomLoadingSkeleton'

import type { IRoom } from '@/core/types'

function RoomList ({
  rooms
}: {
  rooms: IRoom[]
}) {
  return (
    <ul className='grid grid-cols-4 gap-5'>
      {rooms.map(room => (
        <Room key={room.id} room={room} />
      ))}
    </ul>
  )
}

export default dynamic(async () => await Promise.resolve(RoomList), {
  ssr: false,
  loading: () => <RoomLoadingSkeleton asList />
})
