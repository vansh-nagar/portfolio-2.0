import Image from "next/image";
import { BadgeCheck, BadgeX, Figma, Github } from "lucide-react";
import Link from "next/link";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";

const ProjectsComponent = ({ project }: { project: any }) => {
  return (
    <div className=" flex  flex-col justify-between gap-2 ">
      <div className=" flex flex-col gap-2">
        {/* Media display logic: image+video (hover), video only, image only, or placeholder */}
        {project.image && project.video ? (
          <div className="relative w-full aspect-video group">
            {/* Image shown by default */}
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              className="rounded-md object-cover border border-dashed transition-opacity duration-300 group-hover:opacity-0"
              sizes="(max-width: 1024px) 95vw, 50vw"
            />
            {/* Video shown on hover, overlays image */}
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-md object-cover border border-dashed w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ) : project.video ? (
          <div className="relative w-full aspect-video">
            <video
              src={project.video}
              controls
              className="rounded-md object-cover border border-dashed w-full h-full"
            />
          </div>
        ) : project.image ? (
          <div className="relative w-full aspect-video">
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              className="rounded-md object-cover border border-dashed"
              sizes="(max-width: 1024px) 95vw, 50vw"
            />
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
            <Button size={"sm"} className="text-xs">
              <Github className=" size-4" />
              GitHub
            </Button>
          </Link>
        )}
        {project.demo && (
          <Link href={project.demo} target="_blank">
            <RainbowButton
              className=" rounded-md text-xs "
              variant="outline"
              size={"sm"}
            >
              Live Demo
            </RainbowButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectsComponent;
