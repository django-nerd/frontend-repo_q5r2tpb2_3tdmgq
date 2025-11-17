import { useState } from 'react'
import { Menu, X, Sparkles, Instagram, Mail, Linkedin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 via-violet-500 to-sky-500" />
            <span className="font-semibold tracking-tight">Ava Couture</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <div className="ml-4 flex items-center gap-3 text-gray-700">
              <a href="#" aria-label="Instagram" className="hover:text-gray-900"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Linkedin size={18} /></a>
              <a href="#contact" aria-label="Email" className="hover:text-gray-900"><Mail size={18} /></a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md bg-black text-white">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-sm text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
