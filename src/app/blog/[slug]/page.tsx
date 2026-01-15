import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  return (
    <div className="flex justify-center">
      <div className="w-[11vw]   max-sm:w-[25vw] absolute top-[15%] right-0 bg-transparent z-0 max-sm:blur-[2px] ">
        <Image
          src="/logo/leaf.svg"
          alt="Decorative leaf"
          width={200}
          height={200}
          style={{ transform: "rotateX(180deg)" }}
          priority={false}
        />
      </div>

      <div className="w-[11vw] max-sm:w-[25vw] absolute left-0 bottom-[10%] max-sm:bottom-[-3%] bg-transparent max-sm:blur-[2px] z-0 max-sm:-z-10">
        <Image
          src="/logo/leaf.svg"
          alt="Decorative leaf"
          width={200}
          height={200}
          style={{ transform: "rotateY(180deg)" }}
          priority={false}
        />
      </div>
      <article className="prose dark:prose-invert max-w-none w-[95vw] sm:w-[50vw] mt-10 mb-6">
        <h1>{data.title}</h1>
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
