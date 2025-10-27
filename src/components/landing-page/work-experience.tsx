import React from "react";

const WorkExperience = () => {
  return (
    <>
      {" "}
      <section className=" my-5  w-full">
        <header className="font-bold text-xl">Work Experience</header>
        <div className="mt-2 flex flex-col gap-3  ">
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761497054/2ba609a9-59db-449a-bbae-45a8d4297f3a.png"
              alt=""
              className="rounded-full h-14 w-14  object-cover"
            />
            <div className="  w-full">
              <div className="font-semibold">
                Microsoft Learn Student Ambassador
              </div>
              <div className="text-xs">Tech Lead</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              Mar 2024 - Oct 2025
            </div>
          </div>
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761497304/05db9ee4-262b-492b-9b88-6e9fcbd3b1b3.png"
              alt=""
              className="rounded-full h-14 w-14  object-cover"
            />
            <div className="  w-full">
              <div className="font-semibold">TEDxJaipur</div>
              <div className="text-xs">Tech Lead</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              Jan 2025 - Present
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
