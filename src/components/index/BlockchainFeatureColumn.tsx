import { ThroughputIcon } from "@components/icons/assets/blockchainFeatures/ThroughputIcon";
import { ImmutabilityIcon } from "@components/icons/assets/blockchainFeatures/ImmutabilityIcon";
import { VarietyIcon } from "@components/icons/assets/blockchainFeatures/VarietyIcon";
import { SecurityIcon } from "@components/icons/assets/blockchainFeatures/SecurityIcon";
import { DevelopmentIcon } from "@components/icons/assets/blockchainFeatures/DevelopmentIcon";

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

  return (
    <div className="flex flex-row md:flex-col w-80 md:w-[312px] lg:w-[216px]">
      <div>{Icon && <Icon className="w-[50px]" />}</div>
      <div className="ml-5 space-y-2 md:ml-0 md:mt-5 md:space-y-4">
        <h3 className="font-bold leading-5 text-dark-1000">{item.title}</h3>
        <div className="text-dark-700 text-sm md:text-base">{item.desc}</div>
      </div>
    </div>
  );
}

const iconMapping = {
  THROUGHPUT: ThroughputIcon,
  SECURITY: SecurityIcon,
  IMMUTABILITY: ImmutabilityIcon,
  DEVELOPMENT: DevelopmentIcon,
  VARIETY: VarietyIcon,
};
