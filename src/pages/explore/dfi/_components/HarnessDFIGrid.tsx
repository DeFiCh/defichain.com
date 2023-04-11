import {
  VarietyIcon,
  VarietyIconHover,
} from "@components/icons/assets/exploreGetDFI/VarietyIcon";
import {
  CollateralIcon,
  CollateralIconHover,
} from "@components/icons/assets/exploreGetDFI/CollateralIcon";
import {
  NodesIcon,
  NodesIconHover,
} from "@components/icons/assets/exploreGetDFI/NodesIcon";
import {
  TokenizationIcon,
  TokenizationIconHover,
} from "@components/icons/assets/exploreGetDFI/TokenizationIcon";
import {
  CommunityIcon,
  CommunityIconHover,
} from "@components/icons/assets/exploreGetDFI/CommunityIcon";
import {
  LPIcon,
  LPIconHover,
} from "@components/icons/assets/exploreGetDFI/LPIcon";
import classNames from "classnames";

interface HarnessDFIGridProps {
  title: string;
  desc: string;
  icon: HarnessDFIICONS;
  id?: string;
}

export function HarnessDFIGrid({
  gridItems,
  isMobile = false,
}: {
  gridItems: HarnessDFIGridProps[];
  isMobile?: boolean;
}) {
  return (
    <div
      className={classNames(
        "grid grid-flow-row ",
        "lg:grid-rows-2 lg:grid-cols-3 lg:gap-[89.5px]",
        "md:grid-rows-3 md:grid-cols-2 md:gap-x-[89.5px] md:gap-y-[75px]",
        "gap-y-12"
      )}
    >
      {gridItems.map((item, index) => (
        <HarnessDFIGridItem
          key={index}
          title={item.title}
          desc={item.desc}
          icon={item.icon}
          id={isMobile ? `${item.icon}-mobile` : `${item.icon}`}
        />
      ))}
    </div>
  );
}

function HarnessDFIGridItem({ title, desc, icon, id }: HarnessDFIGridProps) {
  const Icon = iconMapping[icon];

  // Todo: to uncomment when animations are ready
  // const HoverIcon = iconMapping[`${icon + 1}`];
  // const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      // onMouseEnter={() => setIsHovering(true)}
      // onMouseLeave={() => setIsHovering(false)}
      className={classNames("flex flex-col md:w-[246px] w-full")}
    >
      <div className="md:place-self-center mb-5">
        {/* {isHovering && HoverIcon !== undefined ? ( */}
        {/*  <div className="transition-all duration-300 ease-in-out"> */}
        {/*    <HoverIcon /> */}
        {/*  </div> */}
        {/* ) : ( */}
        <div className="transition-all duration-300 ease-in-out">
          <Icon id={id ?? `${icon}`} />
        </div>
        {/* )} */}
      </div>

      <div className="md:place-self-center md:text-center text-left text-dark-1000 leading-5 font-bold mb-4">
        {title}
      </div>
      <div className="md:text-center font-desc text-dark-700">{desc}</div>
    </div>
  );
}

export enum HarnessDFIICONS {
  VARIETY,
  VARIETY_HOVER,
  COLLATERAL,
  COLLATERAL_HOVER,
  MASTERNODE,
  MASTERNODE_HOVER,
  TOKENIZATION,
  TOKENIZATION_HOVER,
  COMMUNITY,
  COMMUNITY_HOVER,
  POOLS,
  POOLS_HOVER,
}

const iconMapping = {
  [HarnessDFIICONS.VARIETY]: VarietyIcon,
  [HarnessDFIICONS.VARIETY_HOVER]: VarietyIconHover,
  [HarnessDFIICONS.COLLATERAL]: CollateralIcon,
  [HarnessDFIICONS.COLLATERAL_HOVER]: CollateralIconHover,
  [HarnessDFIICONS.MASTERNODE]: NodesIcon,
  [HarnessDFIICONS.MASTERNODE_HOVER]: NodesIconHover,
  [HarnessDFIICONS.TOKENIZATION]: TokenizationIcon,
  [HarnessDFIICONS.TOKENIZATION_HOVER]: TokenizationIconHover,
  [HarnessDFIICONS.COMMUNITY]: CommunityIcon,
  [HarnessDFIICONS.COMMUNITY_HOVER]: CommunityIconHover,
  [HarnessDFIICONS.POOLS]: LPIcon,
  [HarnessDFIICONS.POOLS_HOVER]: LPIconHover,
};
