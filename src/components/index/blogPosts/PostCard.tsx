import type { Post } from "../../../lib/blogspotApi";

const LOCAL_BG = "/assets/img/background/static_post_BG_16x9_DeFiChain.png";

export default function ProjectCard({
  post,
  isLatest,
}: {
  post: Post;
  isLatest: boolean;
}) {
  return (
    <article
      className="w-full max-w-[318px] flex flex-col"
      data-testid={`card_container_${post.title}`}
    >
      <a
        data-testid="blog-post-container-link"
        href={post.url}
        target="_blank"
        rel="noreferrer"
      >
        <section
          className="w-full min-h-[180px] bg-light-50 flex flex-col justify-end"
          data-testid={`card_title_${post.title}`}
        >
          <section className="text-start">
            <div
              className="relative w-full h-[179px] rounded-[5px] overflow-hidden"
              style={{
                background: `url('${LOCAL_BG}') center / cover no-repeat`,
              }}
            >
              {isLatest && (
                <div className="absolute right-0 bg-electric text-dark-00 font-bold text-[10px] leading-3 tracking-[0.08em] py-2 px-3 w-fit rounded-tr-[5px] rounded-bl-[5px]">
                  LATEST
                </div>
              )}
            </div>

            <div className="text-dark-1000 font-semibold px-3 mt-4 max-w-[294px] line-clamp-2 h-12 lg:text-lg lg:leading-6 lg:mt-6">
              {post.title}
            </div>
          </section>
        </section>
      </a>
    </article>
  );
}
