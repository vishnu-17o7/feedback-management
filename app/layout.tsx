import type { Metadata } from 'next'
import './globals.css'
import { ClientLayout } from '@/components/client-layout'

export const metadata: Metadata = {
  title: 'ClientCompass',
  description: 'Collect and analyze client feedback',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/feedback_compass_logo.png" type="image/png" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
