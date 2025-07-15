import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

import { Analytics } from '@vercel/analytics/next';
export const metadata: Metadata = {
  title: 'Jeevithan Mahenthran | UC Santa Cruz Computer Science Portfolio',
  description: 'hi! I\'m Jeevithan Mahenthran, a CS & Game Dev student at UC Santa Cruz. This is my personal portfolio where i share the projects ive built, companies and skills ive learned, and a bit about me.',
  keywords: [
    'Jeevithan Mahenthran',
    'Jeevi',
    'Portfolio',
    'UCSC',
    'University of California Santa Cruz',
    'Computer Science',
    'Game Design',
    'Web Development',
    'Backend Developer',
    'Full Stack Developer',
    'Software Engineering Intern',
    'Student Developer', 
    'AI Developer',
    'Projects',
    'Resume',
    'GitHub',
    'LinkedIn',
    'AI Projects',
    'Personal Website',
    'Tech Blog',
    'Programming',
    'Software Engineer',
    'Developer Portfolio'
  ],
  authors: [
    { name: 'Jeevithan Mahenthran', url: 'https://jeevithanmahenthran.com' }
  ],
  creator:
    'Jeevithan Mahenthran',
  openGraph: {
    title: 'Jeevithan Mahenthran | UC Santa Cruz Computer Science Portfolio',
    description: 'hi! I\'m Jeevithan Mahenthran, a CS & Game Dev student at UC Santa Cruz. This is my personal portfolio where i share the projects ive built, companies and skills ive learned, and a bit about me!',
    url: 'https://jeevithanmahenthran.com',
    siteName: 'Jeevithan Mahenthran Portfolio',
    images: [
      {
        url: 'https://jeevithanmahenthran.com/icons/favicon/favicon.ico',
        alt: 'Jeevithan Mahenthran Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://jeevithanmahenthran.com'),
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
