import Shaders from "@/components/smart-one/shaders";
import { SparklesText } from "@/components/ui/sparkles-text";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

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

const GrowthFeatures = [
  "E‑commerce store",
  "Payment gateway integration",
  "Advanced analytics dashboard",
  "Custom chatbot (AI-powered)",
  "Email marketing setup",
  "Priority support",
];

const Page = () => {
  return (
    <div className="flex justify-center">
      <Shaders />
      <div className="w-[95vw] sm:w-[50vw] grid sm:grid-cols-2 grid-cols-1 gap-3 my-8 mb-8 mt-8 z-50">
        {/* Sprout */}
        <div className="bg-[#acdab0] w-auto max-sm:w-full rounded-xl relative flex items-center flex-col px-6 py-12 shadow-md hover:scale-[1.01] hover:shadow-2xl transition-all duration-200 overflow-hidden group">
          <h1 className="text-5xl">$99</h1>
          <h3>Sprout</h3>

          <div className="w-full mt-10 flex flex-col gap-4 z-10 text-zinc-600">
            {SproutFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <BadgeCheck />
                <h2>{feature}</h2>
              </div>
            ))}
          </div>

          <Image
            src="/plans-svg/sprout.svg"
            className="right-4 -bottom-[25%] group-hover:-bottom-0 transition-all duration-200 absolute z-0 w-48 md:w-40"
            alt="Sprout"
            width={192}
            height={192}
            priority={false}
          />
        </div>

        {/* Bud */}
        <div className="group bg-[#91adf1] w-auto max-sm:w-full rounded-xl relative flex items-center flex-col px-6 py-12 shadow-md hover:scale-[1.01] hover:shadow-2xl transition-all duration-150">
          <h1 className="text-5xl">$200</h1>
          <h3>Bud</h3>

          <h3 className="text-accent-foreground opacity-0 group-hover:opacity-100 transition-all duration-200">
            Client favorite
          </h3>

          <div className="w-full mt-4 flex flex-col gap-4 z-10 text-zinc-600">
            {BudFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <BadgeCheck />
                <h2>{feature}</h2>
              </div>
            ))}

            <Image
              className="w-32 -top-20 -right-32 group-hover:-right-10 group-hover:-top-10 absolute group-hover:opacity-100 opacity-0 transition-all duration-200"
              src="/plans-svg/svg-hub-079.svg"
              alt="Decorative SVG hub"
              width={128}
              height={128}
              priority={false}
            />
          </div>

          <Image
            src="/plans-svg/bud.svg"
            className="right-4 bottom-0 absolute z-0"
            alt="Bud"
            width={128}
            height={128}
            priority={false}
          />
        </div>

        {/* NEW CARD — Growth */}
        <div className="group bg-[#91adf1] w-auto max-sm:w-full rounded-xl relative flex items-center flex-col px-6 py-12 shadow-md hover:scale-[1.01] hover:shadow-2xl transition-all duration-150 overflow-hidden">
          <h1 className="text-5xl">$300</h1>
          <h3>Growth</h3>

          <h3 className="text-accent-foreground opacity-0 group-hover:opacity-100 transition-all duration-200">
            <SparklesText className="text-sm font-extralight">
              Perfect for scaling
            </SparklesText>
          </h3>

          <div className="w-full mt-4 flex flex-col gap-4 z-10 text-zinc-700">
            {GrowthFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <BadgeCheck />
                <h2>{feature}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Bloom */}
        <div className="bg-[#acdab0] max-md:h-[90vh] w-auto max-sm:w-full group overflow-hidden rounded-xl relative flex items-center flex-col px-4 py-12 shadow-md hover:scale-[1.01] hover:shadow-2xl transition-all duration-200">
          <h1 className="text-5xl">$500</h1>
          <h3>Bloom</h3>

          <div className="w-full mt-10 flex flex-col gap-4 z-10 text-zinc-600">
            {BloomFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <BadgeCheck />
                <h2>{feature}</h2>
              </div>
            ))}
          </div>

          <Image
            src="/plans-svg/pot.svg"
            alt="Pot decorative graphic"
            className="absolute top-0 right-0 w-52 -translate-y-full group-hover:translate-y-0 transition-all duration-200"
            width={208}
            height={208}
            priority={false}
          />

          <Image
            src="/plans-svg/bloom.svg"
            className="right-0 bottom-0 absolute z-0"
            alt="Bloom"
            width={128}
            height={128}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
