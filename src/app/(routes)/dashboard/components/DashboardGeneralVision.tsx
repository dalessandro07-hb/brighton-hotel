import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/core/components/ui/card'

const data = [
  { label: 'Hoy', title: 'Check-in', value: 23 },
  { label: 'Hoy', title: 'Check-out', value: 13 },
  { label: 'Total', title: 'Hab. disponibles', value: 10 },
  { label: 'Total', title: 'Hab. ocupadas', value: 90 }
]

export default function DashboardGeneralVision () {
  return (
    <Card x-chunk="dashboard-05-chunk-1">
      <CardHeader className="pb-5">
        <CardTitle>Visión general</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-4 gap-5'>
        {data.map((item, index) => (
          <div className="flex gap-4 items-end" key={index}>
            <div className='flex flex-col'>
              <span className='text-xs text-muted-foreground'>{item.label}</span>
              <span className='text-sm'>{item.title}</span>
            </div>
            <span className='text-primary text-3xl font-bold'>
              {item.value}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
