import React from "react";

const Images = [
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1752239310/jj2oous2pgonqcwxz5yd.png",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1755285754/mvnkof9l3od9tkadzlr9.png",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1754402900/c8jxyzlqrfqmzrj0tvh3.png",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1752239324/ascd9d6mhmrhimad1jbc.png",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1752239335/mfotnb0dpp7vkogxth6v.png",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1752419229/jm14kyxqmkykvsfaiars.png",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1753798036/wi1e1vwljkrr7ptxaek9.png",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1752312028/p8yuid7eiucdggereoul.png",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1753798026/wvtrcji5zhgwo25vtjnv.png",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1753798044/tvi4jcjtowx9dokfv8v5.png",
  },
];

const page = () => {
  return (
    <div className="flex justify-center">
      <img
        src="/logo/leaf.svg"
        alt=""
        className="w-[11vw]  max-sm:w-[25vw] absolute top-[15%] right-0 bg-transparent z-0 max-sm:blur-[2px] "
        style={{ transform: "rotateX(180deg)" }}
      />

      <img
        src="/logo/leaf.svg"
        alt=""
        className="w-[11vw] max-sm:w-[25vw] absolute left-0 bottom-[10%] max-sm:bottom-[-3%] bg-transparent max-sm:blur-[2px] z-0 max-sm:-z-10"
        style={{ transform: "rotateY(180deg)" }}
      />
      <div className=" w-[95vw] sm:w-[50vw] grid grid-cols-1 gap-3 my-10    ">
        {Images.map((Image, index) => (
          <div
            key={index}
            className="  group max-sm:w-[95vw]  gap-4 flex flex-col   "
          >
            <img
              src={Image.imageUrl}
              alt=""
              className=" rounded-xl  object-cover  group-hover:scale-95 transition-all duration-300 group-hover:opacity-90 shadow-md "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
