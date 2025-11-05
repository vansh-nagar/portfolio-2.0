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
      <section className="  w-full relative mt-5 ">
        <Button
          data-cal-link="vansh-nagar"
          data-cal-config='{"layout":"month_view"}'
          variant="arrow"
          className={`border-[#8da7ff] animate-pulse`}
        >
          Schedule a Meeting{" "}
          <ArrowRight className="w-4 absolute right-4 translate-x-[-20px]  opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
        </Button>
      </section>
    </>
  );
}
