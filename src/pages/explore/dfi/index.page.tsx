import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import { Head } from "@components/commons/Head";
import { useTranslation } from "../../../hooks/useTranslation";
// import { Container } from "@components/commons/Container";
import { DFIStatisticsDisplay } from "./_components/DFIStatisticsDisplay";
import HarnessDFISection from "./_components/HarnessDFISection";
import GetDFISection from "./_components/GetDFISection";
// import { ExploreCards, ExploreCardsImage } from "../_components/ExploreCards";
import { InitialTokenDistributionSection } from "./_components/InitialTokenDistributionSection";
import ERC20Section from "./_components/ERC20Section";

export default function ExploreDFI() {
  const { t } = useTranslation("page-explore-dfi");
  return (
    <>
      <Head title={t("heroBanner.subtitle")} />
      <HeroBanner
        title={t("heroBanner.title")}
        subtitle={t("heroBanner.subtitle")}
        desc={t("heroBanner.desc")}
        heroBg={HeroBannerBg.DFI_COIN}
        hasStartExploringButton
        startExploringJumpLink="#statistics-display-dfi"
        testID="explore-dfi"
      />
      <DFIStatisticsDisplay />
      <HarnessDFISection />
      <InitialTokenDistributionSection />
      <GetDFISection />
      <ERC20Section />
      {/* TODO: uncomment after mvp */}
      {/* <Container className="lg:mb-8 md:mb-6 mb-4">
        <div className="flex flex-row overflow-x-scroll lg:gap-x-8 md:gap-x-6 gap-x-4">
          <ExploreCards
            title={t("footerCards.wallet.title")}
            desc={t("footerCards.wallet.subtitle")}
            bgImage={ExploreCardsImage.PHONE}
            href="/explore/wallets"
          />
          <ExploreCards
            title={t("footerCards.dapps.title")}
            desc={t("footerCards.dapps.subtitle")}
            bgImage={ExploreCardsImage.DAPPS}
            href=""
          />
        </div>
      </Container> */}
    </>
  );
}
