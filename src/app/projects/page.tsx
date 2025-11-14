import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AIProjectsArr,
  ExtensionsArr,
  WebProjectsArr,
  IoTProjectsArr,
} from "@/data/projects";
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
            <TabsTrigger value="iot-projects">IoT & Embedded</TabsTrigger>
          </TabsList>
          <TabsContent value="web-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {WebProjectsArr.map((project) => (
                <ProjectsComponent project={project} index={project.id} />
              ))}
            </div>{" "}
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
          <TabsContent value="iot-projects">
            <div className="  grid  grid-cols-1 lg:grid-cols-2    gap-3  hover:caret-white ">
              {IoTProjectsArr.map((project) => (
                <ProjectsComponent project={project} index={project.id} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
