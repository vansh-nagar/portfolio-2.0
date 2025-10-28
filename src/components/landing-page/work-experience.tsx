import React from "react";

const data = [
  {
    img: "https://res.cloudinary.com/dz12pywzs/image/upload/v1761497054/2ba609a9-59db-449a-bbae-45a8d4297f3a.png",
    title: "Microsoft Learn Student Ambassador",
    role: "Tech Lead",
    date: "Mar 2024 - Oct 2025",
  },
  {
    img: "https://res.cloudinary.com/dz12pywzs/image/upload/v1761497304/05db9ee4-262b-492b-9b88-6e9fcbd3b1b3.png",
    title: "TEDxJaipur",
    role: "Tech Lead",
    date: "Jan 2025 - Present",
  },
];

const WorkExperience = () => {
  return (
    <>
      {" "}
      <section className=" my-5  w-full">
        <header className="font-bold text-xl">Work Experience</header>
        <div className="mt-2 flex flex-col gap-3">
          {data.map((experience, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={experience.img}
                alt=""
                className="rounded-full h-14 w-14 object-cover"
              />
              <div className="w-full">
                <div className="font-semibold">{experience.title}</div>
                <div className="text-xs">{experience.role}</div>
              </div>
              <div className="font-semibold text-sm text-muted-foreground text-nowrap">
                {experience.date}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
