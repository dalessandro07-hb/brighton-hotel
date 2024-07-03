import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/core/utils/supabase/server'

export default async function LogoutPage () {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    const errMsg = `Error: ${error.message}.`
    redirect(`/error?message=${errMsg}`)
  }

  revalidatePath('/', 'layout')
  redirect('/login')

  return null
}
