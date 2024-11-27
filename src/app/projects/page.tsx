import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "dash-smart-payment",
    description: "A modern payment solution built as a monorepo, providing seamless payment experiences for customers and merchants with real-time bank webhook functionality.",
    role: "creator",
    period: "full-stack application",
    achievements: [
      "customer application for end-users to manage accounts and make payments",
      "merchant application for businesses to accept payments and manage accounts",
      "bank webhook service for processing real-time banking events",
      "shared UI components for consistent design across applications",
      "authentication using NextAuth.js",
      "responsive design with Tailwind CSS"
    ],

    technologies: [
      "typeScript",
      "next.js 15",
      "tailwind CSS",
      "prisma ORM",
      "recoil",
      "nextAuth.js",
      "postgreSQL",
      "turborepo",
      "express.js",
    ],
    href: "https://github.com/FahimJadid/dash",
  },
  {
    title: "surge blog",
    description: "a full-stack application designed for creating, managing, and sharing blog posts. It features a robust backend built with modern web technologies for scalability and performance and a user-friendly frontend offering a responsive and intuitive interface.",
    role: "creator",
    period: "full-stack application",
    achievements: [ 
      "Developed a customer application for end-users to manage accounts and interact with blog posts.",
      "Implemented a role-based access system for contributors and administrators to manage blog content.",
      "Designed a secure authentication flow using JWT for robust session management.",
      "Built a feature-rich blog management system, including create, edit, delete, and bookmark functionality.",
      "Integrated real-time content updates and dynamic routing for seamless user interaction.",
      "Deployed a scalable backend leveraging Cloudflare Workers for serverless infrastructure.",
    ],
    
    technologies: [
      "hono",
      "prisma",
      "typescript",
      "prisma ORM",
      "cloudfare workers",
      "react",
      "react-router-dom",
      "axios",
      "shadcn",
    ],
    href: "https://github.com/FahimJadid/surge-blog",
  },
  {
    title: "video streaming",
    description: "a robust backend service for video streaming applications, enabling user interactions and seamless media delivery.",
    role: "creator",
    period: "backend application",
    achievements: [
      "implemented user authentication with bcrypt for secure password management",
      "designed video upload and streaming functionality using Cloudinary for efficient delivery",
      "developed interactive features like playlists, likes, comments, and subscriptions",
      "enhanced user experience with a personalized dashboard for video management"
    ],
    technologies: [
      "node.js",
      "express.js",
      "mongoDB",
      "mongoose",
      "bcrypt",
      "cloudinary",
      "jwt",
      "multer"
    ],
    href: "https://github.com/FahimJadid/video-stream-backend",
  },
  {
    title: "e-Commerce application",
    description: "a comprehensive backend for e-commerce platforms, focusing on security, scalability, and advanced features.",
    role: "creator",
    period: "backend application",
    achievements: [
      "built secure user authentication with role-based access control",
      "developed advanced product management features like filtering, sorting, and pagination",
      "implemented cart, order, and coupon functionalities for streamlined shopping experiences",
      "enhanced user interaction through wishlist, rating, and review systems"
    ],
    technologies: [
      "bode.js",
      "express.js",
      "mongoDB",
      "bcrypt",
      "jwt",
      "cloudinary",
      "multer",
      "nodemailer",
      "sharp"
    ],
    href: "https://github.com/FahimJadid/e-commerce-backend",
  },
  {
    title: "bkash payment gateway system",
    description: "a backend service for Bkash integration to handle checkout processes via a URL-based system.",
    role: "creator",
    period: "backend application",
    achievements: [
      "implemented token generation for secure transactions",
      "developed endpoints for creating and executing payments",
      "streamlined the integration for seamless payment processing"
    ],
    technologies: ["node.js", "express.js", "bkash API"],
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
        url: "https://fahimjadid.vercel.app/og/home?title=projects",
      },
    ],
  },
}
