import { DotScreenShader } from "../dot-shader-background";
import { ShaderAnimation } from "../shader-animation";
import HeroContent from "./hero-section/main-text";

const HeroSection = () => {
  return (
    <div className="    flex justify-center  items-center  ">
      <HeroContent />
      <DotScreenShader />
      <ShaderAnimation />
    </div>
  );
};

export default HeroSection;
