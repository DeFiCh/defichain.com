import { Container } from "@components/commons/Container";
import classNames from "classnames";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const cardItems = [
  {
    title: "Invest, Trade and Earn with DeFiChain",
    subTitle: "Learn More",
    img: "meta-dfi-coin-1",
    imgOnHover: "meta-dfi-coin-hover",
    id: "invest",
    href: "",
  },
  {
    title: "Own a Masternode",
    subTitle: "Get Started",
    img: "glass-cube",
    imgOnHover: "glass-cube-hover",
    id: "masternode",
    href: "",
  },
  {
    title: "dApps for DeFiChain",
    subTitle: "Explore",
    img: "wallet-apps",
    imgOnHover: "wallet-apps-hover",
    id: "dapps",
    href: "",
  },
  {
    title: "Connecting blockchains with Quantum",
    subTitle: "Learn More",
    img: "wallet-apps",
    imgOnHover: "wallet-apps-hover",
    id: "quantum",
    href: "",
  },
];

// TODO translations
export function DeFiChainEcoSystemSection(): JSX.Element {
  // check if the card is being hovered, if yes, change text color
  const [hoverState, setHoverState] = useState<string | undefined>(undefined);

  // TODO
  // animation of svg
  // unscrollable area

  return (
    <div className="pt-48px md: pt-[96px] lg:pt-[292px]">
      <Container className="relative md:grid md:grid-flow-row md:grid-cols-1 lg:grid lg:grid-flow-col md:mt-[24px]">
        <div
          className="flex lg:order-1 flex-col md:pb-[72px] pb-[48px] lg:pb-0"
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
        <div className="scrollbar grid grid-flow-row grid-cols-1 gap-6 md:grid-flow-row md:grid-cols-2 lg:block lg:h-[639px] lg:overflow-y-auto">
          {cardItems.map((item) => (
            <div
              onMouseEnter={() => {
                setHoverState(item.id);
              }}
              onMouseLeave={() => {
                setHoverState(undefined);
              }}
              className={classNames(
                "p-[0.5px] rounded-[15px] h-[215px] w-full xs:w-[327px] lg:w-[487px] xl:h-[215]",
                "md:block md:mb-[24px]",
                "bg-dark-200 hover:accent-gradient-1 hover:transition-all hover:duration-300"
              )}
            >
              <a
                href={item.href}
                className={classNames(
                  "w-full h-full p-8 rounded-[15px] border-[0.5px] flex flex-col",
                  "border-dark-200 bg-dark-00 bg-cover bg-no-repeat bg-right-top",
                  "transition-all duration-300"
                )}
                style={{
                  backgroundImage: `url(/assets/img/ecosystem/${item.img}.png`,
                }}
              >
                <span
                  className={classNames("w-[47%] text-2xl", {
                    "accent-dfc-gradient-text":
                      hoverState !== undefined && hoverState === item.id,
                  })}
                >
                  {item.title}
                </span>
                <div
                  className={classNames(
                    "text-base text-dark-500 max-w-[178px] mt-2 flex flex-row items-center"
                  )}
                >
                  {item.subTitle}
                  <FiArrowUpRight size={20} className="ml-[13px]" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
