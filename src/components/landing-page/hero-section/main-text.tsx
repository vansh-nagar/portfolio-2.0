"use client";
import { Button } from "@/components/ui/button";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen max-sm:pt-[20vh] max-sm:pb-14 relative overflow-hidden">
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
      <div className="font-Montserrat text-center  text-2xl sm:text-2xl lg:text-3xl xl:text-4xl lg:leading-normal xl:leading-relaxed  max-sm:w-[95vw]  z-20 px-2">
        Vansh Nagar is a <br className="sm:hidden" />
        <span className="italic font-medium">web & app developer</span> from
        BIT Mesra. <br /> Driven by ✱
        <span className="italic font-medium">crafting tomorrow’s tech,</span>✧
        engineering <br className="max-sm:hidden" /> systems, and ꕤ sparking
        creative communities.
      </div>

      <div className="font-Montserrat text-zinc-500 text-sm mt-6 md:text-lg flex flex-col sm:flex-row justify-center items-center gap-4 text-center z-20">
        <span>Previously crafting experience with</span>
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.tedxbitjaipur.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logo/tedx/logo-black.png"
              alt=""
              className="w-20 max-sm:w-16 dark:hidden block grayscale saturate-150 opacity-65 hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="/logo/tedx/logo-white.png"
              alt=""
              className="w-20 max-sm:w-16 hidden dark:block grayscale saturate-150 opacity-65 hover:grayscale-0 transition-all duration-500"
            />
          </a>
          <a
            href="https://mlsabitjaipur.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logo/mlsa/black-MLSA.png"
              alt=""
              className="w-36 max-sm:w-28  dark:hidden block   grayscale opacity-65 hover:grayscale-0 transition-all duration-500"
            />
            <img
              src="/logo/mlsa/white-MLSA.png"
              alt=""
              className="w-36 max-sm:w-28 hidden dark:block grayscale opacity-65 hover:grayscale-0 transition-all duration-500"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8 z-20">
        <Button>See My Design</Button>
        <Button>Pick Your Petal</Button>
        <Button>Three.js Journey</Button>
      </div>
    </div>
  );
};

export default HeroContent;
