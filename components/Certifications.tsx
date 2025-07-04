"use client"

import { useState, useEffect } from "react"
import { Award, Calendar, ExternalLink, FileText } from "lucide-react"

const certifications = [
  {
    title: "Master KnockoutJS : Knockout JS - JavaScript MVVM",
    issuer: "Udemy",
    date: "Dec-2024",
    credentialId: "",
    image: "/placeholder.svg?height=80&width=80",
    link: "https://www.udemy.com/certificate/UC-19c8a3c2-b59b-4b43-b881-a7f878fe2874/",
    type: "certificate"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Sept-2024",
    credentialId: "42913328DDBEDA18",
    image: "/placeholder.svg?height=80&width=80",
    link: "#",
    type: "certificate"
  },
  {
    title: "Microsoft SQL for Beginners",
    issuer: "Udemy",
    date: "Dec-2024",
    credentialId: "",
    image: "/placeholder.svg?height=80&width=80",
    link: "https://www.udemy.com/certificate/UC-b549a181-019a-4f70-ba8e-b0826ca4a359/",
    type: "certificate"
  },
  {
    title: "Secure Coding - Secure application development",
    issuer: "Udemy",
    date: "May-2024",
    credentialId: "",
    image: "/placeholder.svg?height=80&width=80",
    link: "https://www.udemy.com/certificate/UC-e24745b3-68d4-4ec6-8730-8165e19c1b83/",
    type: "certificate"
  },
  {
    title: "C# Basics for Beginners: Learn C# Fundamentals by Coding",
    issuer: "Udemy",
    date: "Nov-2024",
    credentialId: "",
    image: "/placeholder.svg?height=80&width=80",
    link: "https://www.udemy.com/certificate/UC-22eb0f9e-07ae-472b-ac6a-07660673fead/",
    type: "certificate"
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Coursera",
    date: "Aug-2023",
    credentialId: "C3S3JWADSSPG",
    image: "/placeholder.svg?height=80&width=80",
    link: "https://www.coursera.org/account/accomplishments/verify/C3S3JWADSSPG",
    type: "certificate"
  },
  {
    title: "Google Technical Support Fundamentals",
    issuer: "Coursera",
    date: "Jan-2021",
    credentialId: "X2NF349YVLB4",
    image: "/placeholder.svg?height=80&width=80",
    link: "https://www.coursera.org/account/accomplishments/certificate/X2NF349YVLB4",
    type: "certificate"
  },
  {
    title: "Programming Foundations with JavaScript, HTML and CSS",
    issuer: "Coursera",
    date: "Sep-2020",
    credentialId: "TKXYUCTJJLYN",
    image: "/placeholder.svg?height=80&width=80",
    link: "https://www.coursera.org/account/accomplishments/certificate/TKXYUCTJJLYN",
    type: "certificate"
  },
  {
    title: "Spot Award",
    issuer: "Deloitte",
    date: "Jan-2025",
    credentialId: "",
    image: "",
    link: "#",
    type: "achievement"
  },
  {
    title: "Army Welfare Education Society - Merit Certificate",
    issuer: "Education Scholarship Scheme for Army Personnel (ESSA)",
    date: "Dec-2021",
    credentialId: "",
    image: "/placeholder.svg?height=80&width=80",
    link: "",
    type: "achievement"
  },
]

export default function Certifications() {
  const [filter, setFilter] = useState("certificates")

  useEffect(() => {
    const canvas = document.getElementById("webGraphCertifications") as HTMLCanvasElement
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

  const filteredItems = filter === "achievements"
    ? certifications.filter(cert => cert.type === "achievement")
    : certifications.filter(cert => cert.type === "certificate")

  return (
    <section id="certifications" className="py-20 px-6 relative overflow-hidden">
      {/* Web graph background */}
      <canvas
        id="webGraphCertifications"
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0, opacity: 0.5 }}
      ></canvas>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04532E]/3 via-transparent to-gray-900/5"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications & Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognized certifications and achievements reflecting my expertise in cloud technologies, programming, and innovative digital solutions.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setFilter("certificates")}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                filter === "certificates"
                  ? "bg-[#04532E] text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => setFilter("achievements")}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                filter === "achievements"
                  ? "bg-[#04532E] text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              Achievements
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredItems.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#04532E]/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#04532E]/10"
            >
              {/* Subtle border effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#04532E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#04532E]/10 rounded-xl flex items-center justify-center border border-[#04532E]/20">
                    {cert.type === "certificate" ? (
                      <FileText className="text-[#04532E]" size={24} />
                    ) : (
                      <Award className="text-[#04532E]" size={24} />
                    )}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#04532E] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 font-medium mb-2">{cert.issuer}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    {cert.credentialId && <span className="text-xs">ID: {cert.credentialId}</span>}
                  </div>

                  {cert.link && cert.link !== "#" && (
                    <a
                      href={cert.link}
                      className="inline-flex items-center gap-2 text-[#04532E] hover:text-white text-sm font-medium transition-colors duration-300"
                    >
                      <span>View Credential</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}