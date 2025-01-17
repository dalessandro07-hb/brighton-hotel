import './globals.css'

import { Inter } from 'next/font/google'
import { APP_DESCRIPTION, APP_TITLE } from '@/core/lib/constants'

import { ThemeProvider } from '@/core/components/theme-provider'
import { Toaster } from '@/core/components/ui/sonner'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body style={inter.style} className='flex flex-col min-h-dvh'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster expand />
      </body>
    </html>
  )
}
