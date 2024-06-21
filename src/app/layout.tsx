import './globals.css'

import { Questrial } from 'next/font/google'
import { APP_DESCRIPTION, APP_TITLE } from '@/core/lib/constants'

import type { Metadata } from 'next'
import Footer from '@/app/components/layout/Footer'
import { ThemeProvider } from '@/core/components/theme-provider'
import { Toaster } from '@/core/components/ui/sonner'

const questrial = Questrial({ subsets: ['latin'], weight: ['400'] })

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
      <body className={questrial.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col gap-10 min-h-dvh p-5">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster expand />
      </body>
    </html>
  )
}
