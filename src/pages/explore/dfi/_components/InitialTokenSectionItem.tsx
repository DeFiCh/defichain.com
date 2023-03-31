import { FiSend } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
import classNames from "classnames";
import { BinIcon } from "../icons/BinIcon";

export function InitialTokenSectionItem({
  icon,
  percentage,
  desc,
  className,
}: {
  icon: InitialTokenSectionIcons;
  percentage: string;
  desc: string;
  className?: string;
}) {
  const Icon = iconMapping[icon];
  return (
    <div className={classNames("flex flex-col", className)}>
      <Icon className="text-brand-100" size={28} />
      <div className="mt-[18.34px] text-dark-700 text-xl font-bold">
        {percentage}
      </div>
      <div className="mt-1 text-sm text-dark-700 font-desc">{desc}</div>
    </div>
  );
}

export enum InitialTokenSectionIcons {
  AIRDROP,
  BURN,
  DESTROY,
}

const iconMapping = {
  [InitialTokenSectionIcons.AIRDROP]: FiSend,
  [InitialTokenSectionIcons.BURN]: AiOutlineFire,
  [InitialTokenSectionIcons.DESTROY]: BinIcon,
};
