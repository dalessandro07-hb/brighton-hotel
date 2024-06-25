import { createBrowserClient } from '@supabase/ssr'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export function createClient () {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Missing env variables SUPABASE_URL and SUPABASE_ANON_KEY (client)')
  }

  return createBrowserClient(
    SUPABASE_URL, SUPABASE_ANON_KEY

  )
}
