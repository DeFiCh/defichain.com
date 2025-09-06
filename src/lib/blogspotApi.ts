export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  content: string; // raw HTML from Blogger
  url: string; // canonical post URL
  imageUrl: string; // first <img> in content or media$thumbnail
  published?: string;
}

function firstImageFromHtml(html: string): string {
  const m = html?.match(/<img[^>]+src="([^">]+)"/i);
  return m?.[1] ?? "";
}

export async function getBlogspotPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://defichainblog.blogspot.com/feeds/posts/default?alt=json",
  );
  if (!res.ok) {
    throw new Error(`Blogspot feed failed: ${res.status}`);
  }
  const json = await res.json();
  const entries = json?.feed?.entry ?? [];

  return entries.map((e: any): Post => {
    const title = e?.title?.$t ?? "";
    const url =
      (e?.link || []).find((l: any) => l.rel === "alternate")?.href ?? "";
    const html = e?.content?.$t ?? "";
    const imageUrl = firstImageFromHtml(html) || e?.media$thumbnail?.url || "";
    const description = e?.summary?.$t ?? "";
    const slug = e?.id?.$t ?? title?.toLowerCase().replace(/\s+/g, "-");

    return {
      slug,
      title,
      subtitle: "",
      description,
      content: html,
      url,
      imageUrl,
      published: e?.published?.$t,
    };
  });
}
