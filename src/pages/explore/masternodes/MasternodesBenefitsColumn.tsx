import {
  PassiveIncomeIcon,
  PassiveIncomeIconHover,
} from "@components/icons/assets/masternodesBenefits/PassiveIncomeIcon";
import {
  StakingRewardsIcon,
  StakingRewardsIconHover,
} from "@components/icons/assets/masternodesBenefits/StakingRewardsIcon";
import {
  NetworkSecurityIcon,
  NetworkSecurityIconHover,
} from "@components/icons/assets/masternodesBenefits/NetworkSecurityIcon";
import {
  GovernanceIcon,
  GovernanceIconHover,
} from "@components/icons/assets/masternodesBenefits/GovernanceIcon";
import classNames from "classnames";

interface BlockchainFeatureItemProp {
  title: string;
  desc: string;
}

export function MasternodesBenefitsColumn({
  items,
  id,
}: {
  items: Array<BlockchainFeatureItemProp>;
  id: string;
}): JSX.Element {
  return (
    <div className="flex flex-1 flex-wrap gap-12 justify-between md:gap-y-[120px] lg:mr-[64px] lg:gap-y-16 lg:gap-x-10">
      {items.map((item) => (
        <FeatureIcon item={item} id={id} key={item.title} />
      ))}
    </div>
  );
}

function FeatureIcon({
  item,
  id,
}: {
  item: BlockchainFeatureItemProp;
  id: string;
}) {
  const Icon = iconMapping[item.title] as React.ElementType;
  // const IconOnHover = iconMapping[`${item.title}_hover`] as React.ElementType;
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  return (
    <div
      className="masternode-benefits-feature-item flex flex-row md:flex-col w-full md:w-[306px] lg:w-[206px]"
      // onMouseOver={handleMouseOver}
      // onFocus={handleMouseOver}
      // onMouseOut={handleMouseOut}
      // onBlur={handleMouseOut}
    >
      <div className="w-[50px]">
        <Icon
          className="w-[50px] md:w-fit h-[50px]"
          id={`${id}-${item.title}`}
        />
        {/* {isHovering && Icon ? (
          <IconOnHover className="w-[50px] md:w-fit h-[50px]" />
        ) : (
          <Icon
            className="w-[50px] md:w-fit h-[50px]"
            id={`${id}-${item.title}`}
          />
        )} */}
      </div>

      <div className="space-y-4 ml-[58px] md:ml-0 md:mt-5">
        <h3
          className={classNames(
            "font-bold leading-5 text-dark-1000 transition duration-300 ease-in-out"
            // {
            //   "!text-brand-100": isHovering,
            // }
          )}
        >
          {item.title}
        </h3>
        <div className="text-dark-700 text-sm pr-[26px] md:pr-0 md:w-[206px] lg:text-base font-desc">
          {item.desc}
        </div>
      </div>
    </div>
  );
}

const iconMapping = {
  "PASSIVE INCOME": PassiveIncomeIcon,
  "PASSIVE INCOME_hover": PassiveIncomeIconHover,
  "STAKING REWARDS": StakingRewardsIcon,
  "STAKING REWARDS_hover": StakingRewardsIconHover,
  "NETWORK SECURITY": NetworkSecurityIcon,
  "NETWORK SECURITY_hover": NetworkSecurityIconHover,
  GOVERNANCE: GovernanceIcon,
  GOVERNANCE_hover: GovernanceIconHover,
};
