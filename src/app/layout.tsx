import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
  weight: ['400', '700'],
})


export const metadata: Metadata = {
  metadataBase: new URL("https://jadid.vercel.app/"),
  title: {
    default: "Fahim Al Jadid",
    template: "%j | Fahim Al Jadid",
  },
  description: "Full-stack Developer, and a Pharmacist.",
  openGraph: {
    title: "Fahim Al Jadid",
    description: "Full-stack Developer, and a Pharmacist.",
    url: "https://jadid.vercel.app/",
    siteName: "Fahim Al Jadid",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Fahim Al Jadid",
    card: "summary_large_image",
    creator: "@JadidFahim",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased min-h-screen font-lexend relative`}
      >
        {/* Grid background */}
        <div className="fixed inset-0 dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}