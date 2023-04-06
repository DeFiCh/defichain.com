import { Container } from "@components/commons/Container";
import classNames from "classnames";
import { SectionTitle } from "@components/commons/SectionTitle";
import { Button } from "@components/commons/Buttons";
import { StartExploringButton } from "@components/commons/StartExploringButton";
import { SectionSubTitle } from "./SectionSubTitle";
import { SectionDescription } from "./SectionDescription";

// The HeroBanner component takes in title, subtitle, desc and HeroBannerBG
// currently only COIN_ARROW, DFI_COIN, DIAMOND_COIN and CUBE image are available
// it also takes in optional params on the customBgPosStyle
// if cta button is required, to pass in hasCtaButton, ctaButtonText and ctaButtonLink
// if start exploring button is required, to pass in hasStartExploringButton and startExploringJumpLink
export function HeroBanner({
  title,
  subtitle,
  desc,
  customBgPosStyle,
  heroBg,
  hasCtaButton = false,
  ctaButtonLink,
  ctaButtonText,
  hasStartExploringButton = false,
  startExploringJumpLink,
}: {
  title: string;
  subtitle: string;
  desc: string;
  customBgPosStyle?: string;
  heroBg: HeroBannerBg;
  hasCtaButton?: boolean;
  ctaButtonLink?: string;
  ctaButtonText?: string;
  hasStartExploringButton?: boolean;
  startExploringJumpLink?: string;
}) {
  return (
    <Container className={classNames("md:mt-[25px] mt-6 relative z-0")}>
      <div
        className={classNames(
          "flex flex-col md:gap-y-5 gap-y-2",
          "md:w-1/2 w-auto",
          "md:pt-[88px] pt-[380px]",
          "lg:mb-[278px] md:mb-[148px] mb-24"
        )}
      >
        <SectionTitle text={title} />
        <SectionSubTitle text={subtitle} />
        <SectionDescription text={desc} />
        {hasCtaButton && ctaButtonText && (
          <Button
            className="lg:py-4 py-3 md:w-1/2 w-auto lg:text-base text-sm md:mt-7 mt-10"
            text={ctaButtonText}
            href={ctaButtonLink}
          />
        )}
      </div>
      {hasStartExploringButton && startExploringJumpLink && (
        <StartExploringButton startExploringJumpLink={startExploringJumpLink} />
      )}
      <div
        className={classNames(
          bgMapping[heroBg],
          "absolute bg-contain bg-no-repeat bg-right-top inset-0 z-[-1]",
          "lg:h-[686px] md:h-[512px] h-[358px]",
          customBgPosStyle ??
            "lg:-right-[10rem] md:-right-[7em] -right-[5em] md:-top-[5rem] top-0"
        )}
      />

      {heroBg === HeroBannerBg.COIN_ARROW && (
        <div
          className={classNames(
            "absolute bg-contain bg-no-repeat lg:rotate-90",
            "lg:w-[682px] lg:h-[341.33px] lg:-right-[17.5em] lg:top-[25em]",
            "md:h-[505.52px] md:w-[253.01px] md:top-[8em] md:-right-[4.5em]",
            "h-[433.23px] w-[216.83px] top-[6em] -right-[8em]",
            "lg:bg-[url('/assets/img/background/explore/masternodes/benefits-accent-desktop.png')]",
            "bg-[url(/assets/img/herobanner/background/coin-arrow-bg.png)]"
          )}
        />
      )}
      {heroBg === HeroBannerBg.CUBE && (
        <div
          className={classNames(
            "absolute bg-contain bg-no-repeat lg:rotate-90",
            "lg:w-[682px] lg:h-[341.33px] lg:-right-[32em] lg:top-[25em]",
            "lg:bg-[url('/assets/img/background/explore/masternodes/benefits-accent-desktop.png')]"
          )}
        />
      )}
    </Container>
  );
}

export enum HeroBannerBg {
  COIN_ARROW,
  CUBE,
  DFI_COIN,
  DIAMOND_COIN,
}
const bgMapping = {
  [HeroBannerBg.COIN_ARROW]:
    "bg-[url(/assets/img/herobanner/hero-banner-coin-arrow.png)]",
  [HeroBannerBg.CUBE]: "bg-[url(/assets/img/herobanner/hero-banner-cube.png)]",
  [HeroBannerBg.DFI_COIN]:
    "bg-[url(/assets/img/herobanner/hero-banner-dfi-coin.png)]",
  [HeroBannerBg.DIAMOND_COIN]:
    "bg-[url(/assets/img/herobanner/hero-banner-diamond-coin.png)]",
};
