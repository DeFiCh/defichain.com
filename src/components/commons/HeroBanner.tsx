import { Container } from "@components/commons/Container";
import classNames from "classnames";
import { SectionTitle } from "@components/commons/SectionTitle";
import { Button } from "@components/commons/Buttons";
import { StartExploring } from "@components/commons/StartExploring";

// The HeroBanner component takes in title, subtitle, desc and HeroBannerBG
// currently only COIN_ARROW, DFI_COIN and CUBE image are available
// it also takes in optional params on the customBgPosStyle
// if cta button is needed to pass in ctaButton, text and link
// if start exploring button is needed to pass in start exploring and jumplink
export function HeroBanner({
  title,
  subtitle,
  desc,
  customBgPosStyle,
  heroBG,
  ctaButton = false,
  ctaButtonLink,
  ctaButtonText,
  startExploring = false,
  startExploringJumpLink,
}: {
  title: string;
  subtitle: string;
  desc: string;
  customBgPosStyle?: string;
  heroBG: HeroBannerBG;
  ctaButton?: boolean;
  ctaButtonLink?: string;
  ctaButtonText?: string;
  startExploring?: boolean;
  startExploringJumpLink?: string;
}) {
  return (
    <div className="relative z-0">
      <Container className={classNames("md:mt-[25px] mt-6")}>
        <div
          className={classNames(
            "flex flex-col md:gap-y-5 gap-y-2",
            "md:w-1/2 w-auto",
            "md:pt-[88px] pt-[380px]",
            "lg:mb-[278px] md:mb-[148px] mb-24"
          )}
        >
          <SectionTitle text={title} />
          <div
            className={classNames(
              "text-dark-1000 text-[40px] leading-[44px] tracking-[-0.02em]",
              "md:text-5xl md:leading-[52px] md:tracking-normal",
              "lg:text-[80px] lg:leading-[84px] md:tracking-normal"
            )}
          >
            {subtitle}
          </div>
          <div
            className={classNames(
              "font-desc tracking-[0.03em] text-xl text-dark-700",
              "lg:text-2xl tracking-normal"
            )}
          >
            {desc}
          </div>
          {ctaButton && ctaButtonText && (
            <Button
              className="lg:py-4 py-3 md:w-1/2 w-auto lg:text-base text-sm md:mt-7 mt-10"
              text={ctaButtonText}
              href={ctaButtonLink}
            />
          )}
        </div>
        {startExploring && startExploringJumpLink && (
          <StartExploring startExploringJumpLink={startExploringJumpLink} />
        )}
      </Container>
      <div
        className={classNames(
          bgMapping[heroBG],
          "absolute bg-contain bg-no-repeat bg-right-top inset-0 z-[-1]",
          "lg:h-[686px] md:h-[512px] h-[358px]",
          customBgPosStyle ??
            "xl:right-0 2xl:right-0 md:-right-[5%] -right-[3rem] md:-top-[5rem] top-0"
        )}
      />
    </div>
  );
}

export enum HeroBannerBG {
  COIN_ARROW,
  CUBE,
  DFI_COIN,
}
const bgMapping = {
  [HeroBannerBG.COIN_ARROW]:
    "bg-[url(/assets/img/herobanner/hero-banner-coin-arrow.png)]",
  [HeroBannerBG.CUBE]: "bg-[url(/assets/img/herobanner/hero-banner-cube.png)]",
  [HeroBannerBG.DFI_COIN]:
    "bg-[url(/assets/img/herobanner/hero-banner-dfi-coin.png)]",
};
