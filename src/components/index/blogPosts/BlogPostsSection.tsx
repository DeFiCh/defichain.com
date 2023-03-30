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
        "lg:mt-36 md:mt-[131px] mt-[142px]",
        "lg:mb-60 md:mb-[164px] mb-40"
      )}
    >
      <Container>
        <div className="flex flex-col w-auto items-center lg:text-center">
          <div className="w-full">
            <div className="tracking-[-0.02em] text-dark-800 text-[40px] leading-[44px] lg:tracking-normal lg:text-6xl lg:leading-[72px]">
              {t("BlogPostsSection.title")}
            </div>
            <div className="mt-5 mx-0 tracking-[0.03em] text-dark-700 font-desc text-base md:max-w-[516px] lg:max-w-[623px] lg:text-xl lg:tracking-normal lg:mx-auto">
              {t("BlogPostsSection.desc")}
            </div>
          </div>
          <div className="flex mt-12 flex-wrap justify-between lg:space-x-6">
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
