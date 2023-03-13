import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Card } from "./components/Card";

const cardItems = [
  {
    img: "meta-dfi-coin",
    id: "invest",
    href: "",
    customStyle: "xs:w-full md:w-[70%] lg:w-[251px]",
  },
  {
    img: "glass-cube",
    id: "masternode",
    href: "",
    customStyle: "w-[45%]",
  },
  {
    img: "wallet-apps",
    id: "dapps",
    href: "",
    customStyle: "w-[50%]",
  },
  {
    img: "quantum",
    id: "quantum",
    href: "",
    customStyle: "w-11/12 md:w-[251px]",
  },
];

export function DeFiChainEcoSystemSection(): JSX.Element {
  const [hoverState, setHoverState] = useState<string | undefined>(undefined);
  const dimensions = useWindowDimensions();
  const { t } = useTranslation("page-index");
  const sectionTitle = t("EcosystemSection.title").split(" ");

  // TODO
  // animation of svg
  // remove unused code
  // translations

  return (
    <div className="relative overflow-hidden mt-[48px] md:mt-[96px] lg:pt-[292px]">
      <Container
        className={classNames(
          "no-scrollbar z-10 relative lg:flex lg:justify-center md:mt-[24px]",
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
        <div className="no-scrollbar grid grid-flow-row grid-cols-1 gap-6 md:grid-flow-row md:grid-cols-2 lg:block lg:h-[639px] lg:place-self-end">
          <Card
            title={t("EcosystemSection.cards.investTitle")}
            subTitle={t("EcosystemSection.cards.investSubtitle")}
            content={cardItems[0]}
            setHoverState={setHoverState}
            hoverState={hoverState}
            customIconStyle="w-[487.9px] right-0 top-0"
            // TODO styles for animating only coin icon
            // customIconStyle="right-0 top-0 bottom-[-23.26%] w-[307px]"
          />
          <Card
            title={t("EcosystemSection.cards.masternodeTitle")}
            subTitle={t("EcosystemSection.cards.masternodeSubtitle")}
            content={cardItems[1]}
            setHoverState={setHoverState}
            hoverState={hoverState}
            customIconStyle="right-0 top-0 bottom-[-23.26%] w-[307px]"
          />
          <Card
            title={t("EcosystemSection.cards.dappsTitle")}
            subTitle={t("EcosystemSection.cards.dappsSubtitle")}
            content={cardItems[2]}
            setHoverState={setHoverState}
            hoverState={hoverState}
            customIconStyle={classNames("w-[420.9px] top-0", {
              "right-0": dimensions.width > 768,
              "right-[-100px]": dimensions.width <= 768,
            })}
          />
          <Card
            title={t("EcosystemSection.cards.quantumTitle")}
            subTitle={t("EcosystemSection.cards.quantumSubtitle")}
            content={cardItems[3]}
            setHoverState={setHoverState}
            hoverState={hoverState}
            customIconStyle={classNames("left-0 top-0")}
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
