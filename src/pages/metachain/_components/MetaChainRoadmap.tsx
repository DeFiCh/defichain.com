import classNames from "classnames";
import { Container } from "@components/commons/Container";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { SectionTitle } from "@components/commons/SectionTitle";
import { SecondaryButton } from "@components/commons/Buttons";
import { IconType } from "react-icons";
import { DvmIcon } from "@public/assets/icon/DvmIcon";
import { MetachainIcon } from "@public/assets/icon/MetachainIcon";
import { RndIcon } from "@public/assets/icon/RndIcon";
import { GrowthIcon } from "@public/assets/icon/GrowthIcon";
import { useTranslation } from "../../../hooks/useTranslation";

export function MetaChainRoadmap(): JSX.Element {
  const { t } = useTranslation("page-meta-chain");
  return (
    <section className={classNames("relative mb-12")}>
      <Container>
        <div className="flex flex-col lg:flex-row w-auto">
          <div className="max-w-[468px]">
            <SectionTitle
              text={t("roadmap.title")}
              customStyle="lg:w-fit md:w-[409px] w-[272px]"
              testID="metachain-roadmap-title"
            />
            <h2
              className="mt-5 mb-6 md:my-4 lg:my-5 text-[32px] leading-9 whitespace-pre-line lg:text-[52px] lg:leading-none"
              data-testid="metachain-roadmap-subtitle"
            >
              {t("roadmap.subtitle")}
            </h2>
            <div
              className={classNames(
                "text-dark-700 mb-6 md:mb-9 lg:mb-12 text-base md:text-xl lg:leading-8 font-desc tracking-[0.03em] lg:tracking-normal",
              )}
              data-testid="metachain-roadmap-desc"
            >
              {t("roadmap.desc")}
            </div>
            <div
              className={classNames(
                "text-dark-700 lg:mb-12 text-base md:text-xl lg:leading-8 font-desc tracking-[0.03em] lg:tracking-normal",
              )}
              data-testid="metachain-roadmap-descContinue"
            >
              {t("roadmap.descContinue")}
            </div>
            <div className="lg:block hidden">
              <SecondaryButton
                text={t("roadmap.button")}
                className="text-sm mt-9 lg:py-4 py-3 px-[62px] md:px-[56px] lg:text-base"
                href="https://blog.defichain.com/defichains-roadmap-for-the-first-half-of-2024/"
                customClass="ml-[8px]"
                customSize={24}
                testID="metachain-roadmap-documentation"
              />
            </div>
          </div>
          <Roadmap />
        </div>
      </Container>
    </section>
  );
}

function Roadmap() {
  const { t } = useTranslation("page-meta-chain");
  const dimension = useWindowDimensions();
  const mobileView = dimension.width <= 800;

  return (
    <div
      className="mt-12 lg:mt-0 lg:ml-auto lg:max-w-[660px]"
      data-testid="metachain-roadmap-diagram"
    >
      <div
        className={classNames(
          "text-dark-700 mb-4 text-base md:text-xl lg:leading-8 font-desc tracking-[0.03em] lg:tracking-normal",
        )}
        data-testid="metachain-roadmap-diagram-desc"
      >
        {t("roadmap.diagDesc")}
      </div>
      <div className="card-outline-2 p-[0.5px] bg-dark-200 rounded-[15px]">
        <div
          className={`border-[0.5px] border-dark-300 rounded-[15px] bg-dark-00 px-6 md:px-10
      w-full flex-col items-center grid grid-cols-1 divide-y divide-gray-50/25`}
        >
          <CardItem
            title={t("roadmap.cards.dvm.title")}
            desc={t("roadmap.cards.dvm.desc")}
            Icon={DvmIcon}
            testId="dvm"
          />
          <CardItem
            title={t("roadmap.cards.metachain.title")}
            desc={t("roadmap.cards.metachain.desc")}
            Icon={MetachainIcon}
            testId="metachain"
          />
          <CardItem
            title={t("roadmap.cards.experimentation.title")}
            desc={t("roadmap.cards.experimentation.desc")}
            Icon={RndIcon}
            testId="experimentation"
          />
          <CardItem
            title={t("roadmap.cards.growth.title")}
            desc={t("roadmap.cards.growth.desc")}
            Icon={GrowthIcon}
            testId="growth"
          />
        </div>
      </div>
      <div className="block lg:hidden mt-12">
        <SecondaryButton
          text={t("roadmap.button")}
          className="text-sm mt-9 lg:py-4 py-3 px-[56px]"
          href="https://blog.defichain.com/defichains-roadmap-for-the-first-half-of-2024/"
          customSize={mobileView ? 20 : 24}
          customClass="ml-[8px]"
          testID="metachain-roadmap-documentation"
        />
      </div>
    </div>
  );
}

function CardItem({
  title,
  desc,
  Icon,
  testId,
}: {
  title: string;
  desc: string;
  Icon: IconType;
  testId: string;
}) {
  return (
    <div className="flex flex-col py-6 md:py-10">
      <div className="flex flex-col md:flex-row gap-x-6 md:items-center gap-y-4">
        <Icon width={49.37} height={49.999} />
        <div className="flex flex-col gap-y-1">
          <h3
            className="text-xl font-bold leading-7 text-dark-1000"
            data-testid={`roadmap-${testId}-title`}
          >
            {title}
          </h3>
          <p
            className="text-base leading-7 text-dark-700"
            data-testid={`roadmap-${testId}-description`}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
