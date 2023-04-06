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
        <Icon className="w-fit h-[50px]" id={`${id}-${item.title}`} />
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

const iconMapping = {
  // /explore - masternode items
  "PASSIVE INCOME": PassiveIncomeIcon,
  "PASSIVE INCOME_hover": PassiveIncomeIconHover,
  "STAKING REWARDS": StakingRewardsIcon,
  "STAKING REWARDS_hover": StakingRewardsIconHover,
  "NETWORK SECURITY": NetworkSecurityIcon,
  "NETWORK SECURITY_hover": NetworkSecurityIconHover,
  GOVERNANCE: GovernanceIcon,
  GOVERNANCE_hover: GovernanceIconHover,

  // /explore - Why DEX items
  "TRADE ASSETS": TradeAssetsIcon,
  "TRADE ASSETS_hover": TradeAssetsIconHover,
  "WIDE SELECTION OF TOKENS": WideSelectionIcon,
  "WIDE SELECTION OF TOKENS_hover": WideSelectionIconHover,
  "MINE LIQUIDITY FROM POOLS": MineLiquidityIcon,
  "MINE LIQUIDITY FROM POOLS_hover": MineLiquidityIconHover,
  "ADVANCED SWAPS": AdvancedSwapsIcon,
  "ADVANCED SWAPS_hover": AdvancedSwapsIconHover,
};
