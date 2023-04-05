import { SectionGridLayout } from "@components/commons/SectionGridLayout";
import { useTranslation } from "next-i18next";
import { SvgIconsColumn } from "pages/explore/masternodes/SvgIconsColumn";

export const whyDEXItems = [
  {
    title: "TRADE ASSETS",
    desc: "Easy and convenient way to swap your tokens to another.",
  },
  {
    title: "WIDE SELECTION OF TOKENS",
    desc: "With over 60+ tokens, you have a vast playing field for DeFi activities",
  },
  {
    title: "MINE LIQUIDITY FROM POOLS",
    desc: "Earn rewards by providing liquidity. Withdraw anytime.",
  },
  {
    title: "ADVANCED SWAPS",
    desc: "Swap through multiple pools instantly, or swap based on future prices of each dToken",
  },
];

export function WhyDEXSection(): JSX.Element {
  const { t } = useTranslation("page-explore-dex");
  return (
    <SectionGridLayout
      title={t("whyDEX.title")}
      description={t("whyDEX.desc")}
      buttonText={t("whyDEX.button")}
      isSecondaryButton
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
