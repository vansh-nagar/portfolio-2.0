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
  // 💻 Core Development
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",

  // 🗄️ Database & APIs
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "REST APIs",
  "GraphQL",

  // 🎨 Frontend & Design
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Figma",

  // ☁️ DevOps & Deployment
  "Git",
  "Docker",
  "AWS",
  "Vercel",
  "CI/CD",

  // 🧠 AI & Automation
  "OpenAI API",
  "LangChain",
  "Python",

  // 🕹️ 3D & Creative
  "Three.js",
  "React Three Fiber",
  "Blender",

  // 🎬 Media & Editing
  "Premiere Pro",
  "After Effects",
  "Photoshop",
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
    <div className="flex flex-col  mt-5 sm:mt-20 items-start w-[95vw] sm:w-[50vw] ">
      <img
        src="/logo/leaf.svg"
        alt=""
        className="w-[11vw] max-sm:w-[25vw] absolute top-[15%] right-0 bg-transparent z-0 "
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
          className="block dark:hidden"
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
        <svg
          className=" dark:block hidden"
          width="50"
          height="50"
          viewBox="0 0 199 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 56.4999L84.5 5.9999C16.1 106.4 39.5 159.5 63.5 165.5C87.5 171.5 141.269 117.309 155 56.4999C158.5 40.9999 157.5 17.5 144.5 8.5C131.416 -0.558286 117.5 11.9999 119 26.9999C120.5 41.9999 148.5 75.4999 195.5 46.4999"
            stroke="white"
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

      <div className="flex flex-wrap  gap-2 mt-6 z-20">
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
        <p className="text-sm leading-relaxed text-muted-foreground ">
          I began as a{" "}
          <span className="font-semibold text-foreground">NEET aspirant</span>{" "}
          chasing medicine, but my{" "}
          <span className="text-primary font-medium">
            father’s push toward tech
          </span>{" "}
          changed everything. His belief helped me discover my real passion —{" "}
          <span className="italic text-foreground/90">
            building, creating, and solving
          </span>{" "}
          through code. Now, I craft{" "}
          <span className="font-semibold text-primary/90">full-stack apps</span>
          , <span className="font-semibold text-primary/90">AI tools</span>, and{" "}
          <span className="font-semibold text-primary/90">
            3D web experiences
          </span>
          , blending <span className="text-foreground/80">creativity</span> with{" "}
          <span className="text-foreground/80">technology</span> to bring ideas
          to life ✨
        </p>
      </section>
      <section className=" my-5  w-full">
        <header className="font-bold text-xl">Work Experience</header>
        <div className="mt-2 flex flex-col gap-3  ">
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761497054/2ba609a9-59db-449a-bbae-45a8d4297f3a.png"
              alt=""
              className="rounded-full h-14 w-14  object-cover"
            />
            <div className="  w-full">
              <div className="font-semibold">
                Microsoft Learn Student Ambassador
              </div>
              <div className="text-xs">Tech Lead</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              Mar 2024 - Oct 2025
            </div>
          </div>
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761497304/05db9ee4-262b-492b-9b88-6e9fcbd3b1b3.png"
              alt=""
              className="rounded-full h-14 w-14  object-cover"
            />
            <div className="  w-full">
              <div className="font-semibold">TEDxJaipur</div>
              <div className="text-xs">Tech Lead</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              Jan 2025 - Present
            </div>
          </div>
        </div>
      </section>
      <section className=" my-5  w-full">
        <header className="font-bold text-xl">Education</header>
        <div className="mt-2 flex flex-col gap-3  ">
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761495944/09efe042-cc70-4a0f-8d77-27d77f354625.png"
              alt=""
              className="rounded-full h-14"
            />
            <div className="  w-full">
              <div className="font-semibold">
                Birla Institute of Technology, Mesra
              </div>
              <div className="text-xs">Bachelor of Computer Applications</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              2024 - present
            </div>
          </div>
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761496158/fe5a0ede-a5d3-404d-b48e-8ef752ea2f54.png"
              alt=""
              className="rounded-full h-14 border border-dashed"
            />
            <div className="  w-full">
              <div className="font-semibold">Vardhman International School</div>
              <div className="text-xs">11th - 12th</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              2022 - 2024
            </div>
          </div>
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761496403/5727afc5-0785-4fb7-bd99-e79eec850b23.png"
              alt=""
              className="rounded-full h-14 border  border-dashed dark:p-0 p-1"
            />
            <div className="  w-full">
              <div className="font-semibold">Cambridge Court High School</div>
              <div className="text-xs">2nd - 10th</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              2012 - 2022
            </div>
          </div>
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761496487/5754b668-8ffe-48fa-be84-c81f13a244f7.png"
              alt=""
              className="rounded-full h-14 border  border-dashed "
            />
            <div className="  w-full">
              <div className="font-semibold">
                Dolphins International Schools
              </div>
              <div className="text-xs">LKG - 2nd</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              2008 - 2012
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
