"use client";
import ArrowButton from "@/components/ui/arrow-button";
import {
  FileText,
  Github,
  Instagram,
  LucideLinkedin,
  Twitter,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "Docker",
  "AWS",
  "Figma",
  "Adobe XD",
  "premiere Pro",
  "After Effects",
];

const HeroContent = () => {
  gsap.registerPlugin(MotionPathPlugin);

  const path = useRef<SVGPathElement | null>(null);

  useGSAP(() => {
    const svgPath = path.current;
    if (!svgPath) return;

    const length = svgPath.getTotalLength();

    gsap.set(svgPath, {
      strokeDasharray: length,
      strokeDashoffset: 0,
    });

    const tl = gsap.timeline();

    tl.to(svgPath, {
      strokeDashoffset: length,
      duration: 1.5,
      reversed: true,
      ease: "power1.in",
    });
  });

  return (
    <div className="flex flex-col   mt-20 items-start w-[95vw] sm:w-[50vw] ">
      <img
        src="/logo/leaf.svg"
        alt=""
        className="w-[11vw] max-sm:w-[25vw] absolute top-[15%] right-0 bg-transparent z-0"
        style={{ transform: "rotateX(180deg)" }}
      />
      <img
        src="/logo/leaf.svg"
        alt=""
        className="w-[11vw] max-sm:w-[25vw] absolute left-0 bottom-[10%] max-sm:bottom-[-3%] bg-transparent z-0 max-sm:-z-10"
        style={{ transform: "rotateY(180deg)" }}
      />

      <div className="  bg-background  flex justify-between items-center  w-full ">
        <svg
          className=""
          width="50"
          height="50"
          viewBox="0 0 199 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 56.4999L84.5 5.9999C16.1 106.4 39.5 159.5 63.5 165.5C87.5 171.5 141.269 117.309 155 56.4999C158.5 40.9999 157.5 17.5 144.5 8.5C131.416 -0.558286 117.5 11.9999 119 26.9999C120.5 41.9999 148.5 75.4999 195.5 46.4999"
            stroke="black"
            strokeWidth="15"
            ref={path}
          />
        </svg>

        <div className="flex   gap-2 ">
          {[
            {
              href: "https://github.com/vansh-nagar",
              title: "GitHub",
              icon: Github,
            },
            {
              href: "https://www.linkedin.com/in/vansh-nagar-469648346/",
              title: "LinkedIn",
              icon: LucideLinkedin,
            },
            {
              href: "",
              title: "Twitter/X",
              icon: Twitter,
            },
            {
              href: "https://www.instagram.com/epitome0.0/?hl=en",
              title: "Instagram",
              icon: Instagram,
            },
            {
              href: "https://www.arclabs.space/dashboard/generate-resume/page2/cmh6l8y3d0001i904uso7c3ux",
              title: "Resume",
              icon: FileText,
            },
          ].map(({ href, title, icon: Icon }, key) => (
            <Link href={href} key={key} target="_blank">
              <Button size={"icon"} variant="outline">
                <Icon size={20} />
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-4xl mt-10">Hi, I'm Vansh Nagar 👋</div>
      <div className=" text-xl  mt-4 ">
        <span className="italic font-medium">web & app developer.</span> Driven
        by ✱
        <span className="italic font-medium">crafting tomorrow’s tech,</span>✧
        engineering systems and ꕤ sparking creative communities.
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-6 z-20">
        <ArrowButton
          link="/designs"
          placeholder="See my designs"
          color={false}
        />
        <ArrowButton link="" placeholder="Pick Your Petal" color={true} />
        <ArrowButton
          link="threejs"
          placeholder="Three.js Journey"
          color={false}
        />
      </div>

      <section className=" mt-4">
        <header className=" font-bold text-xl">About</header>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nihil
          quibusdam fuga id quos dolore, earum error sit quis eum dolores
          exercitationem, facere possimus, maxime minus. Sint inventore veniam
          ut.
        </p>
      </section>
      <section className=" my-5  w-full">
        <header className="font-bold text-xl">Work Experience</header>
        <div className="mt-2  ">
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://i.pinimg.com/1200x/30/3b/a6/303ba6dc7ff9966490089b379a02c5f1.jpg"
              alt=""
              className="rounded-full h-14"
            />
            <div className="  w-full">
              <div className="font-semibold">nameeee</div>
              <div className="text-xs">Role.....</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              May 2021 - Oct 2022
            </div>
          </div>
        </div>
      </section>
      <section className=" my-5  w-full">
        <header className="font-bold text-xl">Education</header>
        <div className="mt-2  ">
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://i.pinimg.com/1200x/30/3b/a6/303ba6dc7ff9966490089b379a02c5f1.jpg"
              alt=""
              className="rounded-full h-14"
            />
            <div className="  w-full">
              <div className="font-semibold">sanstha</div>
              <div className="text-xs">Course</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              2021 - 2022
            </div>
          </div>
        </div>
      </section>
      <section className=" my-5  w-full ">
        <header className="font-bold text-xl">Skills</header>

        <div className=" flex flex-wrap gap-1 mt-2">
          {skills.map((techItem, techIndex) => (
            <Badge
              className=" rounded-sm border-dashed mb-1 "
              variant={"outline"}
              key={techIndex}
            >
              {techItem}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroContent;
