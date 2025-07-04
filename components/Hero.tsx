"use client"

import { useEffect } from "react"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  useEffect(() => {
    const canvas = document.getElementById("webGraph") as HTMLCanvasElement
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
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Web graph background */}
      <canvas
        id="webGraph"
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0, opacity: 0.5 }}
      ></canvas>
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04532E]/5 via-transparent to-gray-900/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#04532E]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[#04532E] text-sm font-medium mb-6">
              👋 Welcome to my portfolio
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Nalin Mahala</h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-[#04532E] font-semibold mb-4 flex items-center justify-center lg:justify-start gap-2">
              Associate Software Developer @ Deloitte USI
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Turning ideas into scalable solutions through innovative software development and cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="/path/to/resume.pdf"
                download
                className="group relative bg-gradient-to-r from-[#04532E] to-[#04532E]/80 hover:from-[#04532E]/90 hover:to-[#04532E] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#04532E]/25 backdrop-blur-sm border border-[#04532E]/20"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/nalin-mahala-796497196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#04532E]/30 hover:bg-[#04532E]/10 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <Linkedin size={24} className="group-hover:text-[#04532E] transition-colors duration-300" />
                </a>
                <a
                  href="mailto:nalinoneplus7@gmail.com"
                  className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#04532E]/30 hover:bg-[#04532E]/10 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <Mail size={24} className="group-hover:text-[#04532E] transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl  transition-transform duration-500">
                <img
                  src="https://i.ibb.co/9x8VbjV/Nalin-Mahala-1.png"
                  alt="Nalin Mahala"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              {/* Subtle decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#04532E]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-500/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}