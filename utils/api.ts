import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
}

export function getMDPageBySlug(name: string, locale: string): Post {
  const realSlug: string = name.replace(/\.md$/, "");
  const fullPath = join(
    process.cwd(),
    "content",
    realSlug,
    `${realSlug}.${locale}.md`
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: Post = {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    content: "",
  };

  post.slug = realSlug;
  post.title = data.title;
  post.subtitle = data.subtitle;
  post.description = data.description;
  post.content = content;

  return post;
}
