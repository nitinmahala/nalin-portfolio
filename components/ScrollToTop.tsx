"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-[#04532E] hover:bg-[#04532E]/80 text-white rounded-full shadow-2xl hover:shadow-[#04532E]/25 transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="group-hover:animate-bounce" />
        </button>
      )}
    </>
  )
}
