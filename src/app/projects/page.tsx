import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WebProjectsArr } from "@/data/projects";
import ProjectsComponent from "@/components/smart-one/projects";
import Shaders from "@/components/smart-one/shaders";

const Projects = () => {
  return (
    <div className="flex  justify-center">
      <Shaders />
      <div className="flex flex-col  mt-5 items-start w-[95vw] sm:w-[50vw] my-5 z-50 ">
        <Tabs defaultValue="web-projects">
          <TabsList>
            <TabsTrigger value="web-projects">Web Apps</TabsTrigger>
            <TabsTrigger value="extensions">Extensions</TabsTrigger>
            <TabsTrigger value="ai-projects">AI Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="web-projects" className="mt-2">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {WebProjectsArr.map((project) => (
                <ProjectsComponent project={project} index={project.id} />
              ))}
            </div>{" "}
          </TabsContent>
          <TabsContent value="extensions" className="mt-2">
            no extensions yet
          </TabsContent>
          <TabsContent value="ai-projects" className="mt-2">
            no ai projects yet
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
