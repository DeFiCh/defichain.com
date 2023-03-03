import { Container } from "@components/commons/Container";
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

// TODO translations
export function DeFiChainEcoSystemSection(): JSX.Element {
  const [hoverState, setHoverState] = useState<string | undefined>(undefined);

  // TODO
  // animation of svg
  // unscrollable area

  return (
    <div className="pt-48px md: pt-[96px] lg:pt-[292px]">
      <Container className="relative lg:flex lg:justify-center md:mt-[24px]">
        <div
          className="lg:pl-[144px] lg:order-1 md:pb-[72px] pb-[48px] lg:pb-0"
          id="unscrollable-section"
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
          <div className="absolute hidden lg:block h-1/4 w-1/4 bottom-0 right-0 bg-contain bg-no-repeat mix-blend-screen bg-bottom md:bg-right bg-[url('/assets/img/footer/arrow_1.png')]" />
        </div>
        <div>
          <div className="no-scrollbar grid grid-flow-row grid-cols-1 gap-6 md:grid-flow-row md:grid-cols-2 lg:block lg:h-[639px] lg:overflow-y-auto lg:place-self-end">
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
        </div>
      </Container>
    </div>
  );
}
