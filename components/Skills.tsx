"use client"

import { useEffect } from "react"

const skills = [
  "Angular Js",
  "ASP.NET",
  "JavaScript",
  "ASP.NET MVC",
  ".NET core",
  "KnockoutJS",
  "C#",
  "SQL",
  "HTML",
  "CSS",
  "Azure",
  "Cloud Security",
  "Git",
  "GitHub",
  "Cloud Computing",
  "MVVM",
  "Virtualization",
  "Testing",
  "Microsoft SQL Server",
]

export default function Skills() {
  useEffect(() => {
    const canvas = document.getElementById("webGraphSkills") as HTMLCanvasElement
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
    <section id="skills" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Web graph background */}
      <canvas
        id="webGraphSkills"
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0, opacity: 0.5 }}
      ></canvas>
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04532E]/5 via-transparent to-gray-900/10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#04532E]/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-500/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group relative bg-white/5 backdrop-blur-lg border border-transparent rounded-2xl px-4 py-6 text-center transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl -z-10" style={{
                background: 'linear-gradient(to right, #D1D5DB, #04532E)',
                padding: '1px',
                borderRadius: '1rem',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}>
                <div className="w-full h-full bg-black rounded-2xl"></div>
              </div>

              <span className="relative text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}