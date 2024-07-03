import {
  File,
  ListFilter
} from 'lucide-react'

import { Badge } from '@/core/components/ui/badge'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/core/components/ui/dropdown-menu'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/core/components/ui/table'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/core/components/ui/tabs'
import { Button } from '@/core/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card'
import { formatCurrency } from '@/core/lib/helpers'
import { format } from '@formkit/tempo'

const reservations = [
  {
    name: 'Liam Johnson',
    email: 'liam@example.com',
    status: 'Limpio',
    date: '2023-06-23'
  },
  {
    name: 'Olivia Smith',
    email: 'olivia@example.com',
    status: 'Sucio',
    date: '2023-06-24'
  },
  {
    name: 'Noah Williams',
    email: 'noah@example.com',
    status: 'Limpio',
    date: '2023-06-25'
  },
  {
    name: 'Emma Brown',
    email: 'emma@example.com',
    status: 'Inspeccionado',
    date: '2023-06-26'
  },
  {
    name: 'Liam Johnson',
    email: 'liam@example.com',
    status: 'Limpio',
    date: '2023-06-23'
  },
  {
    name: 'Olivia Smith',
    email: 'olivia@example.com',
    status: 'Sucio',
    date: '2023-06-24'
  },
  {
    name: 'Emma Brown',
    email: 'emma@example.com',
    status: 'Limpio',
    date: '2023-06-26'
  }
].map((reservation, index) => ({
  id: Math.floor(1000 + Math.random() * 9000),
  nroRoom: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 1000) + 1}`,
  amount: Math.floor(Math.random() * 1000) + 1,
  paidAmount: Math.floor(Math.random() * 1000) + 1,
  ...reservation
}))

export default function DashboardReservasList () {
  return (
    <Tabs defaultValue="week">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="week">Semana</TabsTrigger>
          <TabsTrigger value="month">Mes</TabsTrigger>
          <TabsTrigger value="year">Año</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-7 gap-1 text-sm"
              >
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Filtrar</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Limpio
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Sucio
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Refunded
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            variant="outline"
            className="h-7 gap-1 text-sm"
          >
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Exportar</span>
          </Button>
        </div>
      </div>
      <TabsContent value="week">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Reservas</CardTitle>
            <CardDescription>
              Reservas recientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID de reserva</TableHead>
                  <TableHead>Huésped</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    N° de habitación
                  </TableHead>
                  <TableHead className="text-right">Importe total</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Importe pagado
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Estado
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Fecha de reserva
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell>
                      <div className="max-w-20 truncate font-bold">#{reservation.id}</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{reservation.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {reservation.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {reservation.nroRoom}
                    </TableCell>
                    <TableCell className="text-right">{formatCurrency(reservation.amount)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(reservation.paidAmount)}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant={reservation.status === 'Limpio' ? 'default' : reservation.status === 'Sucio' ? 'destructive' : 'outline'}>
                        {reservation.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {format(reservation.date, 'short')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
