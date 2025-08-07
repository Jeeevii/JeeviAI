// proxy/middleware for processing malicious requests before hitting chat api
// maybe aporian or user intent detection with another model? 
// for now just a placeholder that passes everything through

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// apply middleware on chat api 
export const config = {
  matcher: ['/api/chat'],
}

// middleware function to inspect requests
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/api/chat')) {
    const userInput = req.nextUrl.searchParams.get('q') || ''

    if (userInput.toLowerCase().includes('test')) {
      return new Response('Content not allowed', { status: 403 })
    }
  }

  return NextResponse.next()
}

