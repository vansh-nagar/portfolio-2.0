"use client";

export default function Booking() {
  return (
    <>
      <section className=" my-5  w-full ">
        <header className="font-bold text-xl">Book a call</header>

        <div className="mt-2">
          <iframe
            src="https://cal.com/vansh-nagar"
            className=" w-full h-[90vh] rounded-md  "
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </section>
    </>
  );
}
