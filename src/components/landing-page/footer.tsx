"use client";
import Booking from "./call-com";

export default function Footer() {
  return (
    <div className=" flex justify-center">
      <footer className="  pb-12 pt-5 flex flex-col  border-t  border-dashed  justify-between relative overflow-hidden   w-[95vw] sm:w-[50vw]">
        <img
          src="/logo/leaf.svg"
          alt="Footer decorative leaf"
          className="w-32 sm:mask-r-from-90% absolute right-0 max-sm:blur-[2px] max-sm:hidden dark:hidden block  "
          style={{ transform: "rotateX(180deg)" }}
        />
        <div className="flex items-start gap-4  ">
          <div className="flex flex-col items-start ">
            <h1 className="text-2xl  ">Vansh Nagar</h1>
            <h2 className="  text-muted-foreground">
              Building modern <span className="underline">web</span> &{" "}
              <span className="underline">app</span>&nbsp;
              <span className="italic">experiences</span> ✧.
            </h2>
          </div>
        </div>
        <Booking />
        <div className="text-right text-[15px] text-muted-foreground mt-15 ">
          <div>Made with ♡ using Next.js</div>
          <div className="text-xs text-muted-foreground">
            © 2025 Vansh Nagar
          </div>
        </div>
      </footer>
    </div>
  );
}
