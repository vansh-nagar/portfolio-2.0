import HeroSection from "@/components/landing-page/hero-section";
import Projects from "@/components/landing-page/projects";
import Script from "next/script";

// Homepage specific JSON-LD
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://vanshnagar.me/#webpage",
  url: "https://vanshnagar.me",
  name: "Vansh Nagar - Full Stack Developer & UI/UX Designer Portfolio",
  description:
    "Official portfolio of Vansh Nagar. Full Stack Developer specializing in MERN, Next.js, TypeScript & UI/UX Design. View my projects, skills, and hire me.",
  isPartOf: {
    "@id": "https://vanshnagar.me/#website",
  },
  about: {
    "@id": "https://vanshnagar.me/#person",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
  },
  datePublished: "2024-01-01",
  dateModified: "2026-01-11",
  inLanguage: "en-US",
  potentialAction: [
    {
      "@type": "ReadAction",
      target: ["https://vanshnagar.me"],
    },
  ],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".hero-description"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Vansh Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vansh Nagar is a Full Stack Developer and UI/UX Designer based in India. He specializes in building modern web applications using technologies like Next.js, React, TypeScript, Node.js, and the MERN stack.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Vansh Nagar offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vansh Nagar offers full stack web development, UI/UX design, React and Next.js development, MERN stack development, and custom web applications. He provides services ranging from simple landing pages to complex full-stack applications.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Vansh Nagar use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vansh Nagar is proficient in JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, Tailwind CSS, Three.js, GSAP, Framer Motion, and Figma for design.",
      },
    },
    {
      "@type": "Question",
      name: "How can I hire Vansh Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can hire Vansh Nagar by visiting his portfolio at vanshnagar.me and booking a call through Cal.com, or by reaching out via LinkedIn or GitHub.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Vansh Nagar located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vansh Nagar is based in India and works with clients globally on web development and design projects.",
      },
    },
  ],
};

const page = () => {
  return (
    <>
      {/* Homepage specific schema */}
      <Script
        id="ld-homepage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />

      {/* FAQ Schema for rich snippets */}
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <HeroSection />
    </>
  );
};

export default page;
