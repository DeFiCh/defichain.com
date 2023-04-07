import classNames from "classnames";
import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";
import { SectionTitle } from "@components/commons/SectionTitle";
import { Button } from "@components/commons/Buttons";
import { Posts } from "@components/commons/prismicTypes";
import ProjectCard from "./PostCard";

export function BlogPostsSection({ blogPosts }: { blogPosts: Posts[] }) {
  const { t } = useTranslation("page-index");
  return blogPosts?.length > 0 ? (
    <div className={classNames("relative z-0", "my-6", "py-20")}>
      <Container>
        <div className="flex flex-col lg:flex-row w-auto justify-between">
          <div className="max-w-[468px]">
            <SectionTitle
              text={t("BlogPostsSection.label")}
              customStyle="lg:w-fit md:w-[409px] w-[272px]"
            />
            <div className="mt-5 text-[32px] leading-9 whitespace-pre-line lg:text-[52px] lg:leading-none">
              {t("BlogPostsSection.title")}
            </div>
            <Button
              text={t("BlogPostsSection.button")}
              className="text-sm mt-9 lg:py-4 lg:px-14 py-3 px-10 lg:text-base lg:mt-12"
              href="https://blog.defichain.com/"
            />
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-6 md:gap-y-12 mt-12 lg:mt-0 lg:w-[660px]">
            {blogPosts.slice(-4).map((p, i) => (
              <ProjectCard key={p.title[0].text} post={p} isLatest={i === 0} />
            ))}
          </div>
        </div>
        <div className="hidden absolute z-[-1] h-[567.69px] w-[768.77px] right-[-380.71px] md:block md:top-0 lg:bottom-0 bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/blogPosts/blogPostsBg.png')]" />
      </Container>
    </div>
  ) : (
    <div />
  );
}
