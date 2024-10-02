// import { Container } from "@components/commons/Container";
import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
// import { ExploreCards, ExploreCardsImage } from "../_components/ExploreCards";
import { Head } from "@components/commons/Head";
import { useTranslation } from "../../../hooks/useTranslation";
import { MasternodesStatisticsDisplay } from "./_components/MasternodesStatisticsDisplay";
import { MasternodesBenefitsSection } from "./MasternodesBenefitsSection";

export default function ExploreMasternodes() {
  const { t } = useTranslation("page-explore-masternodes");
  // const entries: Array<{ title: string; subtitle: string }> = t(
  //   "footerCards.cards",
  //   { returnObjects: true }
  // );
  return (
    <>
      <Head title={t("heroBanner.subtitle")} />
      <HeroBanner
        title={t("heroBanner.title")}
        subtitle={t("heroBanner.subtitle")}
        desc={t("heroBanner.desc")}
        heroBg={HeroBannerBg.CUBE}
        hasStartExploringButton
        startExploringJumpLink="#statistics_display_masternodes"
        testID="explore-masternodes-learn-about-masternodes"
      />
      <MasternodesStatisticsDisplay />
      <MasternodesBenefitsSection />
      {/* TODO: uncomment after mvp */}
      {/* <Container className="lg:mb-8 md:mb-6 mb-4">
        <div className="flex flex-row overflow-x-scroll lg:gap-x-8 md:gap-x-6 gap-x-4">
          <ExploreCards
            title={t("footerCards.cardTitle")}
            desc={entries[0].title}
            bgImage={ExploreCardsImage.PHONE}
            href="/explore/wallets"
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
