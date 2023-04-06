import { SectionGridLayout } from "@components/commons/SectionGridLayout";
import { useTranslation } from "next-i18next";
import { SvgIconsColumn } from "pages/explore/masternodes/SvgIconsColumn";

export function WhyDEXSection(): JSX.Element {
  const { t } = useTranslation("page-explore-dex");

  const whyDEXItems = [
    {
      title: t("whyDEX.trade.title"),
      desc: t("whyDEX.trade.desc"),
    },
    {
      title: t("whyDEX.wideSelection.title"),
      desc: t("whyDEX.wideSelection.desc"),
    },
    {
      title: t("whyDEX.mineLiquidity.title"),
      desc: t("whyDEX.mineLiquidity.desc"),
    },
    {
      title: t("whyDEX.advancedSwaps.title"),
      desc: t("whyDEX.advancedSwaps.desc"),
    },
  ];
  return (
    <SectionGridLayout
      title={t("whyDEX.title")}
      description={t("whyDEX.desc")}
      buttonText={t("whyDEX.button")}
      isSecondaryButton
      href="https://defiscan.live/dex"
    >
      <div className="relative">
        <SvgIconsColumn
          items={whyDEXItems}
          id="tablet-desktop-screen"
          customClassStyle="flex-col"
          customParagraphStyle="mt-[25px]"
          customSectionStyle="gap-y-[66.5px]"
        />
        <div className="absolute h-8 w-8 right-[-15px] sm:top-[-70px] md:-right-10 md:top-0 lg:h-[45px] lg:w-[45px] lg:top-[-50px] lg:right-[-22px] bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/explore/cross-accent-6.png')]" />
        <div className="absolute left-[200px] opacity-70 top-0 h-[445.91px] w-[290.56px] rotate-90 md:left-[500px] bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/explore/grid-accent-6.png')]" />
      </div>
    </SectionGridLayout>
  );
}
