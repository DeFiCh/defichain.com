import classNames from "classnames";
import { DeFiChainLogo } from "@components/icons/DeFiChainLogo";
import { HeaderNavLinkItem } from "./HeaderNavLinkItem";

const MenuItems = {
  label: "Ecosystem",
  dropDownItems: [
    {
      label: "DIVE INTO THE ECOSYSTEM",
      items: [
        {
          icon: "apps",
          href: "",
          title: "DefiChain Apps",
          subtitle: "See DeFiChain in action",
        },
        {
          icon: "dfi",
          href: "",
          title: "DeFi Meta Chain",
          subtitle: "Expand possibilities in DeFiChain",
        },
        {
          icon: "governance",
          href: "",
          title: "Governance",
          subtitle: "For DeFiChain, By DeFiChain",
        },
      ],
    },
    {
      label: "GET INVOLVED WITH DEFICHAIN",
      items: [
        {
          href: "",
          title: "Bug Bounty",
        },
        {
          href: "",
          title: "$100M Accelerator Program",
        },
      ],
    },
  ],
  image: {
    bgImage: "/assets/img/header/header-jellyfish.png",
    subtitle: "Powered by the Security of Bitcoin & Flexibility of Ethereum",
  },
};

export function Ecosystem() {
  return (
    <div className="flex xl:flex-row md:flex-col">
      <div className="flex md:flex-row flex-col gap-y-[72px]">
        {/* first col */}
        <div className="flex flex-col min-w-[368px]">
          <div className="hidden md:block text-dark-500 font-bold leading-5 mb-8">
            {MenuItems.dropDownItems[0].label}
          </div>
          <div className="flex flex-col gap-y-8">
            {MenuItems.dropDownItems[0].items.map((item) => (
              <HeaderNavLinkItem
                label={item.title}
                subLabel={item.subtitle}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        {/* second col */}
        <div className="flex flex-col min-w-[368px]">
          <div className="text-dark-500 font-bold leading-5 mb-8">
            {MenuItems.dropDownItems[1].label}
          </div>
          <div className="flex flex-col gap-y-8">
            {MenuItems.dropDownItems[1].items.map((item) => (
              <HeaderNavLinkItem label={item.title} href={item.href} />
            ))}
          </div>
        </div>
      </div>

      {/* image */}
      <div
        style={{ backgroundImage: `url(${MenuItems.image.bgImage})` }}
        className={classNames(
          `hidden md:block md:mt-[56px] p-8 border-[0.5px] border-dark-200 bg-dark-00 rounded-[15px] flex flex-col w-[416px] xl:h-[240px] md:h-[176px] bg-contain bg-no-repeat bg-right-top`
        )}
      >
        <DeFiChainLogo fill="#FFFFFF" className="w-[140px]" />
        <div className={classNames("text-dark-800 max-w-[178px] mt-2")}>
          {MenuItems.image.subtitle}
        </div>
      </div>
    </div>
  );
}
