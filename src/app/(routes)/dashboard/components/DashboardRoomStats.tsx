import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/core/components/ui/card'

const data = [
  {
    title: 'Individual',
    total: 30,
    available: 2,
    totalRooms: 30,
    price: 568,
    offer: 2
  },
  {
    title: 'Compartido doble',
    total: 35,
    available: 2,
    totalRooms: 35,
    price: 1068,
    offer: 2
  },
  {
    title: 'Compartido triple',
    total: 25,
    available: 2,
    totalRooms: 25,
    price: 1568
  },
  {
    title: 'Suite VIP',
    total: 10,
    available: 4,
    totalRooms: 10,
    price: 2568
  }
]

export default function DashboardRoomStats () {
  return (
    <section>
      <Card x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardTitle>Habitaciones</CardTitle>
        </CardHeader>

        <CardContent className='grid grid-cols-4 gap-5'>
          {
            data.map((room, index) => (
              <Card key={index} x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  {room.offer && (
                    <span className='text-xs text-primary font-medium p-1 bg-green-200 w-max rounded text-green-700'>{room.offer} ofertas</span>
                  )}
                  <CardDescription>{room.title}</CardDescription>
                  <CardTitle>
                    <span className='text-xl'>{room.available}</span>
                    <span>/</span>
                    <span className='text-sm text-muted-foreground'>{room.totalRooms}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-primary text-2xl font-medium'>
                    {room.price}/ <span className='text-sm text-muted-foreground'>Día</span>
                  </p>
                </CardContent>
              </Card>
            ))
          }
        </CardContent>
      </Card>
    </section>
  )
}
