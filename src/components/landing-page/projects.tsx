import { Figma, Github, Link } from "lucide-react";

const ProjectsArr = [
  {
    name: "NEXTBrain",
    link: "https://next-brain-i432.vercel.app/",
    image:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1751201965/scvwjaz25rwxtpazozvo.png",
    github: "https://github.com/vansh-nagar/NEXTBrain",
    demo: "https://next-brain-i432.vercel.app/",
    figmaFile: "",
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
    Description:
      "Little Lemon is a mobile food ordering app for a local restaurant. It lets users browse dishes, view details, and manage orders with ease.",
  },
];

const Projects = () => {
  const handleDropDown = () => {};
  return (
    <div className="w-full flex justify-center items-center flex-col   gap-[10vh] max-sm:gap-[6vw] hover:caret-white font-Montserrat -mt-[18vh] max-sm:m-0 ">
      {ProjectsArr.map((project, index) => (
        <div key={index} className="w-[70vw]  max-sm:w-[95vw]  gap-4 ">
          <div className=" group  ">
            <a
              className=" hover:cursor-crosshair"
              href={project.link}
              target="_blank"
            >
              <img
                src={project.image}
                alt=""
                className=" rounded-xl  group-hover:scale-95 transition-all duration-300 group-hover:opacity-90"
              />
            </a>
          </div>
          <div className="flex justify-between items-center mt-4 max-sm:flex-wrap ">
            <div className=" block  font-bold text-2xl ">{project.name}</div>
            <div className="flex  gap-4 items-center max-sm:mt-1   max-sm:flex-wrap">
              <a
                className={`text-sm text-muted-foreground hover:underline flex items-center ${
                  !project.github ? "opacity-50 pointer-events-none" : ""
                }`}
                href={project.github || "#"}
                target="_blank"
                tabIndex={project.github ? 0 : -1}
                aria-disabled={!project.github}
              >
                <Github className="inline-block mr-1" />
                GitHub
              </a>
              <a
                className={`text-sm text-muted-foreground hover:underline flex items-center ${
                  !project.demo ? "opacity-50 pointer-events-none" : ""
                }`}
                href={project.demo || "#"}
                target="_blank"
                tabIndex={project.demo ? 0 : -1}
                aria-disabled={!project.demo}
              >
                <Link className="inline-block mr-1" />
                Live Demo
              </a>
              <a
                className={`text-sm text-muted-foreground hover:underline flex items-center ${
                  !project.figmaFile ? "opacity-50 pointer-events-none" : ""
                }`}
                href={project.figmaFile || "#"}
                target="_blank"
                tabIndex={project.figmaFile ? 0 : -1}
                aria-disabled={!project.figmaFile}
              >
                <Figma className="inline-block mr-1" />
                Figma File
              </a>
            </div>
          </div>

          <div className=" block mt-1 text-justify text-gray-700">
            {project.Description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
