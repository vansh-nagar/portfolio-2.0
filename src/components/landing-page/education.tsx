import Image from "next/image";
const data = [
  {
    img: "https://res.cloudinary.com/dz12pywzs/image/upload/v1761495944/09efe042-cc70-4a0f-8d77-27d77f354625.png",
    alt: "",
    className: "rounded-full h-14",
    name: "Birla Institute of Technology, Mesra",
    degree: "Bachelor of Computer Applications",
    dates: "2024 - present",
  },
  // {
  //   img: "https://res.cloudinary.com/dz12pywzs/image/upload/v1761496158/fe5a0ede-a5d3-404d-b48e-8ef752ea2f54.png",
  //   alt: "",
  //   className: "rounded-full h-14 border border-dashed",
  //   name: "Vardhman International School",
  //   degree: "11th - 12th",
  //   dates: "2022 - 2024",
  // },
  // {
  //   img: "https://res.cloudinary.com/dz12pywzs/image/upload/v1761496403/5727afc5-0785-4fb7-bd99-e79eec850b23.png",
  //   alt: "",
  //   className: "rounded-full h-14 border border-dashed bg-white p-1",
  //   name: "Cambridge Court High School",
  //   degree: "2nd - 10th",
  //   dates: "2012 - 2022",
  // },
  // {
  //   img: "https://res.cloudinary.com/dz12pywzs/image/upload/v1761496487/5754b668-8ffe-48fa-be84-c81f13a244f7.png",
  //   alt: "",
  //   className: "rounded-full h-14 border border-dashed",
  //   name: "Dolphins International Schools",
  //   degree: "LKG - 2nd",
  //   dates: "2008 - 2012",
  // },
];

const Education = () => {
  return (
    <>
      <section className=" my-5  w-full">
        <header className="font-bold text-xl">Education</header>
        <div className="mt-2 flex flex-col gap-3">
          {data.map((edu, index) => (
            <div key={index} className="flex gap-4 items-center">
              <Image
                src={edu.img}
                alt={edu.alt || edu.name + " logo"}
                className={edu.className}
                width={56}
                height={56}
                priority={false}
              />
              <div className="w-full">
                <div className="font-semibold line-clamp-2">{edu.name}</div>
                <div className="text-xs line-clamp-1">{edu.degree}</div>
              </div>
              <div className="font-semibold text-sm text-muted-foreground sm:text-nowrap">
                {edu.dates}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
