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
      <div className="py-16 md:py-10 lg:py-16 border-b border-gray-800 border-opacity-50">
        <Container className="flex flex-row gap-x-12 relative lg:pr-12">
          <div className="block absolute w-[417px] h-[237px] top-[-158px] left-[-267px] md:top-[-42px] md:left-[-281px] lg:h-[297px] bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/mnTechnicalGuide/emptyCubeDesktop.png')]" />
          <div className="hidden lg:block md:w-3/12">&nbsp;</div>
          <div className="flex flex-col w-full lg:w-9/12 md:px-6 lg:px-0">
            <div
              className={classNames(
                "flex flex-col gap-y-5 w-full lg:w-[812px]"
              )}
            >
              <SectionTitle text={t("technicalGuide.title")} />
              <SectionSubTitle text={t("technicalGuide.subtitle")} />
              <SectionDescription
                text={t("technicalGuide.desc")}
                customStyle="!text-base !tracking-[.03em] lg:!tracking-normal lg:!text-xl lg:!leading-7"
              />
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
