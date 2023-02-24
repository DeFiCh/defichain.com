import classNames from "classnames";
import { DeFiChainLogo } from "@components/icons/DeFiChainLogo";
import { useEffect, useState } from "react";
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
    hoverBgImage: "/assets/img/header/header-hover-jellyfish.png",
    subtitle: "Powered by the Security of Bitcoin & Flexibility of Ethereum",
  },
};

export function Ecosystem() {
  const [hoverState, setHoverState] = useState<string | undefined>(undefined);
  const [cardImage, setCardImage] = useState(`url(${MenuItems.image.bgImage})`);
  const [cardHover, setCardHover] = useState(false);

  useEffect(() => {
    if (cardHover) {
      setCardImage(`url(${MenuItems.image.hoverBgImage})`);
    } else {
      setCardImage(`url(${MenuItems.image.bgImage})`);
    }
  }, [cardHover]);
  return (
    <div className="flex xl:flex-row md:flex-col">
      <div className="flex md:flex-row flex-col gap-y-[72px]">
        {/* first col */}
        <div className="flex flex-col min-w-[368px]">
          <div className="hidden md:block text-dark-500 font-bold leading-5 mb-8">
            {MenuItems.dropDownItems[0].label}
          </div>
          <div className="flex flex-col gap-y-8">
            {MenuItems.dropDownItems[0].items.map((item, key) => (
              <HeaderNavLinkItem
                key={key}
                hoverState={hoverState}
                setHoverState={setHoverState}
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
            {MenuItems.dropDownItems[1].items.map((item, key) => (
              <HeaderNavLinkItem
                key={key}
                hoverState={hoverState}
                setHoverState={setHoverState}
                label={item.title}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>

      {/* image */}
      <div
        onMouseEnter={() => {
          setCardHover(true);
        }}
        onMouseLeave={() => {
          setCardHover(false);
        }}
        className={classNames(
          "p-[0.5px] hidden md:block md:mt-[56px] group cursor-pointer hover:accent-gradient-1 rounded-[15px] w-[416px] xl:h-[176px] md:h-[191px]"
        )}
      >
        <div
          style={{ backgroundImage: cardImage }}
          className={classNames(
            `w-full h-full p-8 border-[0.5px] border-dark-200 bg-dark-00 rounded-[15px] flex flex-col bg-contain bg-no-repeat bg-right-top`
          )}
        >
          <DeFiChainLogo fill="#FFFFFF" className="w-[140px]" />
          <div className={classNames("text-dark-800 max-w-[178px] mt-2")}>
            {MenuItems.image.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
