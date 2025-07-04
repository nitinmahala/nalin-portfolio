"use client"

import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Army Institute of Technology (AIT)",
    dates: "2019 - 2023",
    description: "Graduated with honors, focusing on software engineering, data structures, algorithms, and full-stack development. Participated in various coding competitions and hackathons.",
  },
  {
    degree: "Senior Secondary (12th Grade), CBSE",
    institution: "Kendriya Vidyalaya Jhunjhunu",
    dates: "2018",
    description: "Completed with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-transparent relative overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .timeline-item {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04532E]/2 via-transparent to-gray-900/3"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#04532E]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-[#04532E] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline (progress bar) */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
            style={{
              background: 'linear-gradient(to bottom, #D1D5DB, #04532E)',
            }}
          ></div>

          {education.map((edu, index) => (
            <div
              key={index}
              className={`timeline-item relative mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white/3 backdrop-blur-lg border border-transparent rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
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
                    <div className="w-full h-full bg-transparent rounded-2xl"></div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#04532E]/10 rounded-xl border border-[#04532E]/20">
                      <GraduationCap className="text-[#04532E]" size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <div className="flex items-center gap-1 text-gray-400">
                          <Calendar size={16} />
                          <span>{edu.dates}</span>
                        </div>
                      </div>

                      <p className="text-[#04532E] font-semibold mb-2">{edu.institution}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#04532E] rounded-full border-2 border-white/20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}