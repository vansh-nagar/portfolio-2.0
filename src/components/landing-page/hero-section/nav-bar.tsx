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
    <div className=" fixed top-0  right-1/2 translate-x-1/2">
      <div
        ref={navBar}
        className="  bg-background  h-[80px] flex justify-between items-center   w-[95vw] sm:w-[70vw]   transition-transform duration-300 bg-main"
      >
        <div className="flex items-center mix-blend-darken ">
          <img src="/logo/NVfOku01.svg" alt="" className="    w-10" />
        </div>
        <div className="flex   gap-6 max-sm:gap-4 ">
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
          ].map(({ href, title, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
