'use server'

import { createClient } from '@/core/utils/supabase/server'

export async function getUser () {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()

    if (error) {
      throw error
    }

    return {
      user: data.user,
      error: null
    }
  } catch (error: any) {
    console.error('An error occurred while fetching user data:', error)
    return {
      user: null,
      error: error.message
    }
  }
}
