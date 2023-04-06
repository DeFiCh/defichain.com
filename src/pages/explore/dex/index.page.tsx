import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import { DexStatisticsDisplay } from "./_components/DexStatisticsDisplay";
import { WhyDEXSection } from "../dfi/_components/WhyDEXSection";

export default function ExploreWallets() {
  const { t } = useTranslation("page-explore-dex");
  return (
    <>
      <HeroBanner
        title={t("heroBanner.title")}
        subtitle={t("heroBanner.subtitle")}
        desc={t("heroBanner.desc")}
        heroBg={HeroBannerBg.DIAMOND_COIN}
        hasStartExploringButton
        startExploringJumpLink=""
      />
      <DexStatisticsDisplay />
      <WhyDEXSection />
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
        "page-explore-dex",
      ])),
    },
  };
}
