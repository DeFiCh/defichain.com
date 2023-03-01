// import { getBlockchainFeatureIcon } from "@components/icons/assets/blockchainFeatures";
import { ThroughputIcon } from "@components/icons/assets/blockchainFeatures/ThroughputIcon";
import { ImmutabilityIcon } from "@components/icons/assets/blockchainFeatures/ImmutabilityIcon";
// import { VarietyIcon } from "@components/icons/assets/blockchainFeatures/VarietyIcon";
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
    <div className="w-[216px] space-y-16">
      {items.map((item) => (
        <FeatureIcon item={item} />
      ))}
    </div>
  );
}

function FeatureIcon({ item }: { item: BlockchainFeatureItemProp }) {
  //   console.log(typeof iconMapping["IMMUTABILITY"]);
  const { title } = item;
  const Icon = iconMapping[title] as React.ElementType;
  console.log(Icon);

  return (
    <div className="grid grid-flow-row grid-cols-1 gap-4">
      {/* <Icon /> */}
      <h3 className="font-bold leading-5 text-dark-1000">{item.title}</h3>
      <div className="text-dark-700">{item.desc}</div>
    </div>
  );
  //   <div>Helloo</div>;
}

const iconMapping = {
  THROUGHPUT: ThroughputIcon,
  IMMUTABILITY: ImmutabilityIcon,
  //   VARIETY: VarietyIcon,
  SECURITY: SecurityIcon,
  DEVELOPMENT: DevelopmentIcon,
};
