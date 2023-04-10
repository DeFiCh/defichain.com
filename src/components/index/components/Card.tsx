import classNames from "classnames";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { MetaDfiCoin } from "@public/assets/img/ecosystem/MetaDfiCoin";
import {
  GlassCube,
  GlassCubeHover,
} from "@public/assets/img/ecosystem/GlassCube";
import { WalletApps, WalletAppsHover } from "@public/assets/img/ecosystem/Dapp";
import { Cube } from "@public/assets/img/ecosystem/Cube";
import { useDeviceDetect, ViewPort } from "@hooks/useDeviceDetect";
import Link from "next/link";

export function Card({
  title,
  subTitle,
  hoverTitle,
  customIconStyle,
  id,
  href,
  customTextStyle,
}: {
  id: string;
  href: string;
  customTextStyle?: string;
  title: string;
  subTitle: string;
  hoverTitle?: string;
  customIconStyle?: string;
}): JSX.Element {
  const [hoverState, setHoverState] = useState<string | undefined>(undefined);
  const Icon = iconMapping[id] as React.ElementType;
  const IconOnHover = iconMapping[`${id}_hover`] as React.ElementType;
  const device = useDeviceDetect();

  return (
    <div>
      <div
        key={id}
        onMouseEnter={() => {
          setHoverState(id);
        }}
        onMouseLeave={() => {
          setHoverState(undefined);
        }}
        className={classNames(
          "relative dapp-card overflow-hidden",
          "p-[0.5px] rounded-[15px] h-[215px] w-full xs:w-[327px] lg:w-[487px] xl:h-[215]",
          "md:block md:mb-[24px]",
          "card-outline-2 hover:accent-gradient-1",
          "cursor-pointer"
        )}
      >
        <Link
          href={href}
          className={classNames(
            "w-full h-full p-6 rounded-[15px] border-[0.5px] flex flex-col",
            "border-dark-200 bg-dark-00",
            "duration-1000 hover:transition hover:ease-in delay-250"
          )}
        >
          <div className={classNames(customTextStyle)}>
            <span
              className={classNames(
                "md:w-full text-2xl tracking-[-2%]",
                "whitespace-pre-line",
                {
                  "accent-dfc-gradient-text":
                    hoverState !== undefined && hoverState === id,
                }
              )}
            >
              {hoverTitle && hoverState !== undefined && hoverState === id
                ? hoverTitle
                : title}
            </span>
            <div
              className={classNames(
                "text-base text-dark-500 pt-[22px] flex flex-row items-center font-semibold"
              )}
            >
              {subTitle}
              <FiArrowUpRight size={20} className="ml-[13px]" />
            </div>
            <div
              className={classNames(
                "absolute mix-blend-screen",
                customIconStyle
              )}
            >
              {hoverState !== undefined &&
              hoverState === id &&
              Icon &&
              device === ViewPort.DESKTOP ? (
                <IconOnHover id={`${id}_hover`} />
              ) : (
                <Icon id={`${id}`} />
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

const iconMapping = {
  dfi: MetaDfiCoin,
  dfi_hover: MetaDfiCoin,
  dex: GlassCube,
  dex_hover: GlassCubeHover,
  wallets: WalletApps,
  wallets_hover: WalletAppsHover,
  cube: Cube,
  cube_hover: Cube,
};
