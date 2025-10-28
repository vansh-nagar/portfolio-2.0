"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { RainbowButton } from "../ui/rainbow-button";

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
      <section className=" my-5  w-full ">
        <header className="font-bold text-xl">Book a Call</header>
        <img
          src="/logo/leaf.svg"
          alt=""
          className="w-[11vw] max-sm:w-[25vw] absolute top-[15%] right-0 bg-transparent z-0 "
          style={{ transform: "rotateX(180deg)" }}
        />

        <div className="mt-2 flex flex-col gap-3 ">
          <div>
            Book a call with me to discuss projects, collaborations, or just to
            connect!
          </div>

          <div className=" flex justify-between items-center">
            <img
              src="/logo/leaf.svg"
              alt=""
              className="w-20 mask-r-from-90%"
              style={{ transform: "rotateY(180deg)" }}
            />

            <RainbowButton
              variant={"outline"}
              data-cal-link="vansh-nagar"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Call
            </RainbowButton>

            <img
              src="/logo/leaf.svg"
              alt=""
              className="w-20 mask-r-from-90%"
              style={{ transform: "rotateX(180deg)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
