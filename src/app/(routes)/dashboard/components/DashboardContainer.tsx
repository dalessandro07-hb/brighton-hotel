import { Button } from '@/core/components/ui/button'
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/core/components/ui/card'

import DashboardAside from '@/app/(routes)/dashboard/components/DashboardAside'
import DashboardHeader from '@/app/(routes)/dashboard/components/DashboardHeader'
import { format } from '@formkit/tempo'
import DashboardGeneralVision from '@/app/(routes)/dashboard/components/DashboardGeneralVision'
import DashboardRoomStats from '@/app/(routes)/dashboard/components/DashboardRoomStats'
import DashboardReservasList from '@/app/(routes)/dashboard/components/DashboardReservasList'

export default function DashboardContainer () {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-muted/40">
      <DashboardAside />

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-44">
        <DashboardHeader />

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4">
              {/* Crear reserva */}
              <Card className='flex flex-col gap-2 items-center' x-chunk="dashboard-05-chunk-0">
                <CardHeader className="flex justify-center w-full">
                  <CardTitle className='text-center'>{format(new Date(), 'full')}</CardTitle>
                </CardHeader>

                <CardFooter>
                  <Button>Crear reserva</Button>
                </CardFooter>
              </Card>

              {/* Visión general */}
              <DashboardGeneralVision />

              {/* Estadísticas de habitaciones */}
              <DashboardRoomStats />
            </div>

            {/* Lista de reservas */}
            <DashboardReservasList />
          </div>
        </main>
      </div>
    </div>
  )
}
