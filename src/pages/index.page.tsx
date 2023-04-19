import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HomePageHeader } from "@components/index/HomePageHeader";
import { BlockchainFeaturesSection } from "@components/index/BlockchainFeaturesSection";
import { Head } from "@components/commons/Head";
import { DeFiChainEcoSystemSection } from "@components/index/DeFiChainEcoSystemSection";
import { StatsDisplay } from "@components/index/StatisticsDisplay";
import { ReadyForFlexibility } from "@components/index/ReadyForFlexibility";
import { Container } from "@components/commons/Container";
import { StartExploringButton } from "@components/commons/StartExploringButton";
import { YearAheadRoadMapSection } from "@components/index/RoadMapSection";
import { BlogPostsSection } from "@components/index/blogPosts/BlogPostsSection";
import * as prismic from "@prismicio/client";

export default function HomePage({ blogPosts }): JSX.Element {
  const { t } = useTranslation(["page-index"]);

  return (
    <>
      <Head title={t("Header.title")} />
      <HomePageHeader />
      <Container className="justify-center md:mt-0 mt-9 hidden md:flex relative z-10">
        <StartExploringButton startExploringJumpLink="#statistics_display" />
      </Container>
      <StatsDisplay />
      <BlockchainFeaturesSection />
      <DeFiChainEcoSystemSection />
      <ReadyForFlexibility />
      <YearAheadRoadMapSection />
      <BlogPostsSection blogPosts={blogPosts} />
    </>
  );
}
async function getPostsFromPrismic(): Promise<any> {
  const endpoint = prismic.createClient("defichain");
  return endpoint.getByType("news");
}

export async function getStaticProps({ locale }) {
  const blogPosts = await getPostsFromPrismic();
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "layout",
        "page-index",
      ])),
      blogPosts: blogPosts.results.map((r) => ({
        ...r.data,
      })),
    },
  };
}
