import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(blogDir);

  const blogs = files.map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title,
      description: data.description,
      date: data.date,
    };
  });

  return (
    <section className="space-y-4 flex justify-center ">
      {blogs.map((b) => (
        <Link
          key={b.slug}
          href={`/blog/${b.slug}`}
          className="w-[95vw] sm:w-[50vw] "
        >
          <div className="p-4 rounded-xl hover:bg-accent">
            <h2 className="text-lg font-semibold">{b.title}</h2>
            <p className="text-sm opacity-70">{b.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
