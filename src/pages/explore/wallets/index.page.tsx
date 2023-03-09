import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HeroBanner, HeroBannerBG } from "@components/commons/HeroBanner";

export default function ExploreWallets() {
  const { t } = useTranslation("page-explore");
  return (
    <HeroBanner
      title={t("HeroBanner.title")}
      subtitle={t("HeroBanner.subtitle")}
      desc={t("HeroBanner.desc")}
      heroBG={HeroBannerBG.COIN_ARROW}
      startExploring
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
        "page-explore",
      ])),
    },
  };
}
