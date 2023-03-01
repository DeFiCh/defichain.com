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
      <Container className="flex justify-between">
        <div className="flex lg:w-[504px]">
          <div
            className="w-full flex flex-col space-y-4 md:space-y-5 "
            data-testid="BlockchainFeatureSection.text"
          >
            <div className="gradient-text tracking-[.04em]">
              {t("BlockchainFeatureSection.subtitle")}
            </div>
            <h2 className="lg:text-6xl lg:leading-[72px]" data-testid="title">
              {separatedTitle.map((word, index) =>
                index === 2 ? (
                  <span className="text-electric">{`${word} `}</span>
                ) : (
                  <span>{`${word} `}</span>
                )
              )}
            </h2>
            <div
              className="text-dark-700 text-lg md:text-xl"
              data-testid="desc"
            >
              {t("BlockchainFeatureSection.desc")}
            </div>
          </div>
        </div>
        <div className="flex gap-x-10 px-12">
          <BlockchainFeatureColumn items={BlockchainFeatureItems.slice(0, 3)} />
          <BlockchainFeatureColumn items={BlockchainFeatureItems.slice(3)} />
        </div>
      </Container>
    </section>
  );
}
