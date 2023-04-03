import { Container } from "@components/commons/Container";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import { ExploreCards, ExploreCardsImage } from "../_components/ExploreCards";
import { MasternodesStatisticsDisplay } from "./_components/MasternodesStatisticsDisplay";

export default function ExploreMasternodes() {
  const { t } = useTranslation("page-explore-masternodes");
  const entries: Array<{ title: string; subtitle: string }> = t(
    "footerCards.cards",
    { returnObjects: true }
  );
  return (
    <div className="relative z-10">
      <HeroBanner
        title={t("heroBanner.title")}
        subtitle={t("heroBanner.subtitle")}
        desc={t("heroBanner.desc")}
        heroBg={HeroBannerBg.CUBE}
        hasStartExploringButton
        startExploringJumpLink="#statistics_display_masternodes"
      />
      <MasternodesStatisticsDisplay />
      <Container className="lg:mb-8 md:mb-6 mb-4">
        <div className="flex flex-row overflow-x-scroll lg:gap-x-8 md:gap-x-6 gap-x-4">
          <ExploreCards
            title={t("footerCards.cardTitle")}
            desc={entries[0].title}
            bgImage={ExploreCardsImage.PHONE}
            href=""
          />
          <ExploreCards
            title={t("footerCards.cardTitle")}
            desc={entries[1].title}
            bgImage={ExploreCardsImage.METALCOIN}
            href=""
          />
        </div>
      </Container>
    </div>
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
        "page-explore-masternodes",
      ])),
    },
  };
}
