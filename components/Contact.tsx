"use client"

import { useEffect } from "react"
import { Mail, Linkedin, Phone, MapPin } from "lucide-react"

export default function Contact() {
  useEffect(() => {
    const canvas = document.getElementById("webGraphContact") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")!
    let animationFrameId: number

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Node class for web graph
    class Node {
      x: number
      y: number
      vx: number
      vy: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(4, 83, 46, 0.8)"
        ctx.fill()
      }
    }

    // Create nodes
    const nodes: Node[] = Array.from({ length: 50 }, () => new Node())

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "rgba(4, 83, 46, 0.4)"
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw nodes
      nodes.forEach(node => {
        node.update()
        node.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Web graph background */}
      <canvas
        id="webGraphContact"
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0, opacity: 0.5 }}
      ></canvas>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04532E]/2 via-transparent to-gray-900/3"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#04532E] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/3 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-12 leading-relaxed text-lg">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hi, feel free to reach out through any of the channels below!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="mailto:nalinoneplus7@gmail.com"
                className="group flex flex-col items-center gap-4 p-6 bg-white/3 rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#04532E]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="p-4 bg-[#04532E]/10 rounded-full border border-[#04532E]/20 group-hover:bg-[#04532E]/20 transition-colors duration-300">
                  <Mail size={24} className="text-[#04532E]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-300 group-hover:text-[#04532E] transition-colors duration-300">
                    nalinoneplus7@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nalin-mahala-796497196/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-6 bg-white/3 rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#04532E]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="p-4 bg-[#04532E]/10 rounded-full border border-[#04532E]/20 group-hover:bg-[#04532E]/20 transition-colors duration-300">
                  <Linkedin size={24} className="text-[#04532E]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                  <p className="text-gray-300 group-hover:text-[#04532E] transition-colors duration-300">
                    Nalin Mahala
                  </p>
                </div>
              </a>

              <a
                href="tel:+91-9876543210"
                className="group flex flex-col items-center gap-4 p-6 bg-white/3 rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#04532E]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="p-4 bg-[#04532E]/10 rounded-full border border-[#04532E]/20 group-hover:bg-[#04532E]/20 transition-colors duration-300">
                  <Phone size={24} className="text-[#04532E]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300 group-hover:text-[#04532E] transition-colors duration-300">
                    +91 8824324993
                  </p>
                </div>
              </a>

              <div className="group flex flex-col items-center gap-4 p-6 bg-white/3 rounded-xl border border-white/10">
                <div className="p-4 bg-[#04532E]/10 rounded-full border border-[#04532E]/20">
                  <MapPin size={24} className="text-[#04532E]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-300">Gurugram, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">Response time: Usually within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}