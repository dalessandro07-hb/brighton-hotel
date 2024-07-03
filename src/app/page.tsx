import { getUser } from '@/app/actions/getUser'
import { redirect } from 'next/navigation'

export default async function Home () {
  const { user, error } = await getUser()

  if (!user || error) {
    redirect('/login')
  } else {
    redirect('/dashboard')
  }

  return null
}
