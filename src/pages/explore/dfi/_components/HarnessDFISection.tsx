import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import classNames from "classnames";
import Slider from "react-slick";
import { useTranslation } from "next-i18next";
import { HarnessDFIGrid, HarnessDFIICONS } from "./HarnessDFIGrid";

export default function HarnessDFISection() {
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    dotsClass: "harness-dfi-dots",
  };

  const { t } = useTranslation("page-explore-dfi");
  const entries: Array<{ title; desc }> = t("harnessDFISection.items", {
    returnObjects: true,
  });

  const harnessDFIItems = [
    {
      title: entries[0].title,
      desc: entries[0].desc,
      icon: HarnessDFIICONS.VARIETY,
    },
    {
      title: entries[1].title,
      desc: entries[1].desc,
      icon: HarnessDFIICONS.COLLATERAL,
    },
    {
      title: entries[2].title,
      desc: entries[2].desc,
      icon: HarnessDFIICONS.MASTERNODE,
    },
    {
      title: entries[3].title,
      desc: entries[3].desc,
      icon: HarnessDFIICONS.TOKENIZATION,
    },
    {
      title: entries[4].title,
      desc: entries[4].desc,
      icon: HarnessDFIICONS.COMMUNITY,
    },
    {
      title: entries[5].title,
      desc: entries[5].desc,
      icon: HarnessDFIICONS.POOLS,
    },
  ];

  return (
    <Container className="lg:mb-[303px] md:mb-[180px] mb-24 relative z-[10]">
      <div className="flex flex-col w-full mx-auto gap-y-5">
        <div className="flex md:justify-center justify-start">
          <SectionTitle text={t("harnessDFISection.title")} />
        </div>

        <h2
          className={classNames(
            "lg:text-[60px] lg:leading-[72px] md:text-[40px] md:leading-[44px] text-[32px] leading-[36px]",
            "text-dark-1000 md:text-center text-left"
          )}
        >
          {t("harnessDFISection.subtitle")}
        </h2>
        <div
          className={classNames(
            "lg:text-xl text-base font-desc lg:w-[60%] w-full md:place-self-center",
            "lg:tracking-normal tracking-[0.03em]",
            "text-dark-700 md:text-center text-left"
          )}
        >
          {t("harnessDFISection.desc")}
        </div>
      </div>
      <div className="flex justify-center mt-16 hidden md:flex">
        <HarnessDFIGrid gridItems={harnessDFIItems} />
      </div>
      <div className="block md:hidden mt-16">
        <Slider {...sliderSettings}>
          <HarnessDFIGrid gridItems={harnessDFIItems.slice(0, 3)} isMobile />
          <HarnessDFIGrid gridItems={harnessDFIItems.slice(3)} isMobile />
        </Slider>
      </div>
      <div
        className={classNames(
          "absolute bg-contain bg-no-repeat ",
          "lg:h-[45px] lg:w-[45px] lg:right-[2.3em]",
          "md:h-8 md:w-8 md:-right-[0.25em] md:bottom-[8em]",
          "h-7 w-7 -right-[0.8em] bottom-[15em]",
          "bg-[url('/assets/img/background/explore/masternodes/masternodesBenefitsBg.png')]"
        )}
      />
      <div
        className={classNames(
          "absolute bg-contain bg-no-repeat z-[-1]",
          "lg:h-[682px] lg:w-[341.33px] lg:-bottom-[50em] lg:-right-[1em]",
          "md:h-[480px] md:w-[240.24px] md:-right-[2.5em] md:-bottom-[35em] md:left-auto",
          "w-[203.76px] h-[152.08px] left-[12.5em] -bottom-[3.5em]",
          "md:bg-[url('/assets/img/background/explore/dfi/harness-accent-desktop.png')]",
          "bg-[url('/assets/img/background/explore/dfi/harness-accent-mobile.png')]"
        )}
      />
    </Container>
  );
}
