import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/landing-page/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { MusicToggleButton } from "@/components/cool-stuff/music-player";
import { ModeToggle } from "@/components/cool-stuff/light-dark";
import ChatWithAi from "@/components/cool-stuff/chat-with-ai";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { CalendarCheckIcon, Laptop } from "lucide-react";
import Link from "next/link";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/leaf.svg",
  },
  title: "Vansh Nagar",
  description:
    "Official portfolio of Vansh Nagar — Full Stack Developer (MERN, Next.js, TypeScript) and UI/UX Designer. Explore projects, skills, and contact details.",
  keywords: [
    "Vansh Nagar",
    "Vansh portfolio",
    "Full Stack Developer India",
    "Next.js Developer",
    "MERN Stack Portfolio",
    "TypeScript Developer",
    "UI UX Designer",
    "Frontend Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Vansh Nagar", url: "https://vanshnagar.me" }],
  creator: "Vansh Nagar",
  publisher: "Vansh Nagar",
  metadataBase: new URL("https://vanshnagar.me"),
  robots: "index, follow",
  themeColor: "#000000",
  verification: {
    google: "tz6j6P-RKJ8gKkK34Fek_se07VIEbIriv3fg-EAW8OI",
  },
  alternates: {
    canonical: "https://vanshnagar.me/",
  },
  openGraph: {
    title: "Vansh Nagar | Full Stack Developer & Designer",
    description:
      "Portfolio showcasing projects, skills, and experience of Vansh Nagar — a modern full stack developer and designer.",
    url: "https://vanshnagar.me",
    siteName: "Vansh Nagar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dz12pywzs/image/upload/v1762708371/edbcd24c-e4d6-439c-81bc-5fad1872a6c6.png",
        width: 1200,
        height: 630,
        alt: "Vansh Nagar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Nagar | Full Stack Developer & Designer",
    description:
      "Explore the portfolio of Vansh Nagar — projects, UI/UX, and dev tools.",
    creator: "@vansh1029", // replace or remove
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${montserrat.className} antialiased `}>
        <Script
          id="ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vansh Nagar",
              jobTitle: "Full Stack Developer & Designer",
              url: "https://vanshnagar.me",
              image: "https://vanshnagar.me/seoImage.png",
              sameAs: [
                "https://github.com/vansh1029",
                "https://www.linkedin.com/in/vansh-nagar/",
              ],
              description:
                "Full Stack Developer (MERN, Next.js, TypeScript) and UI/UX Designer.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children} <Footer />
          <div className=" fixed bottom-4 right-4  flex flex-col items-center gap-2 z-50 ">
            <ModeToggle />

            <ChatWithAi />
            <Button
              data-cal-link="vansh-nagar"
              data-cal-config='{"layout":"month_view"}'
              size={"icon"}
              variant={"outline"}
            >
              <CalendarCheckIcon />
            </Button>
            <Link
              href="https://3-d-laptop-sooty.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size={"icon"} variant={"outline"}>
                <Laptop />
              </Button>
            </Link>
            <MusicToggleButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
