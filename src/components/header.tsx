import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="Fahim Al Jadid" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Earth
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          Software Developer
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
      "Once upon a time, I was a pharmacist—dispensing pills and explaining why you shouldn&apos;t mix them with energy drinks. Now, I&apos;m a full-stack developer, swapping prescriptions for code and diagnosing bugs instead of coughs. My journey from healthcare to tech? Equal parts curiosity, caffeine, and a love for solving puzzles. These days, I&apos;m all about building cool things, learning something new every day, and maybe still reminding people to hydrate. Let&apos;s create something amazing—and don&apos;t worry, I&apos;ve left the lab coat behind!"
      </p>
    </header>
  )
}
