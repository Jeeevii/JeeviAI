import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import { profile } from "@/lib/portfolio"
import "./globals.css"

const title = `${profile.name} | Software Engineer`
export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description: profile.description,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icons/favicon/favicon.ico", sizes: "any" }],
    apple: "/icons/favicon/apple-icon.png",
  },
  openGraph: {
    title, description: profile.description, url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`, locale: "en_US", type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${profile.name} - Software Engineer` }],
  },
  twitter: { card: "summary_large_image", title, description: profile.description, images: ["/opengraph-image"] },
}
export const viewport: Viewport = { themeColor: "#101010" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className="dark"><body>{children}<Analytics /></body></html>
}
