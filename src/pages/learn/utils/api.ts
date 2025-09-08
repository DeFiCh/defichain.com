import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type LearnField = "slug" | "title" | "description" | "content" | "date";

export interface LearnPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date?: string;
}

export function getPostsDirectory(locale: string): string {
  return join(process.cwd(), "content", "_learn", locale);
}

export function getPostSlugs(locale: string): string[] {
  return fs
    .readdirSync(getPostsDirectory(locale))
    .filter((f) => f.endsWith(".md"));
}

export function getPostBySlug(
  slug: string,
  fields: LearnField[] = [],
  locale: string,
): LearnPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(getPostsDirectory(locale), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: LearnPost = {
    slug: "",
    title: "",
    description: "",
    content: "",
    date: data?.date,
  };

  fields.forEach((field) => {
    if (field === "slug") {
      post.slug = realSlug;
    }
    if (field === "content") {
      post.content = content;
    }
    if (field === "title") {
      post.title = data?.title ?? "";
    }
    if (field === "description") {
      post.description = data?.description ?? "";
    }
    if (field === "date") {
      post.date = data?.date ?? post.date;
    }
  });

  return post;
}

export function getAllPosts(
  fields: LearnField[] = [],
  locale: string,
): LearnPost[] {
  const slugs = getPostSlugs(locale);
  return slugs.map((slug) => getPostBySlug(slug, fields, locale));
}

export function getAllPostsSorted(
  fields: LearnField[] = [],
  locale: string,
): LearnPost[] {
  const withDate: LearnField[] = fields.includes("date")
    ? fields
    : [...fields, "date"];

  const posts = getAllPosts(withDate, locale);

  return posts.sort((a, b) => {
    const da = a.date ? Date.parse(a.date) : 0;
    const db = b.date ? Date.parse(b.date) : 0;
    return db - da;
  });
}
