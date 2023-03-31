import classNames from "classnames";
import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";
import { SectionTitle } from "@components/commons/SectionTitle";
import { Button } from "@components/commons/Buttons";
import ProjectCard from "./PostCard";

export interface Posts {
  // description: ProjectTitle[];
  // title: ProjectTitle[];
  // sort: number;
  // featuredimage: {
  //   url: string;
  // };
  // github?: {
  //   url: string;
  // };
}

export function BlogPostsSection({ blogPosts }) {
  const { t } = useTranslation("page-index");
  const separatedTitle = t("BlogPostsSection.title").split(" ");
  console.log(blogPosts);
  return blogPosts?.length > 0 ? (
    <div className={classNames("relative z-0", "my-6", "py-20")}>
      <Container>
        <div className="flex flex-col lg:flex-row w-auto justify-between">
          <div className="max-w-[468px]">
            <SectionTitle
              text={t("BlogPostsSection.label")}
              customStyle="lg:w-fit md:w-[409px] w-[272px]"
            />
            <div className="mt-5 md:text-[32px] md:leading-9 lg:text-[52px] lg:leading-none">
              {separatedTitle.map((word, index) =>
                index === 1 ? (
                  <span key={`${word}`}>
                    <span
                      className="text-electric"
                      key={`${word}`}
                    >{`${word} `}</span>
                    <br />
                  </span>
                ) : (
                  <span key={`${word}`}>{`${word} `}</span>
                )
              )}
            </div>
            <div className="mt-5 tracking-[0.03em] text-dark-700 font-desc md:text-base lg:text-xl lg:tracking-normal">
              {t("BlogPostsSection.desc")}
            </div>
            <Button
              text={t("BlogPostsSection.button")}
              className="text-sm mt-9 py-4 w-[232px] lg:text-base lg:mt-12"
              href="https://blog.defichain.com/"
            />
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-12 md:mt-12 lg:mt-0 lg:w-[660px]">
            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
            {blogPosts.slice(-4).map((p, i) => (
              <>
                <ProjectCard post={p} isLatest={i === 0} />
                <ProjectCard post={p} isLatest={i !== 0} />
                <ProjectCard post={p} isLatest={i !== 0} />
                <ProjectCard post={p} isLatest={i !== 0} />
              </>
            ))}
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <div />
  );
}
