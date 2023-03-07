import { DFIIcon } from "@public/assets/icon/DFIIcon";
import { WalletIcon } from "@public/assets/icon/WalletIcon";
import { GitHubIcon } from "@public/assets/icon/GitHubIcon";
import { InvestIcon } from "@public/assets/icon/InvestIcon";
import { MasternodeIcon } from "@public/assets/icon/MasternodeIcon";
import { DexIcon } from "@public/assets/icon/DexIcon";
import classNames from "classnames";
import { GovernanceIcon } from "@public/assets/icon/GovernanceIcon";
import { AppsIcon } from "@public/assets/icon/AppsIcon";
import { JellyfishIcon } from "@public/assets/icon/JellyfishIcon";
import { WhitePaperIcon } from "@public/assets/icon/WhitePaperIcon";
import { SecurityIcon } from "@public/assets/icon/SecurityIcon";
import { MediaAssetsIcon } from "@public/assets/icon/MediaAssetsIcon";
import { DeveloperResourceIcon } from "@public/assets/icon/DeveloperResourceIcon";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Dispatch, SetStateAction, useState } from "react";
import { NewsLetterIcon } from "@public/assets/icon/NewsLetterIcon";

export function HeaderNavLinkItem({
  icon,
  label,
  subLabel,
  href,
  hoverState,
  setHoverState,
  haveIcon = false,
  target = "_self",
}: {
  icon?: string;
  label: string;
  subLabel?: string;
  href: string;
  hoverState: string | undefined;
  setHoverState: Dispatch<SetStateAction<string | undefined>>;
  haveIcon?: boolean;
  target?: string;
}) {
  const Icon = iconMapping[icon!] as React.ElementType;
  const iconsStrokes = [
    "masternode",
    "invest",
    "apps",
    "github",
    "whitepaper",
    "media",
    "security",
    "developer",
    "newsletter",
  ];

  const [isMouseEnter, setIsMouseEnter] = useState(false);

  let dfiId = "dfi-ecosystem";

  switch (label) {
    case "DeFi Meta Chain":
      dfiId = "dfi-ecosystem";
      break;
    case "$DFI":
      dfiId = "dfi-explore";
      break;
    case "DeFiChain Blog":
    default:
      dfiId = "dfi-community";
  }

  return (
    <a
      onMouseEnter={() => {
        setHoverState(label);
        setIsMouseEnter(true);
      }}
      onMouseLeave={() => {
        setHoverState(undefined);
        setIsMouseEnter(false);
      }}
      href={href}
      rel="noreferrer"
      target={target}
      className={classNames(
        "group flex flex-row items-center gap-x-[28px]",
        hoverState !== undefined && hoverState !== label
          ? "opacity-60 duration-300 transition"
          : "opacity-100 duration-300 transition"
      )}
    >
      {Icon && (
        <Icon
          id={dfiId}
          className={classNames(
            "group-hover:duration-500 group-hover:transition group-active:opacity-70",
            iconsStrokes.some((element) => icon!.includes(element))
              ? "group-hover:stroke-brand-100"
              : "fill-dark-700 group-hover:fill-brand-100"
          )}
        />
      )}

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div
            className={classNames(
              "mr-[7px] flex font-semibold text-dark-1000 md:text-lg leading-6",
              "group-hover:duration-500 group-hover:transition group-hover:text-brand-100 group-active:opacity-70",
              "lg:whitespace-nowrap md:whitespace-pre-wrap whitespace-nowrap"
            )}
          >
            {label}
          </div>
          {isMouseEnter && haveIcon && (
            <>
              <RiArrowRightUpLine
                style={{ fill: "url(#accent-gradient)" }}
                size={24}
              />

              <svg width="0" height="0">
                <linearGradient
                  id="accent-gradient"
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                >
                  <stop stopColor="#FF00FF" offset="0%" />
                  <stop stopColor="#EC0C8D" offset="100%" />
                </linearGradient>
              </svg>
            </>
          )}
        </div>

        <div className="text-dark-700 leading-5 md:text-base text-sm group-active:opacity-70 duration-500 font-normal">
          {subLabel}
        </div>
      </div>
    </a>
  );
}

const iconMapping = {
  dfi: DFIIcon,
  wallet: WalletIcon,
  github: GitHubIcon,
  invest: InvestIcon,
  masternode: MasternodeIcon,
  dex: DexIcon,
  governance: GovernanceIcon,
  apps: AppsIcon,
  jellyfish: JellyfishIcon,
  whitepaper: WhitePaperIcon,
  security: SecurityIcon,
  media: MediaAssetsIcon,
  developer: DeveloperResourceIcon,
  newsletter: NewsLetterIcon,
};
