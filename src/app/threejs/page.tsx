"use client";
import { Badge } from "@/components/ui/badge";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
import Shaders from "@/components/smart-one/shaders";
import Image from "next/image";

const Projects = [
  {
    name: "Prep Cabin AI",
    link: "https://www.arclabs.space/dashboard/simulate-interview/page1", // replace with your live demo link
    image:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1754493608/j4u5hwkkmkv9zrgmiidz.png", // replace with your project screenshot
    github: "https://github.com/your-username/prep-cabin-ai", // replace with your repo link
    demo: "https://www.arclabs.space/dashboard/simulate-interview/page1", // same as live demo
    figmaFile: "https://www.figma.com/file/your-file-id/Prep-Cabin-AI", // optional
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "OpenAI API"],
    Description:
      "Prep Cabin AI is an AI-driven interview preparation platform where users upload their résumé, select a job title, and get an instant mock interview.",
  },

  {
    name: "Portal",
    link: "https://portal-p1.vercel.app/",
    image:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1753803937/hg9psmpgaepb7wqb1znh.png",
    github: "https://github.com/vansh-nagar/Portal-p1",
    demo: "https://portal-p1.vercel.app/",
    figmaFile: "",
    tech: [
      "Next.js",
      "TypeScript",
      "React Three Fiber",
      "three.js",
      "Tailwind CSS",
    ],
    Description:
      "A playful low-poly 3D scene featuring stylized props and lighting, designed to showcase visual storytelling and environment design.",
  },
  {
    name: "3D Portfolio",
    link: "https://3-d-laptop-sooty.vercel.app/",
    image:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1754411818/ht8p7rq77rnopdfumg6m.png",
    github: "https://github.com/vansh-nagar/3D-Laptop",
    demo: "https://3-d-laptop-sooty.vercel.app/",
    figmaFile: "",
    tech: [
      "React Three Fiber",
      "drei",
      "react-spring",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
    ],
    Description:
      "A sleek 3D laptop portfolio built with React Three Fiber, Spring, and Drei.",
  },
  {
    name: "Porsche experience center",
    link: "https://3-d-laptop-sooty.vercel.app/",
    image: "",
    github: "https://github.com/vansh-nagar/3D-Laptop",
    demo: "https://3-d-laptop-sooty.vercel.app/",
    figmaFile: "",
    tech: ["Three.js", "GLTF", "React Three Fiber", "TypeScript", "Next.js"],
    Description:
      "A sleek 3D laptop portfolio built with React Three Fiber, Spring, and Drei.",
  },
];

const page = () => {
  return (
    <div className=" flex  justify-center py-10 p-2 ">
      <Image
        src="/logo/leaf.svg"
        alt="Right decorative leaf"
        className="w-[11vw] max-sm:w-[25vw] absolute top-[15%] right-0 bg-transparent z-0 "
        style={{ transform: "rotateX(180deg)" }}
        width={120}
        height={120}
        priority={false}
      />
      <Image
        src="/logo/leaf.svg"
        alt="Left decorative leaf"
        className="w-[11vw] max-sm:w-[25vw] absolute left-0 bottom-[10%] max-sm:bottom-[-3%] bg-transparent z-0 max-sm:-z-10"
        style={{ transform: "rotateY(180deg)" }}
        width={120}
        height={120}
        priority={false}
      />

      <Shaders />

      <div className="   w-[95vw] sm:w-[50vw] z-50 ">
        <div className=" grid sm:grid-cols-2   grid-cols-1 gap-3  ">
          {Projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name + " project screenshot"}
                    className=" rounded-md  aspect-video  "
                    width={600}
                    height={338}
                    priority={false}
                  />
                )}
              </div>
              <div className="flex flex-col ">
                <div>
                  <div className=" block  font-semibold text-2xl  ">
                    {project.name} <br />{" "}
                  </div>{" "}
                </div>

                <div className="  text-sm text-muted-foreground  ">
                  {project.Description}
                </div>
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
              <Link href={project.demo} target="_blank">
                <RainbowButton
                  className=" rounded-md  "
                  variant="outline"
                  size={"sm"}
                >
                  Live Demo
                </RainbowButton>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
