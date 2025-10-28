import {
  BadgeCheck,
  BadgeX,
  CheckCircle,
  Figma,
  Github,
  Link2,
  Star,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { RainbowButton } from "../ui/rainbow-button";
import { Badge } from "../ui/badge";
import { SparklesText } from "../ui/sparkles-text";

const ProjectsArr = [
  {
    name: "Arc Labs",
    link: "https://www.arclabs.space/",
    image:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1761476312/Webinar_Keynote_Presentation_1_ebl6mk.png",
    github: "https://github.com/vansh-nagar/Arc-Labs",
    demo: "https://www.arclabs.space/",
    figmaFile: "",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "NextAuth",
      "Framer Motion",
      "Three.js",
      "Zustand",
      "Socket.io",
      "React Query",
      "Zod",
    ],
    timeLine: "Jan 2025 - Present",
    Description:
      "Land your dream job with AI-powered tools for resumes, interviews, jobs and more....",
    status: "In Progress",
  },
  {
    name: "Orcha",
    link: "https://next-brain-i432.vercel.app/",
    image: "",
    github: "https://github.com/vansh-nagar/LittleLemon",
    demo: "",
    figmaFile: "",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    timeLine: "Oct 2024 - present",
    Description:
      "A workflow automation platform I built to connect various apps and services for creating automated workflows, streamlining tasks.",
    status: "In Progress",
  },
  {
    name: "Zip",
    link: "https://example.com/zip",
    image: "",
    github: "https://github.com/vansh-nagar/Zip",
    demo: "",
    figmaFile: "",
    tech: ["Electron", "React", "TypeScript", "Tailwind CSS", "SQLite"],
    timeLine: "Feb 2024 - Present",
    Description:
      "Desktop productivity app, a modern tool that makes your life easy and gets your work actually done.",
    status: "Not Started",
  },
  {
    name: "UI Library",
    link: "https://example.com/ui-library",
    image: "",
    github: "https://github.com/vansh-nagar/ui-library",
    demo: "",
    figmaFile: "",
    tech: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    timeLine: "Feb 2024 - Present",
    Description:
      "A reusable UI component library built with React and TypeScript, providing customizable components for modern web applications.",
    status: "Not Started",
  },
  // {
  //   name: "NEXTBrain",
  //   link: "https://next-brain-i432.vercel.app/",
  //   image:
  //     "http://res.cloudinary.com/dz12pywzs/image/upload/v1751201965/scvwjaz25rwxtpazozvo.png",
  //   github: "https://github.com/vansh-nagar/NEXTBrain",
  //   demo: "https://next-brain-i432.vercel.app/",
  //   figmaFile: "",
  //   tech: ["Next.js", "TypeScript", "Tailwind CSS", "Pinecone", "OpenAI"],
  //   timeLine: "Jan 2024 - Present",
  //   Description:
  //     "A smart bookmarking app that lets you save and preview links, with AI-powered search using vector DB to optimize context and reduce token usage.",
  //   status: "Completed",
  // },
  // {
  //   name: "Little Lemon",
  //   link: "https://next-brain-i432.vercel.app/",
  //   image:
  //     "http://res.cloudinary.com/dz12pywzs/image/upload/v1751520950/o7dtqqrll3vadqbtbmes.png",
  //   github: "https://github.com/vansh-nagar/LittleLemon",
  //   demo: "",
  //   figmaFile: "",
  //   tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  //   timeLine: "Dec 2023 - Jan 2024",
  //   Description:
  //     "Little Lemon is a mobile food ordering app for a local restaurant. It lets users browse dishes, view details, and manage orders with ease.",
  //   status: "Completed",
  // },
];

const Projects = () => {
  return (
    <div className=" flex justify-center my-5 p-2">
      <div>
        <header className="font-bold text-xl">Projects</header>
        <div className="  grid  grid-cols-1 md:grid-cols-2  mt-2   gap-3  hover:caret-white ">
          {ProjectsArr.map((project, index) => (
            <div key={index} className=" flex  flex-col gap-2">
              {project.image ? (
                <div>
                  <a
                    className=" hover:cursor-crosshair"
                    href={project.link}
                    target="_blank"
                  >
                    <img
                      src={project.image}
                      alt=""
                      className=" rounded-md  aspect-video "
                    />
                  </a>
                </div>
              ) : (
                <div className=" w-full  aspect-video  bg-muted rounded-xl flex items-center justify-center ">
                  <SparklesText className=" text-2xl text-center px-4 ">
                    Coming Soon...
                  </SparklesText>
                </div>
              )}

              <div className="flex justify-between items-center  max-sm:flex-wrap ">
                <div className=" block  font-semibold text-2xl  ">
                  {project.name} <br />{" "}
                  <div className="text-xs font-normal flex items-center gap-1">
                    {project.status === "In Progress" ||
                    project.status === "Completed" ? (
                      <BadgeCheck
                        size={16}
                        strokeWidth={1}
                        className=" text-green-500"
                      />
                    ) : (
                      <BadgeX
                        size={16}
                        strokeWidth={1}
                        className="text-destructive"
                      />
                    )}{" "}
                    {project.status}...
                  </div>
                </div>{" "}
                <div className="text-sm text-nowrap">Jan 2024 - Jan 2024</div>
              </div>

              <div className="  text-sm text-muted-foreground  ">
                {project.Description}
              </div>

              <div className="  flex gap-1 flex-wrap ">
                {project.tech.map((techItem, techIndex) => (
                  <Badge
                    className=" rounded-sm border-dashed border-acfo "
                    variant={"outline"}
                    key={techIndex}
                  >
                    {techItem}
                  </Badge>
                ))}
              </div>

              <div className="flex  gap-2  mt-2  max-sm:flex-wrap">
                {project.figmaFile && (
                  <Link href={project.figmaFile} target="_blank">
                    <Button
                      className="rounded-md"
                      variant="outline"
                      size={"sm"}
                    >
                      <Figma />
                      Figma File
                    </Button>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <Button size={"sm"}>
                      <Github />
                      GitHub
                    </Button>
                  </Link>
                )}
                <Link href={project.demo} target="_blank">
                  <RainbowButton
                    className=" rounded-md  "
                    variant="outline"
                    size={"sm"}
                  >
                    <Link2 />
                    Live Demo
                  </RainbowButton>
                </Link>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Projects;
