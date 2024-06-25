import Image from 'next/image'

import hotelRoom from '@/assets/images/hotel-room.webp'

import { APP_DESCRIPTION, APP_TITLE } from '@/core/lib/constants'

import TypographyH1 from '@/core/components/ui/typographyH1'
import { Button } from '@/core/components/ui/button'

export default function HeroSection () {
  return (
    <section className='flex flex-col h-dvh items-start justify-center gap-5 grow text-primary dark'>
      <TypographyH1>{APP_TITLE}</TypographyH1>
      <p className='text-sm xs:text-base'>{APP_DESCRIPTION}</p>

      <div className="flex gap-5 items-center">
        <Button>
          Reservar
        </Button>

        <Button variant="outline">
          Iniciar sesión
        </Button>
      </div>

      <div className="bg-primary-foreground opacity-75 -z-10 w-full h-dvh inset-0 absolute"></div>

      <Image
        className='w-full h-dvh opacity-75 -z-20 absolute inset-0 -scale-x-100 object-cover'
        src={hotelRoom}
        alt='Hotel room'
        width={800}
        height={800}
        placeholder='blur'
        priority
      />
    </section>
  )
}
