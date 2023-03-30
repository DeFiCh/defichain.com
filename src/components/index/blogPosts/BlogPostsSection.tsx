import * as prismic from "@prismicio/client";
import classNames from "classnames";
import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";
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

export function BlogPostsSection() {
  const { t } = useTranslation("page-index");
  return (
    <div
      className={classNames(
        "relative z-0",
        "lg:mt-[336px] md:mt-[131px] mt-[142px]",
        "lg:mb-60 md:mb-[164px] mb-40"
      )}
    >
      <Container>
        <div className="flex flex-col w-auto items-center text-center">
          <div>
            <div className="lg:mt-8 mt-5 lg:text-6xl md:text-base lg:tracking-normal tracking-[0.03em] text-dark-800 lg:leading-[72px]">
              {t("BlogPostsSection.title")}
            </div>
            <div className="lg:max-w-[623px] lg:mt-5 mt-5 lg:text-xl md:text-base lg:tracking-normal tracking-[0.03em] text-dark-700 font-desc">
              {t("BlogPostsSection.desc")}
            </div>
          </div>
          <div className="flex">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </Container>
    </div>
  );
}

async function getPostsFromPrismic(): Promise<any> {
  const endpoint = prismic.createClient("defichain.com");
  return endpoint.getByType("project");
}

export async function getStaticProps() {
  const blogPosts = await getPostsFromPrismic();
  return {
    props: {
      blogPosts: blogPosts.results.map((r) => ({
        ...r.data,
      })),
    },
  };
}
