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

function firstImageFromHtml(html?: string): string {
  if (!html) {
    return "";
  }
  const m = html.match(/<img[^>]+src="([^">]+)"/i);
  return m?.[1] ?? "";
}

// lib/blogspotApi.ts
export async function getBlogspotPosts(): Promise<Post[]> {
  console.log("has fetch?", typeof fetch, "NETLIFY?", process.env.NETLIFY);
  if (process.env.NETLIFY) {
    console.log("Bypass fetch on Netlify for debugging");
    return [];
  }
  try {
    const res = await fetch(
      "https://defichainblog.blogspot.com/feeds/posts/default?alt=json",
    );
    console.log("blogspot status:", res.status);
    if (!res.ok) {
      return [];
    }
    const json = await res.json();
    const entries: any[] = Array.isArray(json?.feed?.entry)
      ? json.feed.entry
      : [];
    console.log("entries:", entries.length);
    return entries.map((e: any): Post => {
      const title = e?.title?.$t ?? "";
      const url =
        (e?.link || []).find((l: any) => l.rel === "alternate")?.href ?? "";
      const html = e?.content?.$t ?? "";
      const imageUrl =
        firstImageFromHtml(html) || e?.media$thumbnail?.url || "";
      const description = e?.summary?.$t ?? "";
      const slug = e?.id?.$t ?? title.toLowerCase().replace(/\s+/g, "-");
      const published = e?.published?.$t;
      return {
        slug,
        title,
        subtitle: "",
        description,
        content: html,
        url,
        imageUrl,
        published,
      };
    });
  } catch (err) {
    console.error("getBlogspotPosts error:", err);
    return [];
  }
}
