import React from "react";

const Education = () => {
  return (
    <>
      <section className=" my-5  w-full">
        <header className="font-bold text-xl">Education</header>
        <div className="mt-2 flex flex-col gap-3  ">
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761495944/09efe042-cc70-4a0f-8d77-27d77f354625.png"
              alt=""
              className="rounded-full h-14"
            />
            <div className="  w-full">
              <div className="font-semibold">
                Birla Institute of Technology, Mesra
              </div>
              <div className="text-xs">Bachelor of Computer Applications</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              2024 - present
            </div>
          </div>
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761496158/fe5a0ede-a5d3-404d-b48e-8ef752ea2f54.png"
              alt=""
              className="rounded-full h-14 border border-dashed"
            />
            <div className="  w-full">
              <div className="font-semibold">Vardhman International School</div>
              <div className="text-xs">11th - 12th</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              2022 - 2024
            </div>
          </div>
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761496403/5727afc5-0785-4fb7-bd99-e79eec850b23.png"
              alt=""
              className="rounded-full h-14 border  border-dashed dark:p-0 p-1"
            />
            <div className="  w-full">
              <div className="font-semibold">Cambridge Court High School</div>
              <div className="text-xs">2nd - 10th</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              2012 - 2022
            </div>
          </div>
          <div className="flex    gap-4 items-center   ">
            <img
              src="https://res.cloudinary.com/dz12pywzs/image/upload/v1761496487/5754b668-8ffe-48fa-be84-c81f13a244f7.png"
              alt=""
              className="rounded-full h-14 border  border-dashed "
            />
            <div className="  w-full">
              <div className="font-semibold">
                Dolphins International Schools
              </div>
              <div className="text-xs">LKG - 2nd</div>
            </div>
            <div className="  font-semibold text-sm text-muted-foreground text-nowrap">
              2008 - 2012
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
