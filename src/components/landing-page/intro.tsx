import {
  FileText,
  Github,
  Instagram,
  LucideLinkedin,
  Twitter,
} from "lucide-react";
import ArrowButton from "@/components/ui/arrow-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";
import { useRef } from "react";

const Intro = () => {
  gsap.registerPlugin(MotionPathPlugin);

  const pathLight = useRef<SVGPathElement | null>(null);
  const pathDark = useRef<SVGPathElement | null>(null);

  useGSAP(() => {
    const animatePath = (svgPath: SVGPathElement) => {
      const length = svgPath.getTotalLength();

      gsap.set(svgPath, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(svgPath, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power1.in",
      });
    };

    if (pathLight.current) animatePath(pathLight.current);
    if (pathDark.current) animatePath(pathDark.current);
  });

  return (
    <>
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
            ref={pathLight}
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
            ref={pathDark}
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
    </>
  );
};

export default Intro;
