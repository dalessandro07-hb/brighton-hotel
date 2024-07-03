import { redirect } from 'next/navigation'

import { getUser } from '@/app/actions/getUser'
import DashboardContainer from '@/app/(routes)/dashboard/components/DashboardContainer'

export default async function DashboardPage () {
  const { user, error } = await getUser()

  if (!user || error) {
    redirect('/login')
  }

  return (
    <DashboardContainer />
  )
}
