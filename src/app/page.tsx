import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "jatri",
    role: "backend developer intern",
    period: "june 2023 - aug 2023",
    description:
      "worked on the backend of a ticketing application. Implemented APIs and payment gateway integration.",
    href: "https://jatri.co",
  },
  {
    title: "100Devs",
    role: "full-stack developer",
    period: "sep 2022 - may 2023",
    description:
      "worked on a team of 5 to build a full-stack app for a local business. Helped move their offline business online by implementing features like user authentication, business analytics, and real-time chat.",
    href: "https://100devs.org",
  },
]

const projectItems = [
  {
    title: "dash-smart-payment",
    role: "creator",
    description:
      "dash is a modern payment solution built as a monorepo using Turborepo. This application aims to provide a seamless payment experience for both customers and merchants, with integrated bank webhook functionality for real-time transaction processing.",
    href: "https://github.com/FahimJadid/dash",
  },
  {
    title: "video-stream-backend",
    role: "creator",
    description: "a backend service for a video streaming app, handling user authentication, video uploads, streaming, and enhanced user interaction features.",
    href: "https://github.com/FahimJadid/video-stream-backend",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <BlogSection />
      <LinksSection />
    </>
  )
}
