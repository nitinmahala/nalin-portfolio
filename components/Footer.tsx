"use client"

import { Github, Linkedin, Mail, Heart, Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-800 bg-gray-900/20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#04532E]/5 via-transparent to-transparent"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Nalin Mahala</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Associate Software Developer passionate about creating scalable solutions and innovative applications.
              Always learning, always building.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/nalin-mahala-796497196/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[#04532E]/10 hover:border-[#04532E]/30 text-gray-400 hover:text-[#04532E] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nalinoneplus7@gmail.com"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[#04532E]/10 hover:border-[#04532E]/30 text-gray-400 hover:text-[#04532E] transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
               
                { name: "Certifications", href: "#certifications" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="text-gray-400 hover:text-[#04532E] transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} />
                <a
                  href="mailto:nalinoneplus7@gmail.com"
                  className="hover:text-[#04532E] transition-colors duration-300"
                >
                  nalinoneplus7@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Linkedin size={16} />
                <a
                  href="https://www.linkedin.com/in/nalin-mahala-796497196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#04532E] transition-colors duration-300"
                >
                  Nalin Mahala
                </a>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-sm text-gray-400">
                <span className="text-[#04532E] font-semibold">Available for:</span>
                <br />
                Full-time opportunities, Freelance projects, Consulting
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2025 Nalin Mahala. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and</span>
              <Code size={16} className="text-[#04532E]" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}