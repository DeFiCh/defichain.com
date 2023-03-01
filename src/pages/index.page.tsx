import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HomePageHeader } from "@components/index/HomePageHeader";
import { CardSection } from "@components/index/CardSection";
import { SolutionSection } from "@components/index/SolutionSection";
import { BenefitsSection } from "@components/index/BenefitsSection";
import { FunctionsSection } from "@components/index/FunctionsSection";
import { RoadmapSection } from "@components/index/roadmap/RoadmapSection";
import { BuiltOnBitcoinSection } from "@components/index/BuiltOnBitcoinSection";
import { DistributionSection } from "@components/index/DistributionSection";
import { Head } from "@components/commons/Head";
import { StatsDisplay } from "@components/index/StatisticsDisplay";
import { StartExploring } from "@components/index/StartExploring";

export default function HomePage(): JSX.Element {
  const { t } = useTranslation(["page-index"]);

  return (
    <>
      <Head title={t("Head.title")} description={t("Head.desc")} />
      <HomePageHeader />
      <StartExploring />
      <StatsDisplay />
      <CardSection />
      <SolutionSection />
      <BenefitsSection />
      <FunctionsSection />
      <BuiltOnBitcoinSection />
      <DistributionSection />
      <RoadmapSection />
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
