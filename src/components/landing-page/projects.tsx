"use client";
import { BadgeCheck, BadgeX, Figma, Github, Link2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { RainbowButton } from "../ui/rainbow-button";
import { Badge } from "../ui/badge";
import { SparklesText } from "../ui/sparkles-text";
import { useRouter } from "next/navigation";
import { ProjectsArr } from "@/data/projects";
import { ShinyButton } from "../ui/shiny-button";

const Projects = () => {
  const router = useRouter();
  return (
    <div className=" flex justify-center my-5">
      <div>
        <header className="font-bold text-xl">Projects</header>
        <div className="  grid  grid-cols-1 lg:grid-cols-2  mt-2   gap-3  hover:caret-white ">
          {ProjectsArr.slice(0, 4).map((project, index) => (
            <div key={index} className=" flex  flex-col justify-between gap-2 ">
              <div className=" flex flex-col gap-2">
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
                        className=" rounded-md shadow   object-cover aspect-video w-full"
                      />
                    </a>
                  </div>
                ) : (
                  <div className=" w-full shadow  aspect-video  bg-muted rounded-md flex items-center justify-center ">
                    <SparklesText className=" text-2xl text-center px-4 ">
                      Coming Soon...
                    </SparklesText>
                  </div>
                )}
                <div className="flex flex-col   max-sm:flex-wrap ">
                  <div className=" flex justify-between items-center ">
                    <div className=" block  font-semibold text-lg  ">
                      {project.name}
                    </div>{" "}
                    <div className=" text-nowrap text-xs">
                      {project.timeLine}
                    </div>
                  </div>
                  <div>
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
                </div>
                <div className="  text-sm text-muted-foreground line-clamp-2  ">
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
                </div>{" "}
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
                {project.demo && (
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
                )}
              </div>
            </div>
          ))}
        </div>{" "}
        <div className=" flex justify-center mt-10">
          <ShinyButton
            onClick={() => {
              router.push("/projects");
            }}
          >
            Show all projects
          </ShinyButton>
        </div>
      </div>
    </div>
  );
};

export default Projects;
