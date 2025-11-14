"use client";
import { useRouter } from "next/navigation";
import { ShinyButton } from "../ui/shiny-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectsComponent from "../smart-one/projects";
import { AIProjectsArr, ExtensionsArr, WebProjectsArr } from "@/data/projects";

const Projects = () => {
  const router = useRouter();
  return (
    <div className=" flex justify-center my-5">
      <div>
        <header className="font-bold text-xl">Projects</header>
        <Tabs defaultValue="web-projects" className="mt-2">
          <TabsList>
            <TabsTrigger value="web-projects">Web Apps</TabsTrigger>
            <TabsTrigger value="extensions">Extensions</TabsTrigger>
            <TabsTrigger value="ai-projects">AI Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="web-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {WebProjectsArr.slice(0, 4).map((project) => (
                <ProjectsComponent project={project} index={project.id} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="extensions">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {ExtensionsArr.slice(0, 4).map((project) => (
                <ProjectsComponent project={project} index={project.id} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="ai-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {AIProjectsArr.slice(0, 4).map((project) => (
                <ProjectsComponent project={project} index={project.id} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
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
