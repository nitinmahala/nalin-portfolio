import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "An interactive dashboard for visualizing complex datasets with charts, filters, and real-time data processing capabilities.",
    technologies: ["Python", "Flask", "D3.js", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04532E]/3 via-transparent to-gray-900/5"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#04532E]/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#04532E]/10"
            >
              {/* Subtle border effect */}
              <div className="absolute inset-0 rounded-3xl bg-[#04532E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>

              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#04532E] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#04532E]/15 text-[#04532E] rounded-full text-sm font-medium border border-[#04532E]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="group/link flex items-center gap-2 text-gray-400 hover:text-[#04532E] transition-all duration-300 hover:scale-105"
                  >
                    <Github size={18} className="group-hover/link:" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="group/link flex items-center gap-2 text-gray-400 hover:text-[#04532E] transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={18} className="group-hover/link:" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
