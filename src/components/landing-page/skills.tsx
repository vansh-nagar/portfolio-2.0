import React from "react";
import { Badge } from "../ui/badge";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiFigma,
  SiGreensock,
  SiGit,
  SiDocker,
  SiThreedotjs,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600 dark:text-blue-400",
  },
  { name: "React", icon: SiReact, color: "text-sky-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-800 dark:text-gray-100",
  },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-700 dark:text-blue-400",
  },
  { name: "Prisma", icon: SiPrisma, color: "text-gray-800 dark:text-gray-100" },
  { name: "Figma", icon: SiFigma, color: "text-gray-800 dark:text-gray-100" },
  { name: "GSAP", icon: SiGreensock, color: "text-green-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-sky-500" },
  { name: "React Native", icon: SiReact, color: "text-sky-500" },
  {
    name: "React Three Fiber",
    icon: SiThreedotjs,
    color: "text-gray-900 dark:text-white",
  },
  {
    name: "Three.js",
    icon: SiThreedotjs,
    color: "text-gray-900 dark:text-white",
  },
];

const Skills = () => {
  return (
    <section className="my-5 w-full">
      <header className="font-bold text-xl">Skills</header>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map(({ name, icon: Icon, color }) => (
          <Badge
            key={name}
            className="rounded-sm shadow-inner border-dashed  flex items-center gap-2  cursor-pointer text-sm hover:scale-105 transition-transform"
            variant="outline"
          >
            <Icon className={`w-4 h-4 ${color}`} />
            {name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
