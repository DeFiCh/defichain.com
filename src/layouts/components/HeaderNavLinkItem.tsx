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

export function HeaderNavLinkItem({
  icon,
  label,
  subLabel,
  href,
  hoverState,
  setHoverState,
  haveIcon = false,
}: {
  icon?: string;
  label: string;
  subLabel?: string;
  href: string;
  hoverState: string | undefined;
  setHoverState: Dispatch<SetStateAction<string | undefined>>;
  haveIcon?: boolean;
}) {
  const Icon = iconMapping[icon] as React.ElementType;
  const iconsStrokes = [
    "masternode",
    "invest",
    "apps",
    "github",
    "whitepaper",
    "media",
    "security",
    "developer",
  ];

  const [isMouseEnter, setIsMouseEnter] = useState(false);
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
      className={classNames(
        "group flex flex-row items-center gap-x-[28px]",
        hoverState !== undefined && hoverState !== label
          ? "opacity-60 duration-300 transition"
          : "opacity-100 duration-300 transition"
      )}
    >
      {Icon && (
        <div>
          <Icon
            id={
              label === "DeFi Meta Chain"
                ? "github-ecosystem"
                : "github-explore"
            }
            className={classNames(
              iconsStrokes.some((element) => icon.includes(element))
                ? "group-hover:stroke-brand-100 group-hover:duration-300 group-hover:transition"
                : "fill-dark-700 group-hover:fill-brand-100"
            )}
          />
        </div>
      )}

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="mr-[7px] flex text-dark-1000 group-hover:duration-300 group-hover:transition group-hover:accent-dfc-gradient-text group-hover:bg-clip-text group-hover:text-transparent font-semibold md:text-lg leading-6 lg:whitespace-nowrap md:whitespace-pre-wrap whitespace-nowrap">
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

        <div className="text-dark-700 leading-5 md:text-base text-sm">
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
};
