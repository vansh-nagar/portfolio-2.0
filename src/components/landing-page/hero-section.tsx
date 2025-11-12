import { DotScreenShader } from "../dot-shader-background";
import { ShaderBackground } from "../neural-network-hero";
import { ShaderAnimation } from "../shader-animation";
import HeroContent from "./hero-section/main-text";

const HeroSection = () => {
  return (
    <div className="    flex justify-center  items-center  ">
      <HeroContent />
      <DotScreenShader />
      <ShaderAnimation />
      {/* <ShaderBackground /> */}
    </div>
  );
};

export default HeroSection;
