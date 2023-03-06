import { Container } from "@components/commons/Container";
import classNames from "classnames";
import { Button } from "@components/commons/Buttons";
import { useTranslation } from "next-i18next";
import { SectionTitle } from "@components/commons/SectionTitle";

export function ReadyForFlexibility() {
  const { t } = useTranslation("page-index");
  const separatedTitle = t("ReadyForFlexibilitySection.title").split(" ");
  const lastWord = separatedTitle[separatedTitle.length - 1];
  separatedTitle.pop();

  return (
    <div
      className={classNames(
        "relative z-0",
        "lg:mt-[316.02px] md:mt-[131px] mt-[142px]",
        "lg:mb-60 md:mb-[164px] mb-40"
      )}
    >
      <Container>
        <div
          className={classNames(
            "flex flex-col lg:w-[548px] md:w-[425px] w-auto"
          )}
        >
          <SectionTitle
            text={t("ReadyForFlexibilitySection.label")}
            customStyle="lg:w-fit md:w-[409px] w-[272px]"
          />

          <div className="mt-5 text-6xl text-[40px] tracking-normal leading-11 md:tracking-[-0.02em]">
            <span className="text-dark-1000">{separatedTitle.join(" ")}</span>
            <span className="text-electric">&nbsp;{lastWord}</span>
          </div>

          <div>
            <div className="lg:mt-8 mt-5 lg:text-xl md:text-base tracking-[0.03em] text-dark-700 font-desc">
              {t("ReadyForFlexibilitySection.descParaOne")}
            </div>
            <div className="lg:mt-8 mt-5 lg:text-xl md:text-base tracking-[0.03em] text-dark-700 font-desc">
              {t("ReadyForFlexibilitySection.descParaTwo")}
            </div>
          </div>

          <Button
            text="Explore DeFi MetaChain"
            className="lg:text-base text-sm lg:mt-16 mt-8 py-4 lg:w-[294px] w-[245px]"
          />
        </div>
      </Container>
      <div
        className={classNames(
          " mix-blend-screen absolute z-[-1] inset-0 bg-right bg-contain bg-no-repeat ",
          "md:bg-[url(/assets/img/index/ready-for-flexibility.png)] bg-[url(/assets/img/index/ready-for-flex-mobile.png)]",
          "lg:h-[871.39px] h-[514.78px] lg:-top-[150px] md:-top-[78.29px] md:right-0 top-[50%]"
        )}
      />
    </div>
  );
}
