import Shaders from "@/components/smart-one/shaders";
import ProjectsTabs from "@/components/smart-one/projects-tab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Vansh Nagar - Full Stack Developer",
  description:
    "Explore Vansh Nagar's portfolio of web development projects. View full stack applications built with Next.js, React, TypeScript, Node.js, and more. MERN stack projects, SaaS applications, and UI/UX designs.",
  keywords: [
    "Vansh Nagar projects",
    "Vansh portfolio projects",
    "Next.js projects",
    "React projects",
    "Full stack projects",
    "MERN stack projects",
    "Web development portfolio",
    "TypeScript projects",
    "Node.js projects",
    "Vansh developer projects",
  ],
  alternates: {
    canonical: "https://vanshnagar.me/projects",
  },
  openGraph: {
    title: "Projects | Vansh Nagar - Full Stack Developer",
    description:
      "Explore my portfolio of web development projects built with modern technologies like Next.js, React, TypeScript, and Node.js.",
    url: "https://vanshnagar.me/projects",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
        width: 1200,
        height: 630,
        alt: "Vansh Nagar Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Vansh Nagar",
    description: "View my full stack development projects and applications.",
    images: [
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
    ],
  },
};

const Projects = () => {
  return (
    <div className="flex  justify-center pt-5">
      <Shaders />
      <ProjectsTabs num1={0} num2={undefined} />
    </div>
  );
};

export default Projects;
