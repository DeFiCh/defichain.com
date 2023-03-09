import { Container } from "@components/commons/Container";
import classNames from "classnames";
import { SectionTitle } from "@components/commons/SectionTitle";
import { Button } from "@components/commons/Buttons";
import { IoChevronDown } from "react-icons/io5";

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
          {ctaButton && (
            <Button
              className="lg:py-4 py-3 md:w-1/2 w-auto lg:text-base text-sm md:mt-7 mt-10"
              text={ctaButtonText!}
              href={ctaButtonLink}
            />
          )}
        </div>
        {startExploring && (
          <a
            href={startExploringJumpLink}
            className={classNames("hidden md:flex justify-center")}
          >
            <button
              type="button"
              className="group flex flex-col items-center gap-y-[17px]"
            >
              <div className="text-sm text-dark-700 group-hover:text-brand-100">
                Start exploring
              </div>
              <IoChevronDown className="group-hover:text-brand-100" />
            </button>
          </a>
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

const bgMapping = {
  coinArrow: "bg-[url(/assets/img/herobanner/hero-banner-coin-arrow.png)]",
  cube: "bg-[url(/assets/img/herobanner/hero-banner-cube.png)]",
};

export enum HeroBannerBG {
  COIN_ARROW = "coinArrow",
  CUBE = "cube",
}
