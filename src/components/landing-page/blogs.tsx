import Image from "next/image";
import { SparklesText } from "../ui/sparkles-text";
import { BlogsArr } from "@/data/blogs";
import { BadgeCheck, BadgeX } from "lucide-react";
import ThreedButton from "../pixel-perfect/3d-button";
import { Button } from "../ui/button";
import { RainbowButton } from "../ui/rainbow-button";
import Link from "next/link";

const Blogs = () => {
  return (
    <>
      <section className=" my-5  w-full ">
        <header className="font-bold text-xl">Blogs</header>

        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-3 blur-[5px] pointer-events-none">
          {BlogsArr.map((blog, i) => (
            <div key={i} className=" flex mt-2">
              <div className=" flex w-full flex-col justify-between gap-2">
                <div className=" flex flex-col gap-2">
                  {true ? (
                    <div>
                      <a
                        className=" hover:cursor-crosshair"
                        href={blog.link}
                        target="_blank"
                      >
                        <div className="relative w-full aspect-video">
                          <Image
                            src={blog.image}
                            alt="Blog"
                            fill
                            className="rounded-md border object-cover border-dashed"
                            sizes="(max-width: 1024px) 95vw, 50vw"
                          />
                        </div>
                      </a>
                    </div>
                  ) : (
                    <div className=" w-full  aspect-video  bg-muted rounded-md flex items-center justify-center ">
                      <SparklesText className=" text-2xl text-center px-4 ">
                        Coming Soon...
                      </SparklesText>
                    </div>
                  )}
                  <div className="flex flex-col max-sm:flex-wrap">
                    <div className="flex flex-col max-sm:flex-wrap">
                      <div className=" flex justify-between items-center ">
                        <div className=" block  font-semibold text-lg line-clamp-1  truncate  ">
                          {blog.name}
                        </div>{" "}
                        <div className=" text-nowrap text-xs">
                          {blog.timeLine}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-normal flex items-center gap-1">
                          {blog.status === "In Progress" ||
                          blog.status === "Completed" ? (
                            <BadgeCheck
                              size={16}
                              strokeWidth={1}
                              className=" text-green-500"
                            />
                          ) : (
                            <BadgeX
                              size={16}
                              strokeWidth={1}
                              className="text-destructive"
                            />
                          )}{" "}
                          {blog.status}...
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="  text-sm text-muted-foreground   ">
                    {blog.Description}
                  </div>
                  <Link href={blog.link} target="_blank" className="mt-2">
                    <RainbowButton
                      className=" rounded-md text-xs "
                      variant="outline"
                      size={"sm"}
                    >
                      Read Blog
                    </RainbowButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
