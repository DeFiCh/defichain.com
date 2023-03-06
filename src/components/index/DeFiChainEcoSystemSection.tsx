import { Container } from "@components/commons/Container";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import classNames from "classnames";
import { useState } from "react";
import { Card } from "./components/Card";

const cardItems = [
  {
    title: "Invest, Trade and Earn with DeFiChain",
    subTitle: "Learn More",
    img: "meta-dfi-coin",
    id: "invest",
    href: "",
    customStyle: "xs:w-full md:w-[251px]",
  },
  {
    title: "Own a Masternode",
    subTitle: "Get Started",
    img: "glass-cube",
    id: "masternode",
    href: "",
    customStyle: "w-1/2",
  },
  {
    title: "dApps for DeFiChain",
    subTitle: "Explore",
    img: "wallet-apps",
    id: "dapps",
    href: "",
    customStyle: "w-1/2",
    mobileImg: "wallet-apps-mobile",
  },
  {
    title: "Connecting blockchains with Quantum",
    subTitle: "Learn More",
    img: "quantum",
    id: "quantum",
    href: "",
    customStyle: "w-11/12 md:w-[251px]",
  },
];

export function DeFiChainEcoSystemSection(): JSX.Element {
  const [hoverState, setHoverState] = useState<string | undefined>(undefined);
  const dimensions = useWindowDimensions();

  // TODO
  // animation of svg
  // remove unused code
  // translations

  return (
    <div className="relative overflow-hidden pt-48px md:pt-[96px] lg:pt-[292px]">
      <Container
        className={classNames(
          "no-scrollbar z-10 relative lg:flex lg:justify-center md:mt-[24px]",
          { "flexbox-wrapper": dimensions.width >= 1033 } // only apply styling when in large screen
        )}
      >
        <div
          className={classNames(
            "lg:pl-[144px] lg:order-1 md:pb-[72px] pb-[48px] lg:pb-0",
            { "sticky-container": dimensions.width >= 1033 } // only apply styling when in large screen
          )}
        >
          <div className="md:w-[316px] leading-4 bg-clip-text text-transparent accent-gradient-1">
            JUMPSTART INTO DEFICHAIN ECOSYSTEM
          </div>
          <span className="block lg:text-6xl text-[40px] leading-[44px] max-w-[560px] pt-[20px] lg:leading-[72px]">
            <span className="">Constant evolution </span>
            <span className="">to</span>
            <span className="md:block lg:inline">
              <span className="text-electric"> build, deliver</span>
              <span> and </span>
              <span className="text-electric">outperform</span>
            </span>
          </span>
        </div>
        <div className="no-scrollbar grid grid-flow-row grid-cols-1 gap-6 md:grid-flow-row md:grid-cols-2 lg:block lg:h-[639px] lg:place-self-end">
          <Card
            content={cardItems[0]}
            setHoverState={setHoverState}
            hoverState={hoverState}
          />
          <Card
            content={cardItems[1]}
            setHoverState={setHoverState}
            hoverState={hoverState}
          />
          <Card
            content={cardItems[2]}
            setHoverState={setHoverState}
            hoverState={hoverState}
          />
          <Card
            content={cardItems[3]}
            setHoverState={setHoverState}
            hoverState={hoverState}
          />
        </div>
      </Container>
      <div
        className={classNames(
          "absolute h-1/3 w-1/3 lg:bottom-[200px] md:bottom-[100px] left-0 bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/ecosystem/defichain-logo-outline.png')]",
          {
            "h-[475px] w-[475px] left-[-300px] top-[300px]":
              dimensions.width <= 700,
          }
        )}
      />
      <div
        className={classNames(
          "absolute h-1/3 w-1/3 bottom-0 right-[21px] bg-contain bg-no-repeat mix-blend-screen bg-bottom md:bg-right bg-[url('/assets/img/footer/arrow_1.png')]",
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
