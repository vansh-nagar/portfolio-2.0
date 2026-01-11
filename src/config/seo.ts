/**
 * SEO Configuration for Vansh Nagar Portfolio
 * Comprehensive keyword strategy and metadata configuration
 */

export const SEO_CONFIG = {
  // Site Information
  site: {
    name: "Vansh Nagar",
    title: "Vansh Nagar | Full Stack Developer & UI/UX Designer",
    description:
      "Vansh Nagar - Full Stack Developer specializing in MERN, Next.js, TypeScript & UI/UX Design. View my portfolio, projects, and hire me for your next web development project.",
    url: "https://vanshnagar.me",
    locale: "en_US",
    type: "website",
  },

  // Author Information
  author: {
    name: "Vansh Nagar",
    firstName: "Vansh",
    lastName: "Nagar",
    email: "contact@vanshnagar.me",
    jobTitle: "Full Stack Developer & UI/UX Designer",
    location: "India",
    twitter: "@vansh1029",
    github: "vansh1029",
    linkedin: "vansh-nagar",
  },

  // Primary Keywords - Highest priority for ranking
  primaryKeywords: [
    "Vansh",
    "Vansh Nagar",
    "vansh developer",
    "vansh nagar portfolio",
    "vansh nagar developer",
  ],

  // Secondary Keywords - Professional terms
  secondaryKeywords: [
    "Full Stack Developer",
    "Full Stack Developer India",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI UX Designer",
    "Web Developer",
  ],

  // Long-tail Keywords - Specific searches
  longTailKeywords: [
    "hire full stack developer India",
    "Next.js portfolio template",
    "React developer for hire",
    "MERN stack developer freelance",
    "TypeScript expert for hire",
    "modern web developer portfolio",
    "creative developer portfolio",
    "vansh nagar projects github",
    "vansh nagar linkedin",
  ],

  // LSI Keywords - Semantically related
  lsiKeywords: [
    "web application development",
    "responsive web design",
    "JavaScript frameworks",
    "modern web technologies",
    "API development",
    "database design",
    "user interface design",
    "user experience",
    "frontend frameworks",
    "backend technologies",
  ],

  // Technology Keywords
  techKeywords: [
    "React.js",
    "Next.js 15",
    "TypeScript",
    "JavaScript ES6+",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "tRPC",
    "Tailwind CSS",
    "Three.js",
    "GSAP animations",
    "Framer Motion",
    "Vercel deployment",
    "AWS",
    "Docker",
    "Git",
    "Figma",
  ],

  // Images
  images: {
    og: "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
    twitter:
      "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
    logo: "/leaf.svg",
  },

  // Social Links
  social: {
    github: "https://github.com/vansh1029",
    linkedin: "https://www.linkedin.com/in/vansh-nagar/",
    twitter: "https://twitter.com/vansh1029",
    calendly: "https://cal.com/vansh-nagar-wp0ha3",
  },

  // Structured Data Types
  schemaTypes: [
    "Person",
    "WebSite",
    "ProfilePage",
    "WebPage",
    "CreativeWork",
    "BreadcrumbList",
    "FAQPage",
    "Organization",
  ],
};

// Helper function to generate all keywords as a string
export function getAllKeywords(): string[] {
  return [
    ...SEO_CONFIG.primaryKeywords,
    ...SEO_CONFIG.secondaryKeywords,
    ...SEO_CONFIG.longTailKeywords,
    ...SEO_CONFIG.techKeywords,
  ];
}

// Helper function to generate page-specific metadata
export function generatePageMeta(page: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  return {
    title: `${page.title} | Vansh Nagar`,
    description: page.description,
    keywords: [...SEO_CONFIG.primaryKeywords, ...(page.keywords || [])],
    alternates: {
      canonical: `${SEO_CONFIG.site.url}${page.path}`,
    },
    openGraph: {
      title: `${page.title} | Vansh Nagar`,
      description: page.description,
      url: `${SEO_CONFIG.site.url}${page.path}`,
      siteName: SEO_CONFIG.site.name,
      images: [
        {
          url: SEO_CONFIG.images.og,
          width: 1200,
          height: 630,
          alt: `${page.title} - Vansh Nagar`,
        },
      ],
      locale: SEO_CONFIG.site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${page.title} | Vansh Nagar`,
      description: page.description,
      creator: SEO_CONFIG.author.twitter,
      images: [SEO_CONFIG.images.twitter],
    },
  };
}

export default SEO_CONFIG;
