import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { Container } from "@components/commons/Container";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { SectionTitle } from "@components/commons/SectionTitle";
import { SecondaryButton } from "@components/commons/Buttons";
import Image from "next/image";

export function MetaChainRoadmap({ roadMapImg }): JSX.Element {
  const { t } = useTranslation("page-meta-chain");
  const dimension = useWindowDimensions();
  const mobileView = dimension.width <= 800;
  return (
    <section className={classNames("relative lg:mb-56 md:mb-52 mb-48")}>
      <Container>
        <div className="flex flex-col lg:flex-row w-auto">
          <div className="max-w-[468px]">
            <SectionTitle
              text={t("roadmap.title")}
              customStyle="lg:w-fit md:w-[409px] w-[272px]"
              testID="metachain-roadmap-title"
            />
            <h2 className="mt-5 mb-6 md:my-4 lg:my-5 text-[32px] leading-9 whitespace-pre-line lg:text-[52px] lg:leading-none">
              {t("roadmap.subtitle")}
            </h2>
            <div
              className={classNames(
                "text-dark-700 mb-6 md:mb-9 lg:mb-12 text-xl lg:leading-8 font-desc tracking-[0.03em] lg:tracking-normal"
              )}
              data-testid="metachain-roadmap-desc"
            >
              {t("roadmap.desc")}
            </div>
            <SecondaryButton
              text={t("roadmap.button")}
              className="text-sm mt-9 lg:py-4 py-3 px-[62px] md:px-[56px] lg:text-base"
              href="https://defich.github.io/handbook/guides/guide_floppynet.html"
              customSize={mobileView ? 20 : 24}
              customClass="ml-[8px]"
              testID="metachain-roadmap-documentation"
            />
          </div>
          {roadMapImg?.length > 0 ? (
            <div className="mt-12 lg:mt-0 lg:ml-auto max-w-[660px]">
              <Image
                width={660}
                height={570}
                alt="Meta Chain Roadmap"
                src={roadMapImg[0].metachain_roadmap.url}
              />
            </div>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </section>
  );
}
