"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Badge } from "@/components/ui/badge";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

const Projects = [
  {
    name: "Prep Cabin AI",
    link: "https://www.arclabs.space/dashboard/simulate-interview/page1", // replace with your live demo link
    image:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1754493608/j4u5hwkkmkv9zrgmiidz.png", // replace with your project screenshot
    github: "https://github.com/your-username/prep-cabin-ai", // replace with your repo link
    demo: "https://www.arclabs.space/dashboard/simulate-interview/page1", // same as live demo
    figmaFile: "https://www.figma.com/file/your-file-id/Prep-Cabin-AI", // optional
    tech: ["Next.js", "TypeScript"],
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
    tech: ["Next.js", "TypeScript"],
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
    tech: ["Next.js", "TypeScript"],
    Description:
      "A sleek 3D laptop portfolio built with React Three Fiber, Spring, and Drei.",
  },
];

const page = () => {
  const Intro = () => {
    const { scene } = useGLTF("/models/introModel.glb");
    return <primitive object={scene} position={[-2, 0, 3]} />;
  };
  return (
    <div className=" flex  justify-center py-10 p-2 ">
      <img
        src="/logo/leaf.svg"
        alt=""
        className="w-[11vw] max-sm:w-[25vw] absolute top-[15%] right-0 bg-transparent z-0 "
        style={{ transform: "rotateX(180deg)" }}
      />
      <img
        src="/logo/leaf.svg"
        alt=""
        className="w-[11vw] max-sm:w-[25vw] absolute left-0 bottom-[10%] max-sm:bottom-[-3%] bg-transparent z-0 max-sm:-z-10"
        style={{ transform: "rotateY(180deg)" }}
      />

      <div className="   w-[95vw] sm:w-[50vw] ">
        <div className="  border rounded-xl  mb-3  ">
          <Canvas>
            {/* Add a light */}
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 10, 7.5]} intensity={1} />
            <OrbitControls />
            <Suspense fallback={null}>
              <Intro />
            </Suspense>
          </Canvas>
        </div>

        <div className=" grid sm:grid-cols-2   grid-cols-1 gap-3  ">
          {Projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div>
                <img
                  src={project.image}
                  alt=""
                  className=" rounded-md  aspect-video  "
                />
              </div>
              <div className="flex flex-col ">
                <div
                  className=" flex  justify-between
                "
                >
                  <div className=" block  font-semibold text-2xl  ">
                    {project.name} <br />{" "}
                  </div>{" "}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
