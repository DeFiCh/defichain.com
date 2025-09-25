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
import { useTranslation } from "../hooks/useTranslation";
import { getBlogspotPosts, type Post } from "../lib/blogspotApi";

export default function HomePage({
  blogPosts,
}: {
  blogPosts: Post[];
}): JSX.Element {
  const { t } = useTranslation("page-index");

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
      <BlogPostsSection blogPosts={Array.isArray(blogPosts) ? blogPosts : []} />
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getBlogspotPosts();
  return { props: { blogPosts: posts.slice(0, 8) } };
}
