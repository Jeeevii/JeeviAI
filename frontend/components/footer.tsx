import { profile } from "@/lib/portfolio"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/30 px-5 py-12 pb-28 text-center">
      <p className="text-lg font-semibold text-white">Want to chat?</p>
      <a href={`mailto:${profile.email}`} className="mt-3 inline-flex min-h-11 items-center break-all text-sm text-orange-300 underline-offset-4 hover:underline">{profile.email}</a>
      <p className="mt-5 font-mono text-xs text-gray-400">Built with Next.js, Tailwind CSS, and vibes 🐈‍⬛</p>
      <p className="mt-2 text-xs text-gray-400">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
