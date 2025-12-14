"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const text = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    const split = new SplitText(text.current, {
      type: "words",
    });

    gsap.set(split.words, {
      opacity: 0.3,
      filter: "blur(1.3px)",
    });

    gsap.to(split.words, {
      opacity: 1,
      stagger: 2,
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: container.current,
        start: "bottom bottom",
        end: "top 20%",
        scrub: 1,
      },
    });
  });

  return (
    <>
      <section className="my-5">
        <header className="font-bold text-xl">About</header>
        <div ref={container} className=" h-full w-full ">
          <span ref={text} className={`text-sm leading-relaxed `}>
            I am a{" "}
            <span className="font-semibold text-foreground">
              full-stack developer
            </span>{" "}
            with a strong interest in building scalable, user-focused digital
            products. I enjoy turning ideas into reliable, well-designed
            solutions through clean code and thoughtful architecture. My work
            spans{" "}
            <span className="font-semibold text-primary/90">
              full-stack web applications
            </span>
            ,{" "}
            <span className="font-semibold text-primary/90">
              AI-powered tools
            </span>
            , and{" "}
            <span className="font-semibold text-primary/90">
              immersive 3D web experiences
            </span>
            . I focus on performance, maintainability, and strong user
            experience while blending{" "}
            <span className="text-foreground/80">engineering discipline</span>{" "}
            with{" "}
            <span className="text-foreground/80">creative problem-solving</span>
            .
          </span>
        </div>
      </section>
    </>
  );
};

export default About;
