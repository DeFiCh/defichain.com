// import { Container } from "@components/commons/Container";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
// import { ExploreCards, ExploreCardsImage } from "../_components/ExploreCards";
import { AdvanceUsageSection } from "./_components/AdvanceUsageSection";
import { ForDailyUseSection } from "./_components/ForDailyUseSection";

export default function ExploreWallets() {
  const { t } = useTranslation("page-explore-wallets");
  // const entries: Array<{ title: string; subtitle: string }> = t(
  //   "footerCards.cards",
  //   { returnObjects: true }
  // );
  return (
    <>
      <HeroBanner
        title={t("heroBanner.title")}
        subtitle={t("heroBanner.subtitle")}
        desc={t("heroBanner.desc")}
        heroBg={HeroBannerBg.COIN_ARROW}
        hasStartExploringButton
        startExploringJumpLink="#explore-wallets-daily-use-section"
      />
      <ForDailyUseSection />
      <AdvanceUsageSection />
      {/* TODO: uncomment after mvp */}
      {/* <Container className="lg:mb-8 md:mb-6 mb-4">
        <div className="flex flex-row overflow-x-scroll lg:gap-x-8 md:gap-x-6 gap-x-4">
          <ExploreCards
            title={t("footerCards.cardTitle")}
            desc={entries[0].title}
            bgImage={ExploreCardsImage.DIAMONDCOIN}
            href="/explore/dex"
          />
          <ExploreCards
            title={t("footerCards.cardTitle")}
            desc={entries[1].title}
            bgImage={ExploreCardsImage.METALCOIN}
            href="/explore/dfi"
          />
        </div>
      </Container> */}
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
        "page-explore-wallets",
      ])),
    },
  };
}
