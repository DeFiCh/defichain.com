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
import {
  TradeAssetsIcon,
  TradeAssetsIconHover,
} from "@components/icons/assets/whyDex/TradeAssets";
import {
  WideSelectionIcon,
  WideSelectionIconHover,
} from "@components/icons/assets/whyDex/WideSelection";
import {
  MineLiquidityIcon,
  MineLiquidityIconHover,
} from "@components/icons/assets/whyDex/MineLiquidity";
import {
  AdvancedSwapsIcon,
  AdvancedSwapsIconHover,
} from "@components/icons/assets/whyDex/AdvancedSwaps";

interface BlockchainFeatureItemProp {
  title: string;
  desc: string;
  icon: IconTypes;
}

export function SvgIconsColumn({
  items,
  id,
  customSectionStyle,
  customClassStyle,
  customParagraphStyle,
}: {
  items: Array<BlockchainFeatureItemProp>;
  id: string;
  customSectionStyle?: string;
  customClassStyle?: string;
  customParagraphStyle?: string;
}): JSX.Element {
  return (
    <div
      className={classNames(
        customSectionStyle,
        "flex flex-1 flex-wrap justify-between md:gap-y-[120px] lg:mr-[64px] lg:gap-y-16 lg:gap-x-10"
      )}
    >
      {items.map((item) => (
        <FeatureIcon
          item={item}
          id={id}
          key={item.title}
          customClassStyle={customClassStyle}
          customParagraphStyle={customParagraphStyle}
        />
      ))}
    </div>
  );
}

function FeatureIcon({
  item,
  id,
  customClassStyle,
  customParagraphStyle,
}: {
  item: BlockchainFeatureItemProp;
  id: string;
  customClassStyle?: string;
  customParagraphStyle?: string;
}) {
  const Icon = iconMapping[item.icon] as React.ElementType;
  // const IconOnHover = iconMapping[`${item.icon}_hover`] as React.ElementType;
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  return (
    <div
      className={classNames(
        customClassStyle,
        "flex md:flex-col w-full md:w-[306px] lg:w-[206px]"
      )}
      // onMouseOver={handleMouseOver}
      // onFocus={handleMouseOver}
      // onMouseOut={handleMouseOut}
      // onBlur={handleMouseOut}
    >
      <div className="w-[50px]">
        <Icon className="w-fit h-[50px]" id={`${id}-${item.icon}`} />
        {/* {isHovering && Icon ? (
          <IconOnHover className="w-[50px] md:w-fit h-[50px]" />
        ) : (
          <Icon
            className="w-[50px] md:w-fit h-[50px]"
            id={`${id}-${item.title}`}
          />
        )} */}
      </div>

      <div
        className={classNames(
          "space-y-4 md:ml-0 md:mt-5",
          customParagraphStyle
        )}
      >
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

export enum IconTypes {
  PASSIVE_INCOME = "PASSIVE INCOME",
  STAKING_REWARDS = "STAKING REWARDS",
  NETWORK_SECURITY = "NETWORK SECURITY",
  GOVERNANCE = "GOVERNANCE",
  TRADE_ASSETS = "TRADE ASSETS",
  WIDE_SELECTION_OF_TOKENS = "WIDE SELECTION OF TOKENS",
  PROFIT_FROM_LIQUIDITY_MINING = "PROFIT FROM LIQUIDITY MINING",
  ADVANCED_SWAPS = "ADVANCED SWAPS",
}

const iconMapping = {
  // /explore - masternode items
  [IconTypes.PASSIVE_INCOME]: PassiveIncomeIcon,
  [`${IconTypes.PASSIVE_INCOME}_hover`]: PassiveIncomeIconHover,
  [IconTypes.STAKING_REWARDS]: StakingRewardsIcon,
  [`${IconTypes.STAKING_REWARDS}_hover`]: StakingRewardsIconHover,
  [IconTypes.NETWORK_SECURITY]: NetworkSecurityIcon,
  [`${IconTypes.NETWORK_SECURITY}_hover`]: NetworkSecurityIconHover,
  [IconTypes.GOVERNANCE]: GovernanceIcon,
  [`${IconTypes.GOVERNANCE}_hover`]: GovernanceIconHover,

  // /explore - Why DEX items
  [IconTypes.TRADE_ASSETS]: TradeAssetsIcon,
  [`${IconTypes.TRADE_ASSETS}_hover`]: TradeAssetsIconHover,
  [IconTypes.WIDE_SELECTION_OF_TOKENS]: WideSelectionIcon,
  [`${IconTypes.WIDE_SELECTION_OF_TOKENS}_hover`]: WideSelectionIconHover,
  [IconTypes.PROFIT_FROM_LIQUIDITY_MINING]: MineLiquidityIcon,
  [`${IconTypes.PROFIT_FROM_LIQUIDITY_MINING}_hover`]: MineLiquidityIconHover,
  [IconTypes.ADVANCED_SWAPS]: AdvancedSwapsIcon,
  [`${IconTypes.ADVANCED_SWAPS}_hover`]: AdvancedSwapsIconHover,
};
