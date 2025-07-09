import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jeevithan Mahenthran | Portfolio',
  description: 'Portfolio website for Jeevithan Mahenthran',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
