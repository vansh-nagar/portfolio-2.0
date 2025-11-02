"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { RainbowButton } from "../ui/rainbow-button";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();

      cal("ui", {
        theme: "light",
      });
    })();
  }, []);

  return (
    <>
      <section className=" my-5  w-full relative ">
        <img
          src="/logo/leaf.svg"
          alt=""
          className="w-20 sm:mask-r-from-90% absolute right-0 max-sm:blur-[2px] max-sm:hidden  "
          style={{ transform: "rotateX(180deg)" }}
        />
        <header className="font-bold text-xl">Book a Call</header>

        <div className=" flex flex-col gap-3  ">
          <div className="text-sm  text-muted-foreground">
            Want to collaborate or discuss a project? Let’s connect on a quick
            call. connect!
          </div>

          <div className=" flex justify-between items-start">
            <Button
              data-cal-link="vansh-nagar"
              data-cal-config='{"layout":"month_view"}'
              variant="arrow"
              className={`border-[#8da7ff]`}
            >
              Schedule a Meeting{" "}
              <ArrowRight className="w-4 absolute right-4 translate-x-[-20px]  opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
