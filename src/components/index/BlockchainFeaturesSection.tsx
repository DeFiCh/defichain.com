import { Container } from "@components/commons/Container";
// import Image from "next/image";
// import Link from "next/link";
import { useTranslation } from "next-i18next";
// import { Button } from "@components/commons/Buttons";
import { BlockchainFeatureColumn } from "./BlockchainFeatureColumn";

export const BlockchainFeatureItems = [
  {
    title: "THROUGHPUT",
    desc: "Unparalleled high transaction throughput for all transactions.",
  },
  {
    title: "IMMUTABILITY",
    desc: "Marries the best of Proof-of-Stake, with the security of Bitcoin.",
  },
  {
    title: "VARIETY",
    desc: "Wide range of crypto-economic financial operations.",
  },
  {
    title: "SECURITY",
    desc: "Turing-incomplete for reduced attack vectors.",
  },
  {
    title: "DEVELOPMENT",
    desc: "Rapidly create a variety of DeFi apps on one chain.",
  },
];

export function BlockchainFeaturesSection(): JSX.Element {
  const { t } = useTranslation("page-index");
  const separatedTitle = t("BlockchainFeatureSection.title").split(" ");

  return (
    <section className="py-10 lg:py-16" data-testid="BlockchainFeatureSection">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div className="flex lg:w-[504px]">
          <div
            className="w-full flex flex-col space-y-5 md:space-y-4 lg:space-y-5"
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
        <div className="flex justify-between md:gap-x-16 lg:gap-x-10 w-full lg:w-[568px] lg:px-12 mt-14 md:mt-[72px] lg:mt-0">
          <BlockchainFeatureColumn items={BlockchainFeatureItems.slice(0, 3)} />
          <BlockchainFeatureColumn items={BlockchainFeatureItems.slice(3)} />
        </div>
      </Container>
    </section>
  );
}
