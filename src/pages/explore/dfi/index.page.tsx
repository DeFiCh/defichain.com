import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DFIStatisticsDisplay } from "./_components/DFIStatisticsDisplay";

export default function ExploreDFI() {
  const { t } = useTranslation("page-explore-dfi");
  return (
    <>
      <HeroBanner
        title={t("heroBanner.title")}
        subtitle={t("heroBanner.subtitle")}
        desc={t("heroBanner.desc")}
        heroBg={HeroBannerBg.DFI_COIN}
        hasStartExploringButton
        startExploringJumpLink="/"
      />
      <DFIStatisticsDisplay />
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
        "page-explore-dfi",
      ])),
    },
  };
}
