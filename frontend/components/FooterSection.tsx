export default function FooterSection() {
  return (
    <footer className="py-16 bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4 font-mono">
            <span className="text-orange-400">Built with</span> Next.js + Tailwind CSS +{" "}
            <span className="text-purple-400">lots of ☕</span>
          </p>
          <p className="text-gray-600 text-sm font-mono">© 2024 Jeevi.dev - All systems operational</p>
        </div>
      </div>
    </footer>
  )
}
