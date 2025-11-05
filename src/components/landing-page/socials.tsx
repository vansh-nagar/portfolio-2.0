import { GithubIcon } from "lucide-react";
import React from "react";
import { FlickeringGrid } from "../ui/flickering-grid";
import Link from "next/link";

const Socials = () => {
  return (
    <>
      <section className=" my-5  w-full  ">
        <header className="font-bold text-xl">Socials</header>

        <div className=" w-full mt-2 flex  max-lg:flex-wrap  sm:gap-3 gap-2    ">
          <div className=" border rounded-md border-dashed w-auto  ">
            <img
              className=" dark:hidden block   "
              src="https://spotify-github-profile.kittinanx.com/api/view?uid=31qjfkcsdkh7ehq2f36t4v2c5gl4&cover_image=true&theme=spotify-embed&show_offline=false&background_color=121212&interchange=false&profanity=true&bar_color=000000&bar_color_cover=false&mode=light"
            />
            <img
              className="dark:block hidden  "
              src="https://spotify-github-profile.kittinanx.com/api/view?uid=31qjfkcsdkh7ehq2f36t4v2c5gl4&cover_image=true&theme=spotify-embed&show_offline=false&background_color=121212&interchange=false&profanity=true&mode=dark&bar_color=ffffff&bar_color_cover=false"
            />
          </div>
          <div
            onClick={() => window.open("https://github.com/vansh-nagar")}
            className=" flex items-center  justify-center  shadow-inner flex-1  border-b border-dashed relative group cursor-pointer  rounded-md   "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
              className="z-30"
            >
              <g fill="#8da7ff">
                <g transform="scale(8.53333,8.53333)">
                  <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                </g>
              </g>
            </svg>
            <FlickeringGrid
              color="#8da7ff"
              maxOpacity={0.2}
              className=" absolute mask-r-from-50% mask-l-from-50%"
            />
          </div>
        </div>
        <div className=" mt-3 flex   max-lg:flex-wrap sm:gap-3 gap-2 overflow-hidden  rounded-md ">
          <img
            src="https://res.cloudinary.com/dz12pywzs/image/upload/v1762336185/Gemini_Generated_Image_qxos2hqxos2hqxos_rlosmn.png"
            alt=""
            className=" aspect-square  shadow    max-lg:h-auto h-40 object-cover object-top  rounded-md"
          />
          <img
            src="https://res.cloudinary.com/dz12pywzs/image/upload/v1762102619/Untitled_sur84c.png"
            alt=""
            className=" rounded-md h-40 max-sm:h-auto shadow   object-cover object-bottom w-full "
          />
        </div>
      </section>
    </>
  );
};

export default Socials;
