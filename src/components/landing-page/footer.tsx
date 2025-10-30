"use client";

import ArrowButton from "../ui/arrow-button";

export default function Footer() {
  return (
    <div className=" flex justify-center">
      <footer className="  pb-12 pt-5 flex flex-col  border-t  border-dashed  justify-between relative overflow-hidden gap-15  w-[95vw] sm:w-[50vw]">
        <div className="flex items-start gap-4  ">
          <div className="flex flex-col items-start ">
            <h1 className="text-3xl  ">Vansh Nagar</h1>
            <h2 className="  text-muted-foreground">
              Building modern <span className="underline">web</span> &{" "}
              <span className="underline">app</span>&nbsp;
              <span className="italic">experiences</span>✧.
            </h2>
          </div>
        </div>
        <div className="text-right text-[15px] text-muted-foreground ">
          <div>Made with ♡ using Next.js</div>
          <div className="text-xs text-muted-foreground">
            © 2025 Vansh Nagar
          </div>
        </div>
      </footer>
    </div>
  );
}
