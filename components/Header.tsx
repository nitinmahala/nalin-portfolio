"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent backdrop-blur-xl">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">Nalin Mahala</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-gray-300 transition-colors duration-300 font-medium"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#04532E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#D1D5DB") // Tailwind's gray-300
                }
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-transparent backdrop-blur-xl rounded-2xl border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-4 text-gray-300 transition-colors duration-300 font-medium"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#04532E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#D1D5DB") // Tailwind's gray-300
                }
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
