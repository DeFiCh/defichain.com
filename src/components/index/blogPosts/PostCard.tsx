import { Posts } from "@components/commons/prismicTypes";

export default function ProjectCard({
  post,
  isLatest,
}: {
  post: Posts;
  isLatest: boolean;
}) {
  return (
    <article
      className="w-full max-w-[318px] flex flex-col"
      data-testid={`card_container_${post.title[0]?.text}`}
    >
      <a href={post.url?.url} target="_blank" rel="noreferrer">
        <section
          className="w-full min-h-[180px] bg-light-50 bg-cover bg-center flex flex-col justify-end"
          data-testid={`card_title_${post.title[0]?.text}`}
        >
          <section className="text-start">
            <div
              className="relative bg-cover bg-[center_left_0rem] w-full h-[179px] rounded-[5px]"
              style={{
                backgroundImage: `url('${post.image.url}')`,
              }}
            >
              {isLatest && (
                <div className="absolute right-0 bg-electric text-dark-00 font-bold text-[10px] leading-3 tracking-[0.08em] py-2 px-3 w-fit rounded-tr-[5px] rounded-bl-[5px]">
                  LATEST
                </div>
              )}
            </div>
            <div className="text-dark-1000 font-semibold px-3 mt-4 max-w-[294px] line-clamp-2 h-12 lg:text-lg lg:leading-6 lg:mt-6">
              {post.title[0]?.text}
            </div>
          </section>
        </section>
      </a>
    </article>
  );
}
