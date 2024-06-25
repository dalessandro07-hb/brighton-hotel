'use server'

import { createClient } from '@/core/utils/supabase/server'

export async function getUser () {
  let user = null

  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()

  if (!error) user = data.user

  return { user }
}
