import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "dash-smart-payment",
    description: "A modern payment solution built as a monorepo, providing seamless payment experiences for customers and merchants with real-time bank webhook functionality.",
    role: "creator",
    period: "June 2022 - Present",
    achievements: [
      "Customer application for end-users to manage accounts and make payments",
      "Merchant application for businesses to accept payments and manage accounts",
      "Bank webhook service for processing real-time banking events",
      "Shared UI components for consistent design across applications",
      "Authentication using NextAuth.js",
      "Responsive design with Tailwind CSS"
    ],
  
    technologies: [
    "TypeScript",
    "Next.js 15",
    "Tailwind CSS",
    "Prisma ORM",
    "Recoil",
    "NextAuth.js",
    "PostgreSQL",
    "Turborepo",
    "Express.js",
  ],
  href: "https://github.com/FahimJadid/dash",
  },
  {
    title: "Video Streaming Backend",
    description: "A robust backend service for video streaming applications, enabling user interactions and seamless media delivery.",
    role: "creator",
    achievements: [
      "Implemented user authentication with bcrypt for secure password management",
      "Designed video upload and streaming functionality using Cloudinary for efficient delivery",
      "Developed interactive features like playlists, likes, comments, and subscriptions",
      "Enhanced user experience with a personalized dashboard for video management"
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "bcrypt",
      "Cloudinary",
      "JWT",
      "multer"
    ],
    href: "https://github.com/FahimJadid/video-stream-backend",
  },
  {
    title: "E-Commerce Application Backend",
    description: "A comprehensive backend for e-commerce platforms, focusing on security, scalability, and advanced features.",
    role: "developer",
    achievements: [
      "Built secure user authentication with role-based access control",
      "Developed advanced product management features like filtering, sorting, and pagination",
      "Implemented cart, order, and coupon functionalities for streamlined shopping experiences",
      "Enhanced user interaction through wishlist, rating, and review systems"
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "bcrypt",
      "JWT",
      "Cloudinary",
      "multer",
      "nodemailer",
      "sharp"
    ],
    href: "https://github.com/FahimJadid/e-commerce-backend",
  },
  {
    title: "Bkash Payment Gateway System",
    description: "A backend service for Bkash integration to handle checkout processes via a URL-based system.",
    role: "developer",
    achievements: [
      "Implemented token generation for secure transactions",
      "Developed endpoints for creating and executing payments",
      "Streamlined the integration for seamless payment processing"
    ],
    technologies: ["Node.js", "Express.js", "Bkash API"],
    href: "https://github.com/FahimJadid/bkash-payment-system-backend",
  }
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-[#39FF14] mr-2">#</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are a few exciting projects that I've had the pleasure of working on. I am passionate about creating tools that simplify the lives of developers and enjoy delving into the world of cutting-edge technologies while doing so.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://jadid.vercel.app/og/home?title=projects",
      },
    ],
  },
}
