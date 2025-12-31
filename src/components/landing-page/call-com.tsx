import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Booking() {
  return (
    <>
      <section className="  w-full relative mt-5 ">
        <Link
          href="https://cal.com/vansh-nagar-wp0ha3"
          target="_blank"
          className="group inline-block"
        >
          <Button variant="arrow" className={`border-[#8da7ff] animate-pulse`}>
            Schedule a Meeting{" "}
            <ArrowRight className="w-4 absolute right-4 translate-x-[-20px]  opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </Button>
        </Link>
      </section>
    </>
  );
}
