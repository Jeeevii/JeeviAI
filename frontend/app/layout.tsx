import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Jeevithan Mahenthran | Portfolio',
  description: 'Jeevithan Mahenthran Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link rel="icon" href="/icons/favicon/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
