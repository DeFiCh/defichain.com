import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HomePageHeader } from "@components/index/HomePageHeader";
import { BlockchainFeaturesSection } from "@components/index/BlockchainFeaturesSection";
import { Head } from "@components/commons/Head";
import { StatsDisplay } from "@components/index/StatisticsDisplay";
import { ReadyForFlexibility } from "@components/index/ReadyForFlexibility";
import { Container } from "@components/commons/Container";
import { StartExploring } from "@components/commons/StartExploring";

export default function HomePage(): JSX.Element {
  const { t } = useTranslation(["page-index"]);

  return (
    <>
      <Head title={t("Head.title")} description={t("Head.desc")} />
      <HomePageHeader />
      <Container className="justify-center md:mt-0 mt-9 hidden md:flex">
        <StartExploring startExploringJumpLink="#statistics_display" />
      </Container>

      <StatsDisplay />
      <BlockchainFeaturesSection />
      <ReadyForFlexibility />
    </>
  );
}

export async function getStaticProps({
  locale,
}): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "layout",
        "page-index",
      ])),
    },
  };
}
