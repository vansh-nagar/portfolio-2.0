import Image from "next/image";
import { BadgeCheck, BadgeX, Figma, Github, Link2 } from "lucide-react";
import Link from "next/link";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";

const ProjectsComponent = ({ project }: { project: any }) => {
  return (
    <div className=" flex  flex-col justify-between gap-2 ">
      <div className=" flex flex-col gap-2">
        {project.image ? (
          <div>
            <a
              className=" hover:cursor-crosshair"
              href={project.link}
              target="_blank"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 1024px) 95vw, 50vw"
                />
              </div>
            </a>
          </div>
        ) : (
          <div className=" w-full  aspect-video  bg-muted rounded-md flex items-center justify-center ">
            <SparklesText className=" text-2xl text-center px-4 ">
              Coming Soon...
            </SparklesText>
          </div>
        )}
        <div className="flex flex-col   max-sm:flex-wrap ">
          <div className=" flex justify-between items-center ">
            <div className=" block  font-semibold text-lg line-clamp-1  truncate  ">
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
        <div className="  text-sm text-muted-foreground   ">
          {project.Description}
        </div>
        <div className="  flex gap-1 flex-wrap ">
          {project.tech.map((techItem: string, techIndex: number) => (
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
            <Button className="rounded-md" variant="outline" size={"sm"}>
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
  );
};

export default ProjectsComponent;
