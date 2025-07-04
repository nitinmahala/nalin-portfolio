import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nalin Mahala - Associate Software Developer",
  description:
    "Portfolio of Nalin Mahala, Associate Software Developer at Deloitte USI. Specializing in full-stack development and scalable solutions.",
  keywords: "software developer, full-stack developer, React, Next.js, Java, Python, Deloitte",
  authors: [{ name: "Nalin Mahala" }],
  openGraph: {
    title: "Nalin Mahala - Associate Software Developer",
    description: "Portfolio of Nalin Mahala, Associate Software Developer at Deloitte USI",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
