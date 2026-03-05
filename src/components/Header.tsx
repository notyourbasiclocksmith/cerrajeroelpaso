'use client'

import { useState } from 'react'
import Link from 'next/link'
import { businessInfo } from '@/lib/data'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services/', label: 'Services' },
    { href: '/cities/', label: 'Service Areas' },
    { href: '/blog/', label: 'Blog' },
    { href: '/about/', label: 'About' },
    { href: '/contact/', label: 'Contact' },
  ]

  return (
    <header className="bg-primary/95 backdrop-blur-md text-white shadow-2xl sticky top-0 z-50 border-b border-secondary/20">
      {/* Top Bar */}
      <div className="hidden md:block bg-secondary/10 border-b border-secondary/20">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6 text-gray-300">
            <span>24/7 Emergency Service Available</span>
            <span className="text-secondary">|</span>
            <span>Serving El Paso & Surrounding Areas</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${businessInfo.phoneRaw}`} className="text-secondary hover:text-highlight transition font-medium">
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-secondary to-highlight rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-secondary/30 transition-shadow">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg leading-tight tracking-wide">
                <span className="text-secondary">Cerrajero</span> El Paso
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Locksmith & Programming</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-secondary transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`sms:${businessInfo.textPhone}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition border border-white/10"
            >
              <MessageCircle className="w-4 h-4" />
              Text Us
            </a>
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-5 py-2.5 rounded-xl font-bold text-sm transition hover:shadow-lg hover:shadow-secondary/25 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 animate-fadeIn">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-gray-300 hover:text-secondary hover:bg-white/5 rounded-lg transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-white/10">
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-highlight text-primary px-6 py-3.5 rounded-xl font-bold transition"
                >
                  <Phone className="w-5 h-5" />
                  Call {businessInfo.phone}
                </a>
                <a
                  href={`sms:${businessInfo.textPhone}`}
                  className="flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold transition border border-white/10"
                >
                  <MessageCircle className="w-5 h-5" />
                  Text Us
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
