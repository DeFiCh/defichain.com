import { Container } from "@components/commons/Container";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HeroBanner, HeroBannerBG } from "@components/commons/HeroBanner";
import { ExploreCards, ExploreCardsImage } from "../_components/ExploreCards";

export default function ExploreMasternodes() {
  const { t } = useTranslation("page-explore");
  const entries: Array<{ title: string; subtitle: string }> = t(
    "masternodes.footerCards.cards",
    { returnObjects: true }
  );
  return (
    <>
      <HeroBanner
        title={t("masternodes.heroBanner.title")}
        subtitle={t("masternodes.heroBanner.subtitle")}
        desc={t("masternodes.heroBanner.desc")}
        heroBG={HeroBannerBG.CUBE}
        startExploring
        startExploringJumpLink=""
      />
      <Container className="lg:mb-8 md:mb-6 mb-4">
        <div className="flex flex-row overflow-x-scroll lg:gap-x-[32.97px] md:gap-x-[24.97px] gap-x-[16.97px]">
          <ExploreCards
            title={t("masternodes.footerCards.cardTitle")}
            desc={entries[0].title}
            bgImage={ExploreCardsImage.PHONE}
            href=""
          />
          <ExploreCards
            title={t("masternodes.footerCards.cardTitle")}
            desc={entries[1].title}
            bgImage={ExploreCardsImage.METALCOIN}
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
        "page-explore",
      ])),
    },
  };
}
