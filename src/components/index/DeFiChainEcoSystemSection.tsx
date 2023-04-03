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
      className={classNames("relative lg:pt-[136px] md:-mb-6 lg:mb-0", {
        "overflow-hidden": device === ViewPort.DESKTOP,
        "pb-[292px]": device === ViewPort.TABLET && dimensions.width > 1500, // for bigger ipad sizes
      })}
    >
      <Container
        className={classNames(
          "relative no-scrollbar z-20 justify-between",
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

          <div
            className={classNames(
              "absolute bg-contain bg-no-repeat hidden lg:block h-[500px] w-full bg-[url('/assets/img/footer/arrow_1.png')]",
              "lg:left-20 lg:top-[300px] xl:left-[350px] xl:top-[250px]"
            )}
          />
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-6 md:grid-flow-row md:grid-cols-2 md:gap-y-0 lg:block lg:h-[639px] lg:place-self-end">
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
            customIconStyle={classNames("w-[400px] top-0", {
              "right-0": dimensions.width > 768,
              "right-[-8em]": dimensions.width <= 768,
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
          "absolute bg-contain bg-no-repeat bg-[url('/assets/img/ecosystem/dfi-logo-vector.png')] w-full",
          "lg:bg-center lg:top-60 lg:left-[-690px] md:h-[300px] md:top-[250px] md:left-[-50px] sm:h-[200px] sm:top-[400px]",
          "bg-left top-[400px] right-10 h-[250px]"
        )}
      />
    </div>
  );
}
