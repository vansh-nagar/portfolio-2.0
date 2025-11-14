"use client";
import { useRouter } from "next/navigation";
import { ShinyButton } from "../ui/shiny-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectsComponent from "../smart-one/projects";
import { WebProjectsArr } from "@/data/projects";

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
          <TabsContent value="web-projects" className="mt-2">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {WebProjectsArr.slice(0, 4).map((project) => (
                <ProjectsComponent project={project} index={project.id} />
              ))}
            </div>{" "}
          </TabsContent>
          <TabsContent value="extensions" className="mt-2 w-full ">
            extension
          </TabsContent>
          <TabsContent value="ai-projects" className="mt-2 w-full ">
            ai-projects
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
