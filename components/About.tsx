export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#04532E]/3 to-transparent"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#04532E] mx-auto rounded-full"></div>
        </div>

        <div className="relative bg-white/5 backdrop-blur-lg border border-transparent rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#04532E]/10">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-3xl -z-10" style={{
            background: 'linear-gradient(to right, #D1D5DB, #04532E)',
            padding: '2px',
            borderRadius: '1.5rem',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}>
            <div className="w-full h-full bg-gray-900 rounded-3xl"></div>
          </div>

          <div className="text-lg text-gray-300 leading-relaxed space-y-6">
            <p className="hover:text-white transition-colors duration-300">
              I'm a passionate Associate Software Developer at Deloitte USI with a strong foundation in full-stack
              development and a keen eye for creating efficient, scalable solutions. My journey in software development
              has been driven by curiosity and a commitment to continuous learning.
            </p>
            <p className="hover:text-white transition-colors duration-300">
              With expertise spanning multiple programming languages and frameworks, I thrive on tackling complex
              challenges and transforming innovative ideas into robust applications. I believe in writing clean,
              maintainable code and staying current with emerging technologies.
            </p>
            <p className="hover:text-white transition-colors duration-300">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing
              knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}