import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import { Head } from "@components/commons/Head";
import { DexStatisticsDisplay } from "./_components/DexStatisticsDisplay";
import { WhyDEXSection } from "./_components/WhyDEXSection";

export default function ExploreWallets() {
  const { t } = useTranslation("page-explore-dex");
  return (
    <>
      <Head title={t("heroBanner.subtitle")} />
      <HeroBanner
        title={t("heroBanner.title")}
        subtitle={t("heroBanner.subtitle")}
        desc={t("heroBanner.desc")}
        heroBg={HeroBannerBg.DIAMOND_COIN}
        hasStartExploringButton
        startExploringJumpLink="#explore-dex-statistics-display"
        testID="explore-dex-decentralized-exchange"
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
      ...(await serverSideTranslations(locale || "en-US", [
        "common",
        "layout",
        "page-explore-dex",
      ])),
    },
  };
}
