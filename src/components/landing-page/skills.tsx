import React from "react";
import { Badge } from "../ui/badge";
const skills = [
  // 💻 Core Development
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",

  // 🗄️ Database & APIs
  "MongoDB",
  "PostgreSQL",
  "Prisma",

  "Figma",
  "GSAP",

  // ☁️ DevOps & Deployment
  "Git",
  "Docker",

  "React Native",
  "React Three Fiber",
  "Three.js",
];

const Skills = () => {
  return (
    <>
      {" "}
      <section className=" my-5  w-full ">
        <header className="font-bold text-xl">Skills</header>

        <div className=" flex flex-wrap gap-1 mt-2">
          {skills.map((techItem, techIndex) => (
            <Badge
              className=" rounded-sm border-dashed mb-1 "
              variant={"outline"}
              key={techIndex}
            >
              {techItem}
            </Badge>
          ))}
        </div>
      </section>{" "}
    </>
  );
};

export default Skills;
