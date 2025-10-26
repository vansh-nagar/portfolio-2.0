"use client";

import {
  FileText,
  Github,
  Instagram,
  LucideLinkedin,
  Twitter,
} from "lucide-react";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const lastScroll = useRef<number | null>(null);
  const navBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navBar.current) {
      return;
    }

    const transformNavBar = () => {
      const currentY = window.scrollY;
      if (lastScroll.current === null || navBar.current === null) {
        lastScroll.current = currentY;
        return;
      }

      if (currentY > lastScroll.current) {
        navBar.current.style.transform = "translateY(-100%)";
      } else {
        navBar.current.style.transform = "translateY(0)";
      }

      lastScroll.current = currentY;
    };

    window.addEventListener("scroll", transformNavBar);

    return () => {
      window.removeEventListener("scroll", transformNavBar);
    };
  }, []);

  return (
    <div
      ref={navBar}
      className=" z-50 fixed top-0 bg-background/10 backdrop-blur-lg   right-0 left-0  h-[70px] flex justify-between items-center  px-[100px]   transition-transform duration-300 bg-main"
    >
      <div className="flex items-center mix-blend-darken ">
        <img src="/logo/NVfOku01.svg" alt="" className="    w-10" />
      </div>
      <div className="flex   gap-6 max-sm:gap-4 ">
        <a
          href="https://github.com/vansh-nagar"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Github strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/vansh-nagar-469648346/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LucideLinkedin strokeWidth={1.5} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" title="Twitter/X">
          <Twitter strokeWidth={1.5} />
        </a>
        <a
          href="https://www.instagram.com/epitome0.0/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Instagram strokeWidth={1.5} />
        </a>
        <a
          href="https://www.arclabs.space/dashboard/generate-resume/page2/cmh6l8y3d0001i904uso7c3ux"
          rel="noopener noreferrer"
          title="Resume"
          target="_blank"
        >
          <FileText strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
