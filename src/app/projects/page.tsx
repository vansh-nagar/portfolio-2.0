import Shaders from "@/components/smart-one/shaders";
import ProjectsTabs from "@/components/smart-one/projects-tab";

const Projects = () => {
  return (
    <div className="flex  justify-center pt-5">
      <Shaders />
      <ProjectsTabs num1={0} num2={undefined} />
    </div>
  );
};

export default Projects;
