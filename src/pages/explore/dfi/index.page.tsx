import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@components/commons/Container";
import { DFIStatisticsDisplay } from "./_components/DFIStatisticsDisplay";
import HarnessDFISection from "./_components/HarnessDFISection";
import GetDFISection from "./_components/GetDFISection";
import { ExploreCards, ExploreCardsImage } from "../_components/ExploreCards";

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
        startExploringJumpLink="#statistics_display_dfi"
      />
      <DFIStatisticsDisplay />
      <HarnessDFISection />
      <GetDFISection />
      <Container className="lg:mb-8 md:mb-6 mb-4">
        <div className="flex flex-row overflow-x-scroll lg:gap-x-8 md:gap-x-6 gap-x-4">
          <ExploreCards
            title={t("footerCards.wallet.title")}
            desc={t("footerCards.wallet.subtitle")}
            bgImage={ExploreCardsImage.PHONE}
            href=""
          />
          <ExploreCards
            title={t("footerCards.dapps.title")}
            desc={t("footerCards.dapps.subtitle")}
            bgImage={ExploreCardsImage.DAPPS}
            href=""
          />
        </div>
      </Container>
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
