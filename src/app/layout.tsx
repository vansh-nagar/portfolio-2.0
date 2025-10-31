import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/landing-page/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { MusicToggleButton } from "@/components/cool-stuff/music-player";
import { ModeToggle } from "@/components/cool-stuff/light-dark";
import ChatWithAi from "@/components/cool-stuff/chat-with-ai";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  // icons: {
  //   icon: "/vite.svg",
  // },
  // title: "Vansh Nagar | Full Stack Developer & Designer",
  // description:
  //   "Official portfolio of Vansh Nagar — Full Stack Developer (MERN, Next.js, TypeScript) and UI/UX Designer. Explore projects, skills, and contact details.",
  // keywords: [
  //   "Vansh Nagar",
  //   "Vansh portfolio",
  //   "Full Stack Developer India",
  //   "Next.js Developer",
  //   "MERN Stack Portfolio",
  //   "TypeScript Developer",
  //   "UI UX Designer",
  //   "Frontend Developer",
  //   "Web Developer Portfolio",
  // ],
  // authors: [{ name: "Vansh Nagar", url: "https://vanshnagar.me" }],
  // creator: "Vansh Nagar",
  // publisher: "Vansh Nagar",
  // metadataBase: new URL("https://vanshnagar.me"),
  // robots: "index, follow",
  // themeColor: "#000000",
  // openGraph: {
  //   title: "Vansh Nagar | Full Stack Developer & Designer",
  //   description:
  //     "Portfolio showcasing projects, skills, and experience of Vansh Nagar — a modern full stack developer and designer.",
  //   url: "https://vanshnagar.me",
  //   siteName: "Vansh Nagar Portfolio",
  //   locale: "en_US",
  //   type: "website",
  //   images: [
  //     {
  //       url: "/seoImage.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Vansh Nagar Portfolio",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Vansh Nagar | Full Stack Developer & Designer",
  //   description:
  //     "Explore the portfolio of Vansh Nagar — projects, UI/UX, and dev tools.",
  //   creator: "@vansh1029", // replace or remove
  //   images: ["/og.jpg"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${montserrat.className} antialiased  `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children} <Footer />{" "}
          <div className=" fixed bottom-4 right-4  flex flex-col items-center gap-2 z-50 ">
            <ModeToggle />
            <ChatWithAi />
            <MusicToggleButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
