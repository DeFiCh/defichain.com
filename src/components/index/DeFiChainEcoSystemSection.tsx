import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { useDeviceDetect, ViewPort } from "@hooks/useDeviceDetect";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Card } from "./components/Card";

export function DeFiChainEcoSystemSection(): JSX.Element {
  const dimensions = useWindowDimensions();
  const { t } = useTranslation("page-index");
  const sectionTitle = t("EcosystemSection.title").split(" ");
  const device = useDeviceDetect();
  const router = useRouter();

  return (
    <section
      className={classNames("relative lg:pt-[136px] md:-mb-6 lg:mb-0", {
        "overflow-hidden": device === ViewPort.DESKTOP,
        "pb-[292px]": device === ViewPort.TABLET && dimensions.width > 1500, // for bigger ipad sizes
      })}
    >
      <Container
        className={classNames(
          "relative no-scrollbar z-30 justify-between",
          { "flexbox-wrapper": dimensions.width >= 1023 } // only apply styling when in large screen
        )}
      >
        <div
          className={classNames(
            "relative lg:pl-[144px] lg:order-1 md:pb-[72px] pb-[48px] w-full",
            { "sticky-container": dimensions.width >= 1033 } // only apply styling when in large screen
          )}
        >
          <SectionTitle
            text={t("EcosystemSection.label")}
            customStyle="lg:w-fit md:w-[409px] w-[272px]"
            testID="jumpstart-defichain-ecosystem"
          />
          <h2 className="block lg:text-6xl text-[40px] leading-[44px] max-w-[560px] pt-[20px] lg:leading-[72px]">
            <span>
              {sectionTitle[0]} {sectionTitle[1]}
            </span>
            <span> {sectionTitle[2]} </span>
            <span className="md:block lg:inline">
              <span className="text-electric">
                {sectionTitle[3]} {sectionTitle[4]}
              </span>
              <span> {sectionTitle[5]} </span>
              <span className="text-electric">{sectionTitle[6]}</span>
              {router.locale === "de" && (
                <span>&nbsp;{sectionTitle.slice(7).join(" ")}</span>
              )}
            </span>
          </h2>

          <div
            className={classNames(
              "absolute z-[-1] mix-blend-screen bg-contain bg-no-repeat hidden lg:block h-[400px] w-full bg-[url('/assets/img/footer/arrow_1.png')]",
              "lg:left-20 lg:top-[300px] xl:left-[350px] xl:top-[250px]"
            )}
          />
        </div>

        <div className="relative z-30 grid grid-flow-row grid-cols-1 gap-6 md:grid-flow-row md:grid-cols-2 md:gap-y-0 lg:block lg:h-[639px] lg:place-self-end">
          <Card
            href="/explore/dfi"
            title={t("EcosystemSection.cards.dfiTitle")}
            subTitle={t("EcosystemSection.cards.dfiSubtitle")}
            customIconStyle="w-[100%] lg:right-0 md:right-[10em] right-0 top-0"
            id="dfi"
            customTextStyle="xs:w-full md:w-[70%] lg:w-[251px]"
            testID="all-about-dfi"
          />
          <Card
            href="/explore/dex"
            title={t("EcosystemSection.cards.tradeWithDexTitle")}
            subTitle={t("EcosystemSection.cards.tradeWithDexSubtitle")}
            customIconStyle="w-[307px] right-0 top-0 bottom-[-23.26%]"
            id="dex"
            customTextStyle="w-[45%]"
            testID="trade-with-dex"
          />
          <Card
            href="/explore/wallets"
            title={t("EcosystemSection.cards.walletsTitle")}
            subTitle={t("EcosystemSection.cards.walletsSubtitle")}
            customIconStyle={classNames("w-[400px] top-0", {
              "right-0": dimensions.width > 768,
              "right-[-8em]": dimensions.width <= 768,
            })}
            id="wallets"
            customTextStyle="w-[50%]"
            testID="wallets-for-defichain"
          />
          <Card
            href="/explore/masternodes"
            title={t("EcosystemSection.cards.governanceTitle")}
            subTitle={t("EcosystemSection.cards.governanceSubtitle")}
            customIconStyle={classNames(
              "w-[100%] lg:right-[2em] lg:-top-[5.5em]",
              "md:right-[3.5em] md:-top-[4.5em]",
              "right-0 -top-[4.5em]"
            )}
            id="cube"
            customTextStyle="w-[284px]"
            testID="governance-own-masternode"
          />
        </div>
      </Container>
      <div
        className={classNames(
          "absolute bg-contain bg-no-repeat bg-[url('/assets/img/ecosystem/dfi-logo-vector.png')] w-full",
          "lg:bg-center lg:top-60 lg:left-[-630px] md:h-[300px] md:top-[250px] md:left-[-100px] sm:h-[200px] sm:top-[400px]",
          "bg-left top-[400px] right-10 h-[250px]"
        )}
      />
      <div
        className={classNames(
          "absolute bg-cover bg-right bg-no-repeat bg-[url(/assets/img/accents/accent-9.png)] h-[204px] w-[405px]",
          "lg:hidden block -bottom-40 left-[40%] md:bottom-[-100px] md:left-[70%] md:z-20"
        )}
      />
    </section>
  );
}
