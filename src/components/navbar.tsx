"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Nova_Script, Anek_Bangla } from "next/font/google"

const nova_script = Nova_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nova-script",
  weight: ['400'],
})


const anek_bangla = Anek_Bangla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anek-bangla",
  weight: ['500'],
})

export function Navbar() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Don't trigger if any input elements are focused or if event target is an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return
      }

      switch (event.key.toLowerCase()) {
        case "j":
          router.push("/")
          break
        case "f":
          router.push("/blog")
          break
        case "p":
          router.push("/projects")
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [router])

  return (
    <nav className={`${nova_script.variable} ${anek_bangla.variable} flex items-center justify-between mb-12 text-sm`}>
      <div className="flex space-x-4">
        <Link
          href="/"
          className="font-anek-bangla hover:text-[#39FF14] transition-colors duration-200 font-variable"
        >
          🟢 জাদিদ
        </Link>
        <Link
          href="/blog"
          prefetch={true}
          className="font-nova-script hover:text-[#39FF14] transition-colors duration-200 font-variable"
        >
          <span className="text-[#39FF14] mr-1">[F]</span>Feed
        </Link>
        <Link
          href="/projects"
          className="font-nova-script hover:text-[#39FF14] transition-colors duration-200 font-variable"
        >
          <span className="text-[#39FF14] mr-1">[P]</span>Projects
          
        </Link>
      </div>
    </nav>
  )
}
