import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";

export default function ExploreWallets() {
  const { t } = useTranslation("page-explore-dex");
  return (
    <HeroBanner
      title={t("heroBanner.title")}
      subtitle={t("heroBanner.subtitle")}
      desc="Inside DeFiChain’s DEX, you are in full control. Trade, Arbitrage, and Earn from your dTokens."
      heroBg={HeroBannerBg.DIAMOND_COIN}
      hasStartExploringButton
      startExploringJumpLink=""
    />
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
