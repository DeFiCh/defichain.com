import { Container } from "@components/commons/Container";
import classNames from "classnames";
import { SecondaryButton } from "@components/commons/Buttons";
import { useTranslation } from "next-i18next";
import { SectionTitle } from "@components/commons/SectionTitle";
import { useWindowDimensions } from "@hooks/useWindowDimensions";

export function ReadyForFlexibility() {
  const { t } = useTranslation("page-index");
  const separatedTitle = t("ReadyForFlexibilitySection.title").split(" ");
  const lastWord = separatedTitle[separatedTitle.length - 1];
  separatedTitle.pop();
  const dimension = useWindowDimensions();

  return (
    <section
      className={classNames(
        "relative z-10",
        "lg:mt-[336px] md:mt-[131px] mt-[142px]",
        "lg:mb-60 md:mb-[164px] mb-40"
      )}
    >
      <Container className="relative">
        <div className={classNames("flex flex-col md:w-1/2")}>
          <SectionTitle
            text={t("ReadyForFlexibilitySection.label")}
            customStyle="lg:w-fit md:w-[409px] w-[272px]"
          />

          <h2 className="mt-5 text-6xl text-[40px] tracking-normal leading-11 md:tracking-[-0.02em]">
            <span className="text-dark-1000">{separatedTitle.join(" ")}</span>
            <span className="text-electric">&nbsp;{lastWord}</span>
          </h2>

          <h4>
            <div className="lg:mt-8 mt-5 lg:text-xl md:text-base lg:tracking-normal tracking-[0.03em] text-dark-700 font-desc">
              {t("ReadyForFlexibilitySection.descParaOne")}
            </div>
            <div className="lg:mt-8 mt-5 lg:text-xl md:text-base lg:tracking-normal tracking-[0.03em] text-dark-700 font-desc pb-6 md:pb-8 lg:pb-16">
              {t("ReadyForFlexibilitySection.descParaTwo")}
            </div>
          </h4>
          <SecondaryButton
            data-testid="explore-defi-meta-chain-button"
            text={t("ReadyForFlexibilitySection.button")}
            className="lg:text-base text-sm lg:py-4 py-3 px-9 md:px-[56px]"
            href="https://meta.defichain.com/"
            customSize={24}
            customClass="ml-[8px]"
            testID="explore-dmc"
          />
        </div>
        <div
          className={classNames(
            "mix-blend-screen absolute z-[-1] inset-0 bg-right bg-contain bg-no-repeat",
            "md:bg-[url(/assets/img/index/ready-for-flexibility.png)]",
            "lg:h-[871.39px] h-[514.78px] lg:-top-[150px] md:-top-[78.29px] md:right-0 top-[50%]"
          )}
        />

        <div
          className={classNames(
            "jellyfish-item z-[-2] bg-[url(/assets/img/index/jellyfish.png)] hidden md:block",
            "lg:h-[317.38px] md:h-[161.58px] absolute inset-0 z-[-1] bg-contain bg-no-repeat bg-right",
            "2xl:right-[20%] xl:right-[25%] lg:right-[30%] lg:top-[60%] top-[50%] right-[35%]",
            { "right-[40%]": dimension.width <= 750 }
          )}
        />
      </Container>
      <div
        className={classNames(
          "mix-blend-screen absolute z-[-1] inset-0 bg-right bg-contain bg-no-repeat",
          "bg-[url(/assets/img/index/ready-for-flex-mobile.png)]",
          "md:hidden block"
        )}
      />
    </section>
  );
}
