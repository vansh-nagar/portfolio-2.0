import AnoAI from "../animated-shader-background";
import { DotScreenShader } from "../dot-shader-background";
import { ShaderAnimation } from "../shader-animation";
import HeroContent from "./hero-section/main-text";

const HeroSection = () => {
  return (
    <div className="    flex justify-center  items-center  ">
      <HeroContent />
      {/* <DotScreenShader /> */}
      <ShaderAnimation />
      {/* <AnoAI /> */}
    </div>
  );
};

export default HeroSection;
