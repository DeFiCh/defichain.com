import {
  ThroughputIcon,
  ThroughputIconHover,
} from "@components/icons/assets/blockchainFeatures/ThroughputIcon";
import {
  ImmutabilityIcon,
  ImmutabilityIconHover,
} from "@components/icons/assets/blockchainFeatures/ImmutabilityIcon";
import {
  VarietyIcon,
  VarietyIconHover,
} from "@components/icons/assets/blockchainFeatures/VarietyIcon";
import {
  SecurityIcon,
  SecurityIconHover,
} from "@components/icons/assets/blockchainFeatures/SecurityIcon";
import {
  DevelopmentIcon,
  DevelopmentIconHover,
} from "@components/icons/assets/blockchainFeatures/DevelopmentIcon";
import clsx from "clsx";
// import { MorphReplace } from "react-svg-morph";
// import { Transition } from "@headlessui/react";
// import "@components/icons/assets/blockchainFeatures/styles/blockchainFeatures.css";
import { useState } from "react";

interface BlockchainFeatureItemProp {
  title: string;
  desc: string;
  //   Icon: JSX.Element;
  //   testId: string;
}

export function BlockchainFeatureColumn({
  items,
}: //   testId,
{
  items: Array<BlockchainFeatureItemProp>;
}): JSX.Element {
  return (
    <div className="flex flex-1 flex-wrap gap-8 md:gap-12 lg:gap-y-16 lg:gap-x-10">
      {items.map((item) => (
        <FeatureIcon item={item} />
      ))}
    </div>
  );
}

function FeatureIcon({ item }: { item: BlockchainFeatureItemProp }) {
  const Icon = iconMapping[item.title] as React.ElementType;
  const IconOnHover = iconMapping[`${item.title}_hover`] as React.ElementType;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="flex flex-row md:flex-col w-80 md:w-[312px] lg:w-[216px]"
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
    >
      <div>
        {/* <MorphReplace width={50} height={50}>
          {isHovering && Icon ? (
            <IconOnHover className="w-[50px] h-[50px]" />
          ) : (
            <Icon className="w-[50px] h-[50px]" />
          )}
        </MorphReplace> */}
        {/* <MorphReplace width={50} height={50}> */}
        {isHovering && Icon ? (
          <IconOnHover className="w-[50px] h-[50px]" />
        ) : (
          <Icon className="w-[50px] h-[50px]" />
        )}
        {/* </MorphReplace> */}
      </div>
      <div className="ml-5 space-y-2 md:ml-0 md:mt-5 md:space-y-4">
        <h3
          className={clsx("font-bold leading-5 text-dark-1000", {
            "gradient-text": isHovering,
          })}
        >
          {item.title}
        </h3>
        <div className="text-dark-700 text-sm md:text-base">{item.desc}</div>
      </div>
    </div>
  );
}

const iconMapping = {
  THROUGHPUT: ThroughputIcon,
  THROUGHPUT_hover: ThroughputIconHover,
  SECURITY: SecurityIcon,
  SECURITY_hover: SecurityIconHover,
  IMMUTABILITY: ImmutabilityIcon,
  IMMUTABILITY_hover: ImmutabilityIconHover,
  DEVELOPMENT: DevelopmentIcon,
  DEVELOPMENT_hover: DevelopmentIconHover,
  VARIETY: VarietyIcon,
  VARIETY_hover: VarietyIconHover,
};