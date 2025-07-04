import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#04532E]/3 to-transparent"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-[#04532E] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#04532E]"></div>

          <div className="relative">
            {/* Timeline dot */}
            <div className="absolute left-6 top-6 w-4 h-4 bg-[#04532E] rounded-full border-4 border-black"></div>

            <div className="ml-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Associate Software Developer</h3>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>2023 - Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Deloitte USI</span>
                  </div>
                </div>
              </div>

              <ul className="text-gray-300 space-y-2">
                <li>
                  • Developed and maintained scalable web applications using modern JavaScript frameworks and backend
                  technologies
                </li>
                <li>
                  • Collaborated with cross-functional teams to deliver high-quality software solutions for enterprise
                  clients
                </li>
                <li>
                  • Implemented RESTful APIs and microservices architecture to improve system performance and
                  reliability
                </li>
                <li>• Participated in code reviews, testing, and deployment processes following agile methodologies</li>
                <li>• Mentored junior developers and contributed to technical documentation and best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
