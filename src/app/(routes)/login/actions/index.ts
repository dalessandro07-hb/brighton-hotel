'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/core/utils/supabase/server'

const errorMessages = {
  noData: 'Error: No ingresaste un email o contraseña válidos. Por favor, intenta nuevamente.'
}

export async function login (formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  }

  if (!data.email || !data.password) {
    redirect(`/error?message=${errorMessages.noData}`)
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    const errMsg = `Error: ${error.message}.`
    redirect(`/error?message=${errMsg}`)
  }

  revalidatePath('/', 'layout')
  redirect('/perfil')
}

export async function signout () {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    const errMsg = `Error: ${error.message}.`
    redirect(`/error?message=${errMsg}`)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup (formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  }

  if (!data.email || !data.password) {
    redirect(`/error?message=${errorMessages.noData}`)
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    const errMsg = `Error: ${error.message}.`
    redirect(`/error?message=${errMsg}`)
  }

  revalidatePath('/', 'layout')
  redirect('/auth/confirm-email')
}
