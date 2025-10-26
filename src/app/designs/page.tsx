import React from "react";

const Images = [
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1752239310/jj2oous2pgonqcwxz5yd.png",
    siteLink: "",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1755285754/mvnkof9l3od9tkadzlr9.png",
    siteLink: "https://next-brain-i432.vercel.app/",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1754402900/c8jxyzlqrfqmzrj0tvh3.png",
    siteLink: "https://bento-eta-six.vercel.app/",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1752239324/ascd9d6mhmrhimad1jbc.png",
    siteLink: "",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1752239335/mfotnb0dpp7vkogxth6v.png",
    siteLink: "",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1752419229/jm14kyxqmkykvsfaiars.png",
    siteLink: "",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1753798036/wi1e1vwljkrr7ptxaek9.png",
    siteLink: "",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1752312028/p8yuid7eiucdggereoul.png",
    siteLink: "",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1753798026/wvtrcji5zhgwo25vtjnv.png",
    siteLink: "",
  },
  {
    imageUrl:
      "http://res.cloudinary.com/dz12pywzs/image/upload/v1753798044/tvi4jcjtowx9dokfv8v5.png",
    siteLink: "",
  },
];

const page = () => {
  return (
    <div className="flex justify-center">
      <div className=" w-[95vw] sm:w-[50vw] grid grid-cols-1 gap-3 my-10    ">
        {Images.map((Image, index) => (
          <div
            key={index}
            className="  group max-sm:w-[95vw]  gap-4 flex flex-col   "
          >
            <a
              target="_blank"
              href={Image.siteLink}
              className={Image.siteLink ? "cursor-cell" : "cursor-crosshair"}
            >
              <img
                src={Image.imageUrl}
                alt=""
                className=" rounded-xl  object-cover  group-hover:scale-95 transition-all duration-300 group-hover:opacity-90 shadow-md "
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
