import { Container } from "@components/commons/Container";
// import Image from "next/image";
// import Link from "next/link";
import { useTranslation } from "next-i18next";
// import { Button } from "@components/commons/Buttons";
import Slider from "react-slick";
import { BlockchainFeatureColumn } from "./BlockchainFeatureColumn";

export const BlockchainFeatureItems = [
  {
    title: "THROUGHPUT",
    desc: "Unparalleled high transaction throughput for all transactions.",
  },
  {
    title: "SECURITY",
    desc: "Turing-incomplete for reduced attack vectors.",
  },
  {
    title: "IMMUTABILITY",
    desc: "Marries the best of Proof-of-Stake, with the security of Bitcoin.",
  },
  {
    title: "DEVELOPMENT",
    desc: "Rapidly create a variety of DeFi apps on one chain.",
  },
  {
    title: "VARIETY",
    desc: "Wide range of crypto-economic financial operations.",
  },
];

export function BlockchainFeaturesSection(): JSX.Element {
  const { t } = useTranslation("page-index");
  const separatedTitle = t("BlockchainFeatureSection.title").split(" ");
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    dotsClass: "custom-dots",
  };

  return (
    <section
      className="py-6 md:py-12 lg:py-[88px]"
      data-testid="BlockchainFeatureSection"
    >
      <Container className="flex flex-col justify-between lg:flex-row">
        <div className="flex lg:w-[504px]">
          <div
            className="w-full flex flex-col space-y-5 md:space-y-4 lg:mt-32 lg:space-y-5"
            data-testid="BlockchainFeatureSection.text"
          >
            <div className="gradient-text leading-4 tracking-[.04em]">
              {t("BlockchainFeatureSection.subtitle")}
            </div>
            <h2
              className="text-[40px] leading-[44px] tracking-[-0.02em] lg:text-6xl lg:leading-[72px] lg:tracking-normal"
              data-testid="title"
            >
              {separatedTitle.map((word, index) =>
                index === 2 ? (
                  <>
                    <br />
                    <span className="text-electric">{`${word} `}</span>
                  </>
                ) : (
                  <span>{`${word} `}</span>
                )
              )}
            </h2>
            <div
              className="text-dark-700 tracking-[.03em] lg:text-xl lg:tracking-normal"
              data-testid="desc"
            >
              {t("BlockchainFeatureSection.desc")}
            </div>
          </div>
        </div>
        <div className="justify-between hidden md:flex md:gap-x-16 lg:w-[568px] lg:gap-x-10 w-full lg:px-12 mt-14 md:mt-[72px] lg:mt-0">
          <BlockchainFeatureColumn items={BlockchainFeatureItems} />
        </div>
        <div className="block mt-14 md:hidden">
          <Slider {...sliderSettings}>
            <BlockchainFeatureColumn
              items={BlockchainFeatureItems.slice(0, 3)}
            />
            <BlockchainFeatureColumn items={BlockchainFeatureItems.slice(3)} />
          </Slider>
        </div>
      </Container>
    </section>
  );
}
