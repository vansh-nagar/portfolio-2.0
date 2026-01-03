"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExtensionsArr,
  SkillForgeProjectsArr,
  WebProjectsArr,
} from "@/data/projects";
import ProjectsComponent from "@/components/smart-one/projects";
import { useRouter } from "next/navigation";
import MorphImageMaskButton from "../pixel-perfect/morph-image-button";
import { Button } from "../ui/button";
import { ShinyButton } from "../ui/shiny-button";

const ProjectsTabs = ({
  num1 = 0,
  num2 = undefined,
}: { num1?: number; num2?: number } = {}) => {
  const router = useRouter();

  return (
    <div className=" z-50">
      <header className="font-bold text-xl">Projects</header>

      <div
        className={`flex flex-col  mt-2  items-start w-[95vw] sm:w-[50vw] ${
          num2 ? "" : "mb-10"
        } `}
      >
        <Tabs defaultValue="web-projects" id="projects-tabs">
          <TabsList className="flex-wrap">
            <TabsTrigger value="web-projects">Web Apps</TabsTrigger>
            <TabsTrigger value="skill-forge">Skill Forge</TabsTrigger>
            <TabsTrigger value="extensions">Extensions</TabsTrigger>
            <TabsTrigger value="vibe-coded-projects">
              Prototype Studio
            </TabsTrigger>
          </TabsList>
          <TabsContent value="web-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {WebProjectsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent key={index} project={project} />
              ))}
            </div>{" "}
          </TabsContent>
          <TabsContent value="extensions">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {ExtensionsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent key={index} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="skill-forge">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {SkillForgeProjectsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent key={index} project={project} />
              ))}
            </div>
          </TabsContent>
          {/* <TabsContent value="ai-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {AIProjectsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent key={index} project={project} />
              ))}
            </div>
          </TabsContent> */}
          {/* <TabsContent value="iot-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {IoTProjectsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent key={index} project={project} />
              ))}
            </div>
          </TabsContent> */}
        </Tabs>

        {num2 && (
          <div className=" flex justify-center mt-10  w-full">
            <ShinyButton
              onClick={() => {
                router.push("/projects");
              }}
            >
              See More
            </ShinyButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsTabs;
