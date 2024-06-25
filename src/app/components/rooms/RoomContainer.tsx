import Header from '@/app/components/layout/Header'
import RoomList from '@/app/components/rooms/RoomList'

import type { IRoom } from '@/core/types'

async function getRooms () {
  const URL_API = 'https://jsonplaceholder.typicode.com/photos'

  const controller = new AbortController()

  const { signal } = controller

  const res = await fetch(URL_API, {
    signal
  })

  const data = await res.json()

  return data.slice(0, 40).map((r: IRoom) => ({
    ...r,
    price: Math.floor(Math.random() * 1000)
  }))
}

export default async function RoomContainer () {
  const rooms: IRoom[] = await getRooms()

  return (
    <section className='min-h-dvh flex flex-col gap-10 relative'>
      <Header sticky />

      <h2 className='text-7xl'>Habitaciones</h2>

      <RoomList rooms={rooms} />
    </section>
  )
}
