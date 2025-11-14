import Shaders from "@/components/smart-one/shaders";
import { BadgeCheck, Check, CheckCircle, CheckLine } from "lucide-react";

const SproutFeatures = [
  "One-page static website",
  "Responsive design",
  "Basic animations",
  "SEO optimized",
  "10 days of Free Post-Launch Maintenance",
];

const BudFeatures = [
  "Multi-page site (3–5 pages)",
  "CMS/data backend",
  "UI/UX polish (Figma wireframe or design system)",
  "SEO optimized + page speed optimization",
  "2–3 revision rounds",
  "3 months of Free Post-Launch Maintenance",
];

const BloomFeatures = [
  "Full-stack web app",
  "Admin panel / CMS",
  "AI integration",
  "Custom 3D model",
  "Image optimization + CDN hosting",
  "DevOps basics",
  "Custom animations, transitions, GSAP magic",
  "5 months of Free Post-Launch Maintenance",
  "Unlimited revision window",
];
const page = () => {
  return (
    <div className=" flex justify-center ">
      <Shaders />
      <div className="w-[95vw] sm:w-[50vw] grid  sm:grid-cols-2  grid-cols-1 gap-3 my-8  mb-8 mt-3 z-50">
        <div className="  bg-[#acdab0] w-auto  max-sm:w-full rounded-xl relative flex items-center flex-col px-6 py-12 shadow-md hover:scale-[1.01] hover:shadow-2xl transition-all duration-200 overflow-hidden group  group-hover:opacity-40 hover:!opacity-100 ">
          <h1 className=" text-5xl ">$49</h1>
          <h3 className="">Sprout</h3>

          <div className="w-full mt-10 flex flex-col gap-4  z-10 text-zinc-600">
            {SproutFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2  ">
                <BadgeCheck />
                <h2 className="">{feature}</h2>
              </div>
            ))}
          </div>
          <img
            src="/plans-svg/sprout.svg"
            className=" right-4 -bottom-[25%]  group-hover:-bottom-0 transition-all duration-200 absolute z-0 w-48 md:w-40 "
            alt="Bud"
          />
        </div>

        <div className="group   bg-[#91adf1] w-auto max-sm:w-full rounded-xl relative flex items-center flex-col px-6 py-12 shadow-md  hover:scale-[1.01] hover:shadow-2xl transition-all duration-150 group-hover:opacity-40    ">
          <h1 className=" text-5xl ">$99</h1>
          <h3 className=" ">Bud</h3>

          <h3 className=" text-zinc-200 opacity-0 group-hover:opacity-100 transition-all duration-200 ">
            Client favorite
          </h3>

          <div className="w-full mt-4 flex flex-col gap-4  z-10 text-zinc-600">
            {BudFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3  ">
                <BadgeCheck />
                <h2 className="">{feature}</h2>
              </div>
            ))}

            <img
              className=" w-32 -top-20 -right-32 group-hover:-right-10 group-hover:-top-10   absolute group-hover:opacity-100 opacity-0 transition-all duration-200 "
              src="/plans-svg/svg-hub-079.svg"
              alt=""
            />
          </div>

          <img
            src="/plans-svg/bud.svg"
            className=" right-4 bottom-0 absolute z-0"
            alt="Bud"
          />
        </div>

        <div className="group   bg-[#91adf1] w-auto max-sm:w-full rounded-xl relative flex items-center flex-col px-6 py-12 shadow-md  hover:scale-[1.01] hover:shadow-2xl transition-all duration-150 group-hover:opacity-40    ">
          <h1 className=" text-5xl ">$99</h1>
          <h3 className=" ">Bud</h3>

          <h3 className=" text-zinc-200 opacity-0 group-hover:opacity-100 transition-all duration-200 ">
            Client favorite
          </h3>

          <div className="w-full mt-4 flex flex-col gap-4  z-10 text-zinc-600">
            {BudFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3  ">
                <BadgeCheck />
                <h2 className="">{feature}</h2>
              </div>
            ))}

            <img
              className=" w-32 -top-20 -right-32 group-hover:-right-10 group-hover:-top-10   absolute group-hover:opacity-100 opacity-0 transition-all duration-200 "
              src="/plans-svg/svg-hub-079.svg"
              alt=""
            />
          </div>

          <img
            src="/plans-svg/bud.svg"
            className=" right-4 bottom-0 absolute z-0"
            alt="Bud"
          />
        </div>

        <div className=" bg-[#acdab0] max-md:h-[90vh] w-auto max-sm:w-full group overflow-hidden rounded-xl relative flex items-center flex-col px-4 py-12 shadow-md hover:scale-[1.01] hover:shadow-2xl transition-all duration-200  ">
          <h1 className=" text-5xl ">$199</h1>
          <h3 className="">Bloom</h3>

          <div className="w-full mt-10 flex flex-col gap-4  z-10 text-zinc-600">
            {BloomFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3  ">
                <BadgeCheck />
                <h2 className="">{feature}</h2>
              </div>
            ))}
          </div>
          <img
            src="/plans-svg/pot.svg"
            alt=""
            className=" absolute top-0 right-0 w-52 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-200"
          />
          <img
            src="/plans-svg/bloom.svg"
            className=" right-0 bottom-0 absolute z-0  "
            alt="Bud"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
