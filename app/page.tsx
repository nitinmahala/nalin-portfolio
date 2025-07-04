import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Certifications from "@/components/Certifications"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={`${inter.className} bg-black text-gray-200 min-h-screen relative overflow-x-hidden`}>
      {/* Subtle global background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#04532E]/10 via-black to-black pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-800/5 via-transparent to-transparent pointer-events-none"></div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
