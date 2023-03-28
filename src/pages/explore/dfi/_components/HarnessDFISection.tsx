import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import classNames from "classnames";
import Slider from "react-slick";
import { HarnessDFIGrid, HarnessDFIICONS } from "./HarnessDFIGrid";

export default function HarnessDFISection() {
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    dotsClass: "custom-dots",
  };

  const harnessDFIItems = [
    {
      title: "WIDE VARIETY OF DEFI SERVICES",
      desc: "With minimal DFI fees, you have access to DeFi Applications",
      icon: HarnessDFIICONS.VARIETY,
    },
    {
      title: "STORE AS COLLATERAL",
      desc: "Borrow decentralized assets using crypto tokens as collateral",
      icon: HarnessDFIICONS.COLLATERAL,
    },
    {
      title: "BE A MASTERNODE OWNER",
      desc: "Fund a new staking node for just 20,000 DFI",
      icon: HarnessDFIICONS.MASTERNODE,
    },
    {
      title: "TOKENIZATION",
      desc: "Tokenize assets, manage and trade with dTokens",
      icon: HarnessDFIICONS.TOKENIZATION,
    },
    {
      title: "COMMUNITY FUND GOVERNANCE",
      desc: "Participate in shaping the future of the blockchain",
      icon: HarnessDFIICONS.COMMUNITY,
    },
    {
      title: "EARN FROM LIQUIDITY POOLS",
      desc: "Earn rewards by providing liquidity on DEX",
      icon: HarnessDFIICONS.POOLS,
    },
  ];

  return (
    <Container className="lg:mb-[417px] md:mb-[180px] mb-24">
      <div className="flex flex-col w-full mx-auto gap-y-5">
        <div className="flex md:justify-center justify-start">
          <SectionTitle text="BUILDING A BETTER TOMORROW WITH DFI" />
        </div>

        <h2
          className={classNames(
            "lg:text-[60px] lg:leading-[72px] md:text-[40px] md:leading-[44px] text-[32px] leading-[36px]",
            "text-dark-1000 md:text-center text-left"
          )}
        >
          Harness the power of DFI
        </h2>
        <div
          className={classNames(
            "lg:text-xl text-base font-desc lg:w-[60%] w-full md:place-self-center",
            "lg:tracking-normal tracking-[0.03em]",
            "text-dark-700 md:text-center text-left"
          )}
        >
          A gateway to decentralized applications and tools, offering potential
          for greater returns, lower fees, and democratic governance.
        </div>
      </div>
      <div className="flex justify-center mt-16 hidden md:flex">
        <HarnessDFIGrid gridItems={harnessDFIItems} />
      </div>
      <div className="block md:hidden mt-16">
        <Slider {...sliderSettings}>
          <HarnessDFIGrid gridItems={harnessDFIItems.slice(0, 3)} />
          <HarnessDFIGrid gridItems={harnessDFIItems.slice(3)} />
        </Slider>
      </div>
    </Container>
  );
}
