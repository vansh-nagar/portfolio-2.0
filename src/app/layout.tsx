import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/landing-page/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { MusicToggleButton } from "@/components/cool-stuff/music-player";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Analytics } from "@vercel/analytics/next";
import { ModeToggle } from "@/components/cool-stuff/light-dark2.0";
import { CalendarCheckIcon } from "@/components/ui/calendar-check";
import OnekoCat from "@/components/OnekoCat";
import Link from "next/link";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Separate viewport export for Next.js 14+
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  // Core metadata
  metadataBase: new URL("https://vanshnagar.me"),
  title: {
    default: "Vansh Nagar | Full Stack Developer & UI/UX Designer",
    template: "%s | Vansh Nagar",
  },
  description:
    "Vansh Nagar - Full Stack Developer specializing in MERN, Next.js, TypeScript & UI/UX Design. View my portfolio, projects, and hire me for your next web development project.",

  // Comprehensive keywords targeting "Vansh" searches
  keywords: [
    // Primary brand keywords
    "Vansh",
    "Vansh Nagar",
    "vansh developer",
    "vansh nagar portfolio",
    "vansh nagar developer",
    "vansh web developer",
    "vansh full stack",
    "vansh nagar projects",

    // Professional keywords
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
    "Web Developer Portfolio",
    "JavaScript Developer",

    // Technical keywords
    "React portfolio",
    "Next.js portfolio",
    "TypeScript expert",
    "Tailwind CSS developer",
    "Prisma developer",
    "Three.js developer",
    "GSAP animations",
    "Framer Motion",

    // Location-based
    "Developer India",
    "Web Developer India",
    "Hire Indian Developer",
    "Freelance Developer India",
  ],

  // Authors and creators
  authors: [
    { name: "Vansh Nagar", url: "https://vanshnagar.me" },
    { name: "Vansh", url: "https://vanshnagar.me" },
  ],
  creator: "Vansh Nagar",
  publisher: "Vansh Nagar",

  // Generator and application info
  generator: "Next.js",
  applicationName: "Vansh Nagar Portfolio",
  referrer: "origin-when-cross-origin",

  // Category
  category: "technology",
  classification: "Portfolio",

  // Icons configuration
  icons: {
    icon: [
      { url: "/leaf.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/leaf.svg",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ rel: "mask-icon", url: "/leaf.svg", color: "#000000" }],
  },

  // Manifest
  manifest: "/manifest.json",

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "tz6j6P-RKJ8gKkK34Fek_se07VIEbIriv3fg-EAW8OI",
    // Add Bing verification when you have it
    // yandex: "your-yandex-verification",
    // yahoo: "your-yahoo-verification",
  },

  // Alternates and canonical
  alternates: {
    canonical: "https://vanshnagar.me",
    languages: {
      "en-US": "https://vanshnagar.me",
      en: "https://vanshnagar.me",
    },
    types: {
      "application/rss+xml": "https://vanshnagar.me/rss.xml",
      "application/atom+xml": "https://vanshnagar.me/atom.xml",
    },
  },

  // Enhanced Open Graph
  openGraph: {
    type: "profile",
    title: "Vansh Nagar | Full Stack Developer & UI/UX Designer",
    description:
      "I'm Vansh Nagar, a Full Stack Developer specializing in Next.js, React, TypeScript & MERN Stack. Explore my portfolio showcasing modern web applications and UI/UX designs.",
    url: "https://vanshnagar.me",
    siteName: "Vansh Nagar - Developer Portfolio",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    countryName: "India",
    firstName: "Vansh",
    lastName: "Nagar",
    username: "vansh1029",
    gender: "male",
    images: [
      {
        url: "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
        width: 1200,
        height: 630,
        alt: "Vansh Nagar - Full Stack Developer Portfolio",
        type: "image/png",
        secureUrl:
          "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
      },
      {
        url: "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
        width: 600,
        height: 315,
        alt: "Vansh Nagar Portfolio",
      },
    ],
  },

  // Enhanced Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@vansh1029",
    creator: "@vansh1029",
    title: "Vansh Nagar | Full Stack Developer & Designer",
    description:
      "Explore my portfolio - Full Stack Developer specializing in Next.js, React, TypeScript. View projects, designs & hire me for your next project.",
    images: {
      url: "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
      alt: "Vansh Nagar Portfolio Preview",
    },
  },

  // App Links for mobile
  appLinks: {
    web: {
      url: "https://vanshnagar.me",
      should_fallback: true,
    },
  },

  // Other metadata
  other: {
    // LinkedIn specific
    "linkedin:owner": "vansh-nagar",

    // Pinterest
    "pinterest-rich-pin": "true",

    // Telegram
    "telegram:channel": "@vanshnagar",

    // Microsoft
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",

    // Apple
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Vansh Nagar",

    // Format detection
    "format-detection": "telephone=no",

    // Google
    "google-site-verification": "tz6j6P-RKJ8gKkK34Fek_se07VIEbIriv3fg-EAW8OI",

    // Revisit
    "revisit-after": "7 days",

    // Author info
    author: "Vansh Nagar",
    copyright: "© 2026 Vansh Nagar. All rights reserved.",
    designer: "Vansh Nagar",
    owner: "Vansh Nagar",

    // Geo targeting
    "geo.region": "IN",
    "geo.placename": "India",
    ICBM: "20.5937, 78.9629",

    // Dublin Core
    "DC.title": "Vansh Nagar - Full Stack Developer & Designer",
    "DC.creator": "Vansh Nagar",
    "DC.subject": "Web Development, Full Stack Development, UI/UX Design",
    "DC.description": "Portfolio of Vansh Nagar - Full Stack Developer",
    "DC.publisher": "Vansh Nagar",
    "DC.contributor": "Vansh Nagar",
    "DC.type": "InteractiveResource",
    "DC.format": "text/html",
    "DC.identifier": "https://vanshnagar.me",
    "DC.language": "en",
    "DC.coverage": "Worldwide",
    "DC.rights": "© 2026 Vansh Nagar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comprehensive structured data for maximum SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://vanshnagar.me/#person",
    name: "Vansh Nagar",
    givenName: "Vansh",
    familyName: "Nagar",
    alternateName: ["Vansh", "vansh", "vansh nagar", "vanshnagar", "vansh1029"],
    jobTitle: "Full Stack Developer & UI/UX Designer",
    url: "https://vanshnagar.me",
    image: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/dz12pywzs/image/upload/v1766822250/aab6cca4-e667-44b4-9ca6-2670ce8d095c.png",
      width: 1200,
      height: 630,
    },
    sameAs: [
      "https://github.com/vansh1029",
      "https://www.linkedin.com/in/vansh-nagar/",
      "https://twitter.com/vansh1029",
      "https://vanshnagar.me",
    ],
    description:
      "Vansh Nagar is a Full Stack Developer specializing in MERN Stack, Next.js, TypeScript, and UI/UX Design. Based in India, creating modern web applications.",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "tRPC",
      "Tailwind CSS",
      "Three.js",
      "GSAP",
      "Framer Motion",
      "UI/UX Design",
      "Figma",
      "Full Stack Development",
      "Web Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
      skills:
        "JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, PostgreSQL, UI/UX Design",
    },
    nationality: {
      "@type": "Country",
      name: "India",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://vanshnagar.me/#website",
    url: "https://vanshnagar.me",
    name: "Vansh Nagar - Full Stack Developer Portfolio",
    description:
      "Official portfolio website of Vansh Nagar - Full Stack Developer & UI/UX Designer",
    publisher: {
      "@id": "https://vanshnagar.me/#person",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://vanshnagar.me/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://vanshnagar.me/#profilepage",
    url: "https://vanshnagar.me",
    name: "Vansh Nagar - Full Stack Developer & Designer",
    description:
      "Portfolio of Vansh Nagar showcasing web development projects, UI/UX designs, and technical skills",
    mainEntity: {
      "@id": "https://vanshnagar.me/#person",
    },
    datePublished: "2024-01-01",
    dateModified: "2026-01-11",
    inLanguage: "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vanshnagar.me",
      },
    ],
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://vanshnagar.me/#portfolio",
    name: "Vansh Nagar's Developer Portfolio",
    creator: {
      "@id": "https://vanshnagar.me/#person",
    },
    description:
      "A collection of web development projects and UI/UX designs by Vansh Nagar",
    url: "https://vanshnagar.me/projects",
    inLanguage: "en-US",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://vanshnagar.me/#organization",
    name: "Vansh Nagar",
    url: "https://vanshnagar.me",
    logo: {
      "@type": "ImageObject",
      url: "https://vanshnagar.me/leaf.svg",
    },
    founder: {
      "@id": "https://vanshnagar.me/#person",
    },
    sameAs: [
      "https://github.com/vansh1029",
      "https://www.linkedin.com/in/vansh-nagar/",
      "https://twitter.com/vansh1029",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />

        {/* OpenSearch */}
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="Vansh Nagar"
          href="/opensearch.xml"
        />

        {/* RSS/Atom Feeds */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Vansh Nagar RSS Feed"
          href="/rss.xml"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Vansh Nagar Atom Feed"
          href="/atom.xml"
        />

        {/* Humans.txt */}
        <link rel="author" href="/humans.txt" />

        {/* Canonical */}
        <link rel="canonical" href="https://vanshnagar.me" />

        {/* Prefetch important pages */}
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/designs" />
      </head>
      <body className={`${montserrat.className} antialiased `}>
        {/* Person Schema */}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* Website Schema */}
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* ProfilePage Schema */}
        <Script
          id="ld-profilepage"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />

        {/* Breadcrumb Schema */}
        <Script
          id="ld-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* Portfolio Schema */}
        <Script
          id="ld-portfolio"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(portfolioSchema),
          }}
        />

        {/* Organization Schema */}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <Analytics />
          {children} <Footer />
          <div className=" fixed bottom-4 right-4  flex flex-col items-center gap-2 z-50 ">
            <ModeToggle />
            <Link href="https://cal.com/vansh-nagar-wp0ha3" target="_blank">
              <Button size={"icon"} variant={"outline"}>
                <CalendarCheckIcon />
              </Button>
            </Link>
            <MusicToggleButton />
          </div>
          <OnekoCat />
        </ThemeProvider>
      </body>
    </html>
  );
}
