import classNames from "classnames";
import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { SecondaryButton } from "@components/commons/Buttons";
import { useTranslation } from "../../../hooks/useTranslation";
import ProjectCard from "./PostCard";
import type { Post } from "../../../lib/blogspotApi";

export function BlogPostsSection({ blogPosts }: { blogPosts: Post[] }) {
  const { t } = useTranslation("page-index");

  return blogPosts?.length > 0 ? (
    <section className={classNames("relative lg:mb-56 md:mb-52 mb-48")}>
      <Container>
        <div className="flex flex-col lg:flex-row w-auto justify-between">
          <div className="max-w-[468px]">
            <SectionTitle
              text={t("BlogPostsSection.label")}
              customStyle="lg:w-fit md:w-[409px] w-[272px]"
              testID="defichain-blog"
            />
            <h2 className="mt-5 text-[32px] leading-9 whitespace-pre-line lg:text-[52px] lg:leading-none pb-[48px]">
              {t("BlogPostsSection.title")}
            </h2>
            <SecondaryButton
              text={t("BlogPostsSection.button")}
              className="text-sm mt-9 lg:py-4 py-3 px-[62px] md:px-[56px] lg:text-base"
              href="https://defichainblog.blogspot.com/"
              customSize={24}
              customClass="ml-[8px]"
              testID="view-all-articles"
            />
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-6 md:gap-y-12 mt-12 lg:mt-0 lg:w-[660px]">
            {blogPosts.slice(0, 4).map((p, i) => (
              <ProjectCard key={`${p.slug}-${i}`} post={p} isLatest={i === 0} />
            ))}
          </div>
        </div>
        <div className="hidden absolute z-[-1] h-[567.69px] w-[768.77px] right-[-380.71px] md:block md:top-0 lg:bottom-0 bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/blogPosts/blogPostsBg.png')]" />
      </Container>
      <div
        className={classNames(
          "bg-[url('/assets/img/index/accent-mobile.png')] absolute w-[266px] h-[598px] bg-contain bg-no-repeat z-[-1]",
          "bottom-[-30%] block md:hidden",
        )}
      />
      <div
        className={classNames(
          "bg-[url('/assets/img/index/accent-tablet.png')] absolute w-[598px] h-[365px] bg-contain bg-no-repeat z-[-1]",
          "bottom-[-30%] left-[-8%] hidden md:block lg:hidden",
        )}
      />
    </section>
  ) : (
    <div />
  );
}
