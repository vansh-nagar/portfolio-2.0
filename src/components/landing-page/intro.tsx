import ArrowButton from "@/components/ui/arrow-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";
import { useRef } from "react";
import { GithubIcon } from "../ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import { SiX } from "react-icons/si";
import { InstagramIcon } from "../ui/instagram";
import { FileTextIcon } from "../ui/file-text";

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
        duration: 2,
        ease: "easeInOut",
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
              icon: GithubIcon,
            },
            {
              href: "https://www.linkedin.com/in/vansh-nagar-469648346/",
              title: "LinkedIn",
              icon: LinkedinIcon,
            },
            {
              href: "",
              title: "Twitter/X",
              icon: SiX,
            },
            {
              href: "https://www.instagram.com/epitome0.0/?hl=en",
              title: "Instagram",
              icon: InstagramIcon,
            },
            {
              href: "https://www.arclabs.space/dashboard/generate-resume/page2/cmh6l8y3d0001i904uso7c3ux",
              title: "Resume",
              icon: FileTextIcon,
            },
          ].map(({ href, title, icon: Icon }, key) => (
            <Link href={href} key={key} target="_blank">
              <Button size={"icon"} variant="outline" className=" shadow ">
                <Icon />
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-4xl mt-10">
        Hi, I'm{" "}
        <span className=" group relative">
          <span className=" group-hover:cursor-pointer">Vansh Nagar </span>
          <img
            src="https://res.cloudinary.com/dz12pywzs/image/upload/v1765694568/WhatsApp_Image_2025-12-01_at_1.59.38_PM_hy33p1.jpg"
            alt="Vansh Nagar profile hover image"
            className=" w-20  object-cover  absolute -top-20 right-0 rotate-6 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300  group-hover:-translate-y-5"
          />
        </span>{" "}
      </div>
      <div className=" text-xl  mt-4 ">
        <span className="italic font-medium">web & app developer.</span> Driven
        by ✱
        <span className="italic font-medium">crafting tomorrow's tech,</span>✧
        engineering systems and ꕤ sparking creative communities.{" "}
        <Link target="_blank" href="https://cal.com/vansh-nagar-wp0ha3">
          <span className=" border text-sm p-1 rounded-md cursor-pointer  border-dashed hover:bg-accent transition-all duration-200 ">
            Book A Call! ✿{" "}
          </span>
        </Link>
      </div>

      <div className="flex flex-wrap  gap-2 mt-6 z-20 mb-4">
        <ArrowButton
          link="/designs"
          placeholder="See my designs"
          color={false}
        />
        <ArrowButton
          link="https://www.pixel-perfect.space/"
          placeholder="Pixel Perfect Components"
          color={true}
        />
      </div>
    </>
  );
};

export default Intro;
