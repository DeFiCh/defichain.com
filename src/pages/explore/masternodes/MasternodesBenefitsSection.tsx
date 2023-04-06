import { SectionGridLayout } from "@components/commons/SectionGridLayout";
import { useTranslation } from "next-i18next";
import { SvgIconsColumn } from "./SvgIconsColumn";

export function MasternodesBenefitsSection(): JSX.Element {
  const { t } = useTranslation("page-explore-masternodes");

  const masternodesBenefitsItems = [
    {
      title: t("masternodesBenefits.passiveIncome.title"),
      desc: t("masternodesBenefits.passiveIncome.desc"),
    },
    {
      title: t("masternodesBenefits.stakingRewards.title"),
      desc: t("masternodesBenefits.stakingRewards.desc"),
    },
    {
      title: t("masternodesBenefits.networkSecurity.title"),
      desc: t("masternodesBenefits.networkSecurity.desc"),
    },
    {
      title: t("masternodesBenefits.governance.title"),
      desc: t("masternodesBenefits.governance.desc"),
    },
  ];
  return (
    <SectionGridLayout
      sectionTitle={t("masternodesBenefits.subtitle")}
      title={t("masternodesBenefits.title")}
      description={t("masternodesBenefits.desc")}
      buttonText={t("masternodesBenefits.button")}
      isCTAButton
      href="masternodes/technicalGuide"
    >
      <div className="relative">
        <SvgIconsColumn
          items={masternodesBenefitsItems}
          id="tablet-desktop-screen"
          customClassStyle="masternode-benefits-feature-item flex-row"
          customParagraphStyle="ml-[58px]"
          customSectionStyle="gap-12"
        />
        <div className="hidden md:block absolute md:h-8 md:w-8 md:-right-10 md:bottom-[140px] lg:h-[45px] lg:w-[45px] lg:top-[200px] lg:-right-5 bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/explore/cross-accent-6.png')]" />
        <div className="hidden md:block lg:hidden absolute opacity-70 top-20 right-[-24px] h-[445.91px] w-[290.56px] lg:-top-60 bg-contain bg-no-repeat mix-blend-screen bg-[url(/assets/img/masternodesBenefits/accent-5.png)]" />
        <div className="hidden md:block absolute -rotate-90 -right-[160px] opacity-70 -bottom-[280px] h-[445.91px] w-[290.56px] lg:top-auto lg:bottom-[-251.33px] bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/explore/grid-accent-6.png')]" />
      </div>
    </SectionGridLayout>
  );
}
