"use client";

import ArrowButton from "../ui/arrow-button";

export default function Footer() {
  return (
    <div className=" flex justify-center">
      <footer className="h-[50vh]  py-12 flex flex-col  border-t  border-dashed  justify-between relative overflow-hidden max-sm:items-center max-sm:text-center w-[95vw] sm:w-[50vw]">
        <div className="flex items-start gap-4 max-sm:flex-col max-sm:items-center max-sm:mb-10">
          <img
            className="w-14 opacity-75"
            src="/logo/NVfOku01.svg"
            alt="Logo"
          />
          <div className="flex flex-col items-start max-sm:items-center">
            <h1 className="text-3xl text-zinc-700 z-10">Vansh Nagar</h1>
            <h2 className="text-zinc-500 z-0 ">
              Building modern <span className="underline">web</span> &{" "}
              <span className="underline">app</span>&nbsp;
              <span className="italic">experiences</span>✧.
            </h2>
            <div className="flex gap-4 mt-4">
              <ArrowButton link="designs" placeholder="Hire me" color={false} />
              <ArrowButton
                link="designs"
                placeholder="Contact me"
                color={true}
              />
            </div>
          </div>
        </div>
        <div className="text-right text-[15px] text-zinc-500 max-sm:text-center">
          <div>Made with ♡ using Next.js & TailwindCSS</div>
          <div className="text-xs text-zinc-400">© 2025 Vansh Nagar</div>
        </div>
      </footer>
    </div>
  );
}
