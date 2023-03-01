import { Container } from "@components/commons/Container";
// import Image from "next/image";
// import Link from "next/link";
import { useTranslation } from "next-i18next";
// import { Button } from "@components/commons/Buttons";

export function BlockchainFeaturesSection(): JSX.Element {
  const { t } = useTranslation("page-index");
  const separatedTitle = t("BlockchainFeatureSection.title").split(" ");
  //   const coloredWord = separatedTitle[2];
  //   separatedTitle.shift();
  console.log(separatedTitle);

  return (
    <section className="py-10 lg:py-16" data-testid="BlockchainFeatureSection">
      <Container>
        <div className="flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-28">
          <div
            className="w-full lg:w-2/3 flex flex-col space-y-4 md:space-y-8 items-start "
            data-testid="BlockchainFeatureSection"
          >
            <h2
              className="text-2xl md:text-3xl font-medium"
              data-testid="title"
            >
              {separatedTitle.map((word, index) =>
                index === 2 ? (
                  <span className="text-electric">{`${word} `}</span>
                ) : (
                  <span>{`${word} `}</span>
                )
              )}
            </h2>
            <div className="text-lg md:text-xl" data-testid="desc">
              {t("BlockchainFeatureSection.desc")}
            </div>
            {/* <div data-testid="button">
              <Link
                href={{ pathname: "/white-paper" }}
                passHref
                className="contents"
              >
                <Button text={t("BlockchainFeatureSection.button")} />
              </Link>
            </div> */}
          </div>
          <div className="w-1/2 lg:w-1/4 mx-auto" data-testid="image">
            {/* <Image src={Bitcoin} alt="" /> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
