import { Button } from "@components/commons/Buttons";
import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";
import { SectionTitle } from "@components/commons/SectionTitle";
import classNames from "classnames";
import { MasternodesBenefitsColumn } from "./MasternodesBenefitsColumn";

export const masternodesBenefitsItems = [
  {
    title: "PASSIVE INCOME",
    desc: "Earn a portion of block rewards and transaction fees",
  },
  {
    title: "STAKING REWARDS",
    desc: "Get rewarded with masternodes staking",
  },
  {
    title: "NETWORK SECURITY",
    desc: "Secure transactions by validating transactions",
  },
  {
    title: "GOVERNANCE",
    desc: "Have a voice by voting on governance proposal",
  },
];

export function MasternodesBenefitsSection(): JSX.Element {
  const { t } = useTranslation("page-explore-masternodes");

  return (
    <section
      className="pb-24 pt-0 md:pb-28 lg:pb-[120px] lg:mb-[120px]"
      data-testid="masternodesBenefits"
    >
      <Container className="flex flex-col justify-between lg:flex-row 2xl:max-w-[1920px] 2xl:mx-[300px] relative">
        <div className="flex lg:w-[551px]">
          <div
            className="w-full flex flex-col space-y-5 md:space-y-5 lg:space-y-5"
            data-testid="masternodesBenefits.text"
          >
            <SectionTitle text={t("masternodesBenefits.subtitle")} />
            <h2
              className="text-[40px] leading-[44px] tracking-[-0.02em] lg:text-6xl lg:leading-[72px] lg:tracking-normal"
              data-testid="title"
            >
              {t("masternodesBenefits.title")}
            </h2>
            <div
              className="text-dark-700 tracking-[.03em] lg:text-xl lg:tracking-normal font-desc"
              data-testid="desc"
            >
              {t("masternodesBenefits.desc")}
            </div>
            <Button
              className="z-10 text-sm !min-w-0 w-[188px] py-3 !mt-12 lg:text-base lg:w-[199px] lg:py-4"
              text={t("masternodesBenefits.button")}
            />
          </div>
        </div>
        <div className="z-10 justify-between md:gap-x-16 lg:w-[600px] lg:gap-x-[114px] w-full mt-16 md:mt-[80px] lg:mt-0">
          <MasternodesBenefitsColumn
            items={masternodesBenefitsItems}
            id="tablet-desktop-screen"
          />
        </div>
        <div
          className={classNames(
            "hidden md:block absolute bg-contain bg-no-repeat ",
            "lg:h-[45px] lg:w-[45px] lg:top-[169px] lg:-right-[1.5em]",
            "md:h-8 md:w-8 md:-right-[2em] md:bottom-[10em]",
            "bg-[url('/assets/img/background/explore/masternodes/masternodesBenefitsBg.png')]"
          )}
        />
        <div
          className={classNames(
            "lg:hidden md:block hidden absolute right-0 opacity-70 bg-contain bg-no-repeat",
            " md:h-[445.91px] md:w-[290.56px] md:top-[5em] md:-right-[4.5em]",
            "bg-[url('/assets/img/background/explore/masternodes/masternodesGridBg.png')]"
          )}
        />
        <div
          className={classNames(
            "hidden md:block absolute bg-contain bg-no-repeat rotate-90",
            "lg:w-[682px] lg:h-[341.33px] lg:-right-[17.5em] lg:top-[31em]",
            "md:h-[240.24px] md:w-[480px] md:-bottom-[28em] md:-right-[10em]",
            "bg-[url('/assets/img/background/explore/masternodes/benefits-accent-desktop.png')]"
          )}
        />
      </Container>
    </section>
  );
}
