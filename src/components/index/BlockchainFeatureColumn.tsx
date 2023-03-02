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
    <div className="space-y-16 flex-1">
      {items.map((item) => (
        <FeatureIcon item={item} />
      ))}
    </div>
  );
}

function FeatureIcon({ item }: { item: BlockchainFeatureItemProp }) {
  const Icon = iconMapping[item.title] as React.ElementType;

  return (
    <div className="grid grid-flow-row grid-cols-1 gap-4">
      {Icon && <Icon />}
      <h3 className="font-bold leading-5 text-dark-1000 mt-1">{item.title}</h3>
      <div className="text-dark-700">{item.desc}</div>
    </div>
  );
}

const iconMapping = {
  THROUGHPUT: ThroughputIcon,
  IMMUTABILITY: ImmutabilityIcon,
  VARIETY: VarietyIcon,
  SECURITY: SecurityIcon,
  DEVELOPMENT: DevelopmentIcon,
};
