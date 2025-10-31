import React from "react";

import { BadgeCheck, BadgeX, Figma, Github, Link2 } from "lucide-react";
import Link from "next/link";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ProjectsArr } from "@/data/projects";

const Projects = () => {
  return (
    <div className="flex  justify-center">
      <div className="flex flex-col  mt-5 items-start w-[95vw] sm:w-[50vw] my-5 ">
        <div className="  grid  grid-cols-1 md:grid-cols-2  mt-2   gap-3  hover:caret-white ">
          {ProjectsArr.map((project, index) => (
            <div key={index} className=" flex  flex-col gap-2 ">
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
                      className=" rounded-md   object-cover aspect-video w-full"
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

              <div className="flex flex-col   max-sm:flex-wrap ">
                <div className=" flex justify-between items-center ">
                  <div className=" block  font-semibold text-2xl  ">
                    {project.name}
                  </div>{" "}
                  <div className=" text-nowrap text-xs">{project.timeLine}</div>
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
