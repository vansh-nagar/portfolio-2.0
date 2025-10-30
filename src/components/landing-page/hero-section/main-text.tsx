"use client";

import WorkExperience from "../work-experience";
import About from "../about";
import Education from "../education";
import Skills from "../skills";
import Intro from "../intro";
import GithubActivity from "../github-activity";
import Projects from "../projects";
import CallDotCom from "../call-com";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Socials from "../socials";

const HeroContent = () => {
  return (
    <div className="flex flex-col  mt-5 sm:mt-20 items-start w-[95vw] sm:w-[50vw] ">
      <img
        src="/logo/leaf.svg"
        alt=""
        className="w-[11vw] max-sm:w-[25vw] absolute top-[15%] right-0 bg-transparent z-0 max-sm:blur-[2px] "
        style={{ transform: "rotateX(180deg)" }}
      />
      <img
        src="/logo/leaf.svg"
        alt=""
        className="w-[11vw] max-sm:w-[25vw] absolute left-0 bottom-[10%] max-sm:bottom-[-3%] bg-transparent z-0 max-sm:-z-10"
        style={{ transform: "rotateY(180deg)" }}
      />

      <Intro />
      <Skills />
      <Projects />

      {/* <About /> */}

      <GithubActivity />
      <WorkExperience />

      <Education />
      {/* <Socials /> */}

      <CallDotCom />
      <ScrollProgress />
    </div>
  );
};

export default HeroContent;
