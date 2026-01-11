import Shaders from "@/components/smart-one/shaders";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designs | Vansh Nagar - UI/UX Designer",
  description:
    "Browse Vansh Nagar's UI/UX design portfolio. View web designs, interface designs, and creative visual work. Modern, clean, and user-focused design solutions.",
  keywords: [
    "Vansh Nagar designs",
    "Vansh UI designs",
    "UI/UX portfolio",
    "Web design portfolio",
    "Interface design",
    "Vansh designer",
    "Creative designs",
    "Modern web designs",
    "Vansh Nagar UI/UX",
  ],
  alternates: {
    canonical: "https://vanshnagar.me/designs",
  },
  openGraph: {
    title: "Designs | Vansh Nagar - UI/UX Designer",
    description:
      "Explore my UI/UX design portfolio featuring modern web interfaces and creative visual designs.",
    url: "https://vanshnagar.me/designs",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
        width: 1200,
        height: 630,
        alt: "Vansh Nagar Design Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designs | Vansh Nagar",
    description: "View my UI/UX design portfolio and creative work.",
    images: [
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
    ],
  },
};

const Images = [
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1752239310/jj2oous2pgonqcwxz5yd.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1767794413/screencapture-pixel-perfect-space-2026-01-07-19_21_09_ya5u5v.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1755285754/mvnkof9l3od9tkadzlr9.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1752239324/ascd9d6mhmrhimad1jbc.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1762412771/screencapture-localhost-3001-2025-11-06-12_29_47_wj3jhk.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1762411859/screencapture-arclabs-space-2025-11-06-12_20_42_rgb0os.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1752239335/mfotnb0dpp7vkogxth6v.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1752419229/jm14kyxqmkykvsfaiars.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1753798036/wi1e1vwljkrr7ptxaek9.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1752312028/p8yuid7eiucdggereoul.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1753798026/wvtrcji5zhgwo25vtjnv.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1753798044/tvi4jcjtowx9dokfv8v5.png",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1754402900/c8jxyzlqrfqmzrj0tvh3.png",
  },
];

const page = () => {
  return (
    <div className="flex justify-center">
      <Shaders />
      <div className="w-[11vw]   max-sm:w-[25vw] absolute top-[15%] right-0 bg-transparent z-0 max-sm:blur-[2px] ">
        <Image
          src="/logo/leaf.svg"
          alt="Decorative leaf"
          width={200}
          height={200}
          style={{ transform: "rotateX(180deg)" }}
          priority={false}
        />
      </div>

      <div className="w-[11vw] max-sm:w-[25vw] absolute left-0 bottom-[10%] max-sm:bottom-[-3%] bg-transparent max-sm:blur-[2px] z-0 max-sm:-z-10">
        <Image
          src="/logo/leaf.svg"
          alt="Decorative leaf"
          width={200}
          height={200}
          style={{ transform: "rotateY(180deg)" }}
          priority={false}
        />
      </div>
      <div className=" w-[95vw] sm:w-[50vw] grid grid-cols-1 gap-3 my-10    ">
        {Images.map((img, index) => (
          <div
            key={index}
            className="group max-sm:w-[95vw] gap-4 flex flex-col"
          >
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <img
                src={img.imageUrl}
                alt={`Design shot #${index + 1}`}
                className="rounded-xl object-cover group-hover:scale-[0.99] transition-all duration-300 group-hover:opacity-90 shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
