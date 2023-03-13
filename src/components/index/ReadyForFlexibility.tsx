import { Container } from "@components/commons/Container";
import classNames from "classnames";
import { Button } from "@components/commons/Buttons";
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
    <div
      className={classNames(
        "relative z-0",
        "lg:mt-[316.02px] md:mt-[131px] mt-[142px]",
        "lg:mb-60 md:mb-[164px] mb-40"
      )}
    >
      <Container>
        <div className={classNames("flex flex-col md:w-1/2 w-auto")}>
          <SectionTitle
            text={t("ReadyForFlexibilitySection.label")}
            customStyle="lg:w-fit md:w-[409px] w-[272px]"
          />

          <div className="mt-5 text-6xl text-[40px] tracking-normal leading-11 md:tracking-[-0.02em]">
            <span className="text-dark-1000">{separatedTitle.join(" ")}</span>
            <span className="text-electric">&nbsp;{lastWord}</span>
          </div>

          <div>
            <div className="lg:mt-8 mt-5 lg:text-xl md:text-base lg:tracking-normal tracking-[0.03em] text-dark-700 font-desc">
              {t("ReadyForFlexibilitySection.descParaOne")}
            </div>
            <div className="lg:mt-8 mt-5 lg:text-xl md:text-base lg:tracking-normal tracking-[0.03em] text-dark-700 font-desc">
              {t("ReadyForFlexibilitySection.descParaTwo")}
            </div>
          </div>

          <Button
            text={t("ReadyForFlexibilitySection.button")}
            className="lg:text-base text-sm lg:mt-16 mt-8 py-4 lg:w-[294px] w-[245px]"
          />
        </div>
      </Container>
      <div
        className={classNames(
          "mix-blend-screen absolute z-[-1] inset-0 bg-right bg-contain bg-no-repeat",
          "md:bg-[url(/assets/img/index/ready-for-flexibility.png)] bg-[url(/assets/img/index/ready-for-flex-mobile.png)]",
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
    </div>
  );
}
