import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { useDeviceDetect, ViewPort } from "@hooks/useDeviceDetect";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { Card } from "./components/Card";

export function DeFiChainEcoSystemSection(): JSX.Element {
  const dimensions = useWindowDimensions();
  const { t } = useTranslation("page-index");
  const sectionTitle = t("EcosystemSection.title").split(" ");
  const device = useDeviceDetect();

  return (
    <div
      className={classNames("relative lg:pt-[136px]", {
        "overflow-hidden": device === ViewPort.DESKTOP,
        "pb-[292px]": device === ViewPort.TABLET,
      })}
    >
      <Container
        className={classNames(
          "no-scrollbar z-10 relative lg:flex lg:justify-center",
          { "flexbox-wrapper": dimensions.width >= 1033 } // only apply styling when in large screen
        )}
      >
        <div
          className={classNames(
            "lg:pl-[144px] lg:order-1 md:pb-[72px] pb-[48px]",
            { "sticky-container": dimensions.width >= 1033 } // only apply styling when in large screen
          )}
        >
          <SectionTitle
            text={t("EcosystemSection.label")}
            customStyle="lg:w-fit md:w-[409px] w-[272px]"
          />
          <span className="block lg:text-6xl text-[40px] leading-[44px] max-w-[560px] pt-[20px] lg:leading-[72px]">
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
            </span>
          </span>
        </div>
        <div className="lg:block lg:h-[639px] lg:place-self-end">
          <Card
            title={t("EcosystemSection.cards.investTitle")}
            subTitle={t("EcosystemSection.cards.investSubtitle")}
            customIconStyle="w-[100%] right-0 top-0"
            id="invest"
            customTextStyle="xs:w-full md:w-[70%] lg:w-[251px]"
          />
          <Card
            title={t("EcosystemSection.cards.masternodeTitle")}
            subTitle={t("EcosystemSection.cards.masternodeSubtitle")}
            customIconStyle="w-[307px] right-0 top-0 bottom-[-23.26%]"
            id="masternode"
            customTextStyle="w-[45%]"
          />
          <Card
            title={t("EcosystemSection.cards.dappsTitle")}
            subTitle={t("EcosystemSection.cards.dappsSubtitle")}
            customIconStyle={classNames("w-[100%] top-0", {
              "right-0": dimensions.width > 768,
              "right-[-7em]": dimensions.width <= 768,
            })}
            id="dapps"
            customTextStyle="w-[50%]"
          />
          <Card
            title={t("EcosystemSection.cards.quantumTitle")}
            subTitle={t("EcosystemSection.cards.quantumSubtitle")}
            customIconStyle={classNames("top-[-430px] left-[-280px]", {
              "right-0": dimensions.width > 768,
              "right-[-3em]": dimensions.width <= 768,
            })}
            id="quantum"
            customTextStyle="w-11/12 md:w-[251px]"
          />
        </div>
      </Container>
      <div
        className={classNames(
          "absolute h-1/3 w-1/3 lg:bottom-[200px] md:bottom-[100px] left-0 bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/ecosystem/dfi-logo-vector.png')]",
          {
            "h-[475px] w-[475px] left-[-300px] top-[300px]":
              dimensions.width <= 700,
          }
        )}
      />
      <div
        className={classNames(
          "absolute h-1/4 w-1/4 bottom-0 right-[21px] bg-contain bg-no-repeat mix-blend-screen bg-bottom md:bg-right bg-[url('/assets/img/footer/arrow_1.png')]",
          {
            "bottom-[225px] right-[-110px]": dimensions.width < 900,
          },
          {
            "top-[400px] right-[-220px] h-[300px] w-[300px]":
              dimensions.width < 596,
          }
        )}
      />
    </div>
  );
}
