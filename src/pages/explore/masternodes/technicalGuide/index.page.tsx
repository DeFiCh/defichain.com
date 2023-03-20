import { Container } from "@components/commons/Container";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SectionTitle } from "@components/commons/SectionTitle";
import { SectionSubTitle } from "@components/commons/SectionSubTitle";
import { SectionDescription } from "@components/commons/SectionDescription";
import classNames from "classnames";
import {
  ExploreCards,
  ExploreCardsImage,
} from "../../_components/ExploreCards";
import { MasternodesSetupInfo } from "./_components/MasternodesSetupInfo";

export default function TechnicalGuide() {
  const { t } = useTranslation("page-explore-masternodes");
  const entries: Array<{ title: string; subtitle: string }> = t(
    "footerCards.cards",
    { returnObjects: true }
  );

  return (
    <>
      <div
        className="py-16 md:py-10 lg:py-16"
        style={{
          backgroundImage:
            "url('/assets/img/mnTechnicalGuide/emptyCubeDesktop.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
        }}
      >
        <Container className="flex flex-row gap-x-12 ">
          <div className="hidden md:block md:w-3/12">&nbsp;</div>
          <div className="flex flex-col md:w-9/12">
            <div className={classNames("flex flex-col gap-y-5")}>
              <SectionTitle text={t("technicalGuide.title")} />
              <SectionSubTitle text={t("technicalGuide.subtitle")} />
              <SectionDescription text={t("technicalGuide.desc")} />
            </div>
          </div>
        </Container>
      </div>
      <MasternodesSetupInfo />
      <Container className="lg:mb-8 md:mb-6 mb-4">
        <div className="flex flex-row overflow-x-scroll lg:gap-x-[32.97px] md:gap-x-[24.97px] gap-x-[16.97px]">
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
        "page-explore-masternodes",
      ])),
    },
  };
}
