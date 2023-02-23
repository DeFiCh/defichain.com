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

export function HeaderNavLinkItem({
  icon,
  label,
  subLabel,
  href,
}: {
  icon?: string;
  label: string;
  subLabel?: string;
  href: string;
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
  return (
    <a href={href} className="group flex flex-row items-center gap-x-[28px]">
      {Icon && (
        <div className="h-[28.33px] w-[28.33px]">
          <Icon
            className={classNames(
              iconsStrokes.some((element) => icon.includes(element))
                ? "group-hover:stroke-brand-100"
                : "fill-dark-700 group-hover:fill-brand-100"
            )}
          />
        </div>
      )}

      <div className="flex flex-col">
        <div className="text-dark-1000 group-hover:text-brand-100 font-semibold md:text-lg leading-6 whitespace-nowrap">
          {label}
        </div>
        <div className="group-hover:text-brand-100 text-dark-700 leading-5">
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
