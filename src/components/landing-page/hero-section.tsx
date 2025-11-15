import Shaders from "../smart-one/shaders";
import HeroContent from "./hero-section/main-text";

const HeroSection = () => {
  return (
    <div className="    flex justify-center  items-center  ">
      <HeroContent />
      <Shaders />
    </div>
  );
};

export default HeroSection;
