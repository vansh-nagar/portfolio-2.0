import { Figma, Github, Link2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { RainbowButton } from "../ui/rainbow-button";
import { Badge } from "../ui/badge";
import { SparklesText } from "../ui/sparkles-text";

const ProjectsArr = [
  {
    name: "Arc Labs",
    link: "https://arclabs.space/",
    image:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1751201965/scvwjaz25rwxtpazozvo.png",
    github: "https://github.com/vansh-nagar/NEXTBrain",
    demo: "https://next-brain-i432.vercel.app/",
    figmaFile: "",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Pinecone", "OpenAI"],
    timeLine: "Jan 2024 - Present",
    Description:
      "A smart bookmarking app that lets you save and preview links, with AI-powered search using vector DB to optimize context and reduce token usage.",
  },
  {
    name: "NEXTBrain",
    link: "https://next-brain-i432.vercel.app/",
    image:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1751201965/scvwjaz25rwxtpazozvo.png",
    github: "https://github.com/vansh-nagar/NEXTBrain",
    demo: "https://next-brain-i432.vercel.app/",
    figmaFile: "",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Pinecone", "OpenAI"],
    timeLine: "Jan 2024 - Present",
    Description:
      "A smart bookmarking app that lets you save and preview links, with AI-powered search using vector DB to optimize context and reduce token usage.",
  },
  {
    name: "Little Lemon",
    link: "https://next-brain-i432.vercel.app/",
    image:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1751520950/o7dtqqrll3vadqbtbmes.png",
    github: "https://github.com/vansh-nagar/LittleLemon",
    demo: "",
    figmaFile: "",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Pinecone", "OpenAI"],
    timeLine: "Dec 2023 - Jan 2024",
    Description:
      "Little Lemon is a mobile food ordering app for a local restaurant. It lets users browse dishes, view details, and manage orders with ease.",
  },
];

const Projects = () => {
  return (
    <div className=" flex justify-center mb-20">
      <div className="  grid  grid-cols-2 w-[80vw]   gap-[10vh] max-sm:gap-[6vw] hover:caret-white font-Montserrat -mt-[18vh] max-sm:m-0 ">
        {ProjectsArr.map((project, index) => (
          <div key={index} className=" gap-4 ">
            <div>
              <a
                className=" hover:cursor-crosshair"
                href={project.link}
                target="_blank"
              >
                <img src={project.image} alt="" className=" rounded-xl  " />
              </a>
            </div>

            <div className="flex justify-between items-center mt-4 max-sm:flex-wrap ">
              <div className=" block  font-semibold text-2xl  ">
                {project.name}{" "}
              </div>{" "}
              <div className="flex  gap-2 items-center max-sm:mt-1   max-sm:flex-wrap">
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
                    className=" rounded-md "
                    variant="outline"
                    size={"sm"}
                  >
                    <Link2 />
                    Live Demo
                  </RainbowButton>
                </Link>
              </div>
            </div>

            <div className="  text-sm text-muted-foreground text-justify mt-3">
              {project.Description}
            </div>

            <div className=" mt-4 flex gap-2 ">
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
      </div>{" "}
    </div>
  );
};

export default Projects;
