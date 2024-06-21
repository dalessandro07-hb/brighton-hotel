'use client'

import Image from 'next/image'
import Link from 'next/link'

import { APP_DESCRIPTION, APP_TITLE } from '@/core/lib/constants'

import hotelRoom from '@/assets/images/hotel-room.webp'
import { toast } from 'sonner'

export default function Home () {
  return (
    <main>
      <section className='flex flex-col gap-8'>
        <header className='flex flex-col gap-5'>
          <h1 className='text-7xl xs:text-8xl sm:text-9xl font-bold'>{APP_TITLE}</h1>
          <p className='text-sm xs:text-base'>{APP_DESCRIPTION}</p>

          <Link onClick={() => {
            toast.info('Disponible próximamente')
          }} className='border-b-2 hover:bg-primary p-2 hover:text-primary-foreground transition-all duration-300 hover:border-transparent w-max' href='#'>
            Reservar
          </Link>
        </header>

        <Image
          className='w-2/3'
          src={hotelRoom}
          alt='Hotel room'
          width={800}
          height={800}
          placeholder='blur'
        />

      </section>
    </main>
  )
}
