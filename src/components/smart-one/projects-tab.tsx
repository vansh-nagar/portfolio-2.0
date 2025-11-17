"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AIProjectsArr,
  ExtensionsArr,
  WebProjectsArr,
  IoTProjectsArr,
} from "@/data/projects";
import ProjectsComponent from "@/components/smart-one/projects";
import { ShinyButton } from "../ui/shiny-button";
import { useRouter } from "next/navigation";

const ProjectsTabs = ({
  num1 = 0,
  num2 = undefined,
}: { num1?: number; num2?: number } = {}) => {
  const router = useRouter();

  return (
    <div className=" z-50">
      <header className="font-bold text-xl">Projects</header>

      <div className="flex flex-col  mt-2 items-start w-[95vw] sm:w-[50vw] my-5  ">
        <Tabs defaultValue="web-projects">
          <TabsList>
            <TabsTrigger value="web-projects">Web Apps</TabsTrigger>
            <TabsTrigger value="ai-projects">AI Projects</TabsTrigger>
            <TabsTrigger value="iot-projects">IoT & Embedded</TabsTrigger>
            <TabsTrigger value="extensions">Extensions</TabsTrigger>
          </TabsList>
          <TabsContent value="web-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {WebProjectsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent project={project} index={index} />
              ))}
            </div>{" "}
          </TabsContent>
          <TabsContent value="extensions">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {ExtensionsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="ai-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {AIProjectsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="iot-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {IoTProjectsArr.slice(num1, num2).map((project, index) => (
                <ProjectsComponent project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {num2 && (
          <div className=" flex justify-center mt-10  w-full">
            <ShinyButton
              onClick={() => {
                router.push("/projects");
              }}
            >
              Show all projects
            </ShinyButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsTabs;
