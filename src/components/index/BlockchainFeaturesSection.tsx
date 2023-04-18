// import { Button } from "@components/commons/Buttons";
import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import { SectionTitle } from "@components/commons/SectionTitle";
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
    dotsClass: "blockchain-features-dots",
  };

  return (
    <section
      className="lg:py-[156px] md:py-24 pt-20 pb-12"
      data-testid="BlockchainFeatureSection"
    >
      <Container className="flex flex-col justify-between lg:flex-row 2xl:max-w-[1920px] 2xl:mx-[300px]">
        <div className="flex lg:w-[504px]">
          <div
            className="w-full flex flex-col space-y-5 md:space-y-5 lg:mt-32 lg:space-y-5"
            data-testid="blockchain-feature-section-text"
          >
            <SectionTitle
              text={t("BlockchainFeatureSection.subtitle")}
              testID="non-turing-complete-blockchain"
            />
            <h2
              className="text-[40px] leading-[44px] tracking-[-0.02em] lg:text-6xl lg:leading-[72px] lg:tracking-normal"
              data-testid={`section-header-${separatedTitle}`}
            >
              {separatedTitle.map((word, index) =>
                index === 2 ? (
                  <span key={`${word}`}>
                    <br />
                    <span
                      className="text-electric"
                      key={`${word}`}
                    >{`${word} `}</span>
                  </span>
                ) : (
                  <span key={`${word}`}>{`${word} `}</span>
                )
              )}
            </h2>
            <div
              className="text-dark-700 tracking-[.03em] lg:text-xl lg:tracking-normal font-desc"
              data-testid={`section-desc-${separatedTitle}`}
            >
              {t("BlockchainFeatureSection.desc")}
            </div>
            {/* TODO: uncomment after mvp */}
            {/* <Button
              className="z-10 text-sm min-w-0 w-[206px] py-3 !mt-[23px] md:!mt-9 lg:text-base lg:w-[232px] lg:py-4 lg:!mt-10"
              text={t("BlockchainFeatureSection.button")}
            /> */}
          </div>
        </div>
        <div className="z-10 justify-between hidden md:flex md:gap-x-16 lg:w-[568px] lg:gap-x-10 w-full lg:px-12 mt-14 md:mt-[72px] lg:mt-0">
          <BlockchainFeatureColumn
            items={BlockchainFeatureItems}
            id="tablet-desktop-screen"
          />
        </div>
        <div className="block z-0 md:z-[-1] mt-[56.5px] md:hidden">
          <Slider {...sliderSettings}>
            <BlockchainFeatureColumn
              items={BlockchainFeatureItems.slice(0, 3)}
              id="mobile-screen"
            />
            <BlockchainFeatureColumn
              items={BlockchainFeatureItems.slice(3)}
              id="mobile-screen"
            />
          </Slider>
        </div>
      </Container>
    </section>
  );
}
