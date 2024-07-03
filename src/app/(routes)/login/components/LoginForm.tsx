'use client'

import { useState } from 'react'

import { login, signup } from '@/app/(routes)/login/actions/index'

import { Label } from '@/core/components/ui/label'
import { Input } from '@/core/components/ui/input'
import { Button } from '@/core/components/ui/button'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

const loginFields = [
  {
    id: 1,
    label: 'Correo electrónico',
    type: 'email',
    placeholder: 'example@gmail.com',
    name: 'email'
  },
  {
    id: 2,
    label: 'Contraseña',
    type: 'password',
    placeholder: '********',
    name: 'password'
  }
]

export default function LoginForm () {
  const [viewPassword, setViewPassword] = useState<boolean>(false)

  function handleViewPassword () {
    setViewPassword((prev) => !prev)
  }

  return (
    <form className='flex flex-col justify-center gap-2 grow'>
      {
        loginFields.map((field) => (
          <div key={field.id}>
            <Label htmlFor={field.name}>{field.label}:</Label>

            <div className='relative'>
              <Input className='invalid:border-red-500 valid:border-green-500' placeholder={field.placeholder} id={field.name} name={field.name} type={
                field.name === 'password' ? (viewPassword ? 'text' : 'password') : field.type
              } required />

              {field.name === 'password' && (
                <Button onClick={handleViewPassword} type='button' className='absolute top-1/2 right-0 -translate-y-1/2' variant="outline" size="icon">
                  {viewPassword ? (
                    <EyeIcon size={18} />
                  ) : (
                    <EyeOffIcon size={18} />
                  )}
                </Button>
              )}
            </div>
          </div>
        ))
      }

      <Button formAction={login}>Iniciar sesión</Button>
      <Button variant="link" formAction={signup}>Crear cuenta</Button>
    </form>
  )
}
