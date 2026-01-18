"use client";

import WorkExperience from "../work-experience";
import Education from "../education";
import Skills from "../skills";
import Intro from "../intro";
import GithubActivity from "../github-activity";
import Projects from "../projects";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Image from "next/image";
import Task from "../task";
import Blogs from "../blogs";
import PixelPerfect from "../pixel-perfect";

const HeroContent = () => {
  return (
    <div className="flex flex-col mt-5 sm:mt-20 items-start w-[95vw] sm:w-[50vw] z-20  ">
      <div className="w-[11vw]  max-sm:w-[25vw] absolute top-[15%] right-0 bg-transparent z-0 max-sm:blur-[2px]  dark:hidden block">
        <Image
          src="/logo/leaf.svg"
          alt="Decorative leaf"
          width={200}
          height={200}
          style={{ transform: "rotateX(180deg)" }}
          priority={false}
        />
      </div>

      <div className="w-[11vw] max-sm:w-[25vw] absolute left-0 bottom-[10%] max-sm:bottom-[-3%] bg-transparent max-sm:blur-[2px] z-0 max-sm:-z-10  dark:hidden block">
        <Image
          src="/logo/leaf.svg"
          alt="Decorative leaf"
          width={200}
          height={200}
          style={{ transform: "rotateY(180deg)" }}
          priority={false}
        />
      </div>

      <Intro />
      <Skills />
      <Projects />
      <GithubActivity />

      <PixelPerfect />
      {/* <Blogs /> */}
      <WorkExperience />
      <Education />

      <Task />
      {/* <Socials /> */}
      {/* <Tools /> */}

      <ScrollProgress />
    </div>
  );
};

export default HeroContent;
