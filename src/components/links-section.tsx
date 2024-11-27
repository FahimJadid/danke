import Link from "next/link"

const links = [
  { title: "Email", href: "mailto:fahimaljadid@gmail.com" },
  { title: "X.com", href: "https://x.com/JadidFahim" },
  { title: "Github", href: "https://github.com/FahimJadid" },
  { title: "Linkedin", href: "https://www.linkedin.com/in/fahimaljadid" },
  { title: "Schedule a Chat", href: "https://cal.com/jadid" },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-[#39FF14] mr-2">#</span> social
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-[#39FF14] transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
