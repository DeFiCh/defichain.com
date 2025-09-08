import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

// Renamed to avoid conflict with blog Posts
export interface MarkdownPage {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  content: string; // raw markdown
}

export function getMDPageBySlug(name: string, locale: string): MarkdownPage {
  const realSlug: string = name.replace(/\.md$/, "");
  const fullPath = join(
    process.cwd(),
    "content",
    realSlug,
    `${realSlug}.${locale}.md`,
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title ?? "",
    subtitle: data.subtitle ?? "",
    description: data.description ?? "",
    content,
  };
}
