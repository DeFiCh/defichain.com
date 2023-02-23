import classNames from "classnames";
import { useEffect, useState } from "react";
import { HeaderNavLinkItem } from "./HeaderNavLinkItem";

const MenuItems = {
  label: "Explore",
  dropDownItems: {
    label: "EXPLORE DEFICHAIN",
    items: [
      {
        icon: "dfi",
        href: "",
        title: "$DFI",
        subtitle: "Learn about the token",
      },
      {
        icon: "invest",
        href: "",
        title: "Invest, Trade and Earn",
        subtitle: "Explore use cases of DeFiChain",
      },
      {
        icon: "dex",
        href: "",
        title: "Decentralized Exchange",
        subtitle: "Maximize your assets",
      },
      {
        icon: "wallet",
        href: "",
        title: "Wallets",
        subtitle: "Store assets in your own way",
      },
      {
        icon: "masternode",
        href: "",
        title: "Masternodes",
        subtitle: "Place your stakes in DeFiChain",
      },
    ],
  },
  image: {
    bgImage: "/assets/img/header/header-metal-dfi-coin.png",
    hoverBgImage: "/assets/img/header/header-hover-dfi-coin.png",
    title: "$DFI",
    subtitle: "Learn about the token and where to get",
    href: "",
  },
};

export function Explore() {
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
    <div className="flex flex-col">
      <div className="text-dark-500 font-bold leading-5 mb-[36px] md:block hidden">
        {MenuItems.dropDownItems.label}
      </div>
      <div className="flex xl:flex-row md:flex-col gap-8">
        <div className="flex md:flex-row flex-col gap-y-8 gap-x-6">
          <div className="flex-col space-y-8 min-w-[368px]">
            <HeaderNavLinkItem
              hoverState={hoverState}
              setHoverState={setHoverState}
              href={MenuItems.dropDownItems.items[0].href}
              icon={MenuItems.dropDownItems.items[0].icon}
              label={MenuItems.dropDownItems.items[0].title}
              subLabel={MenuItems.dropDownItems.items[0].subtitle}
            />
            <HeaderNavLinkItem
              hoverState={hoverState}
              setHoverState={setHoverState}
              href={MenuItems.dropDownItems.items[1].href}
              icon={MenuItems.dropDownItems.items[1].icon}
              label={MenuItems.dropDownItems.items[1].title}
              subLabel={MenuItems.dropDownItems.items[1].subtitle}
            />
            <HeaderNavLinkItem
              hoverState={hoverState}
              setHoverState={setHoverState}
              href={MenuItems.dropDownItems.items[2].href}
              icon={MenuItems.dropDownItems.items[2].icon}
              label={MenuItems.dropDownItems.items[2].title}
              subLabel={MenuItems.dropDownItems.items[2].subtitle}
            />
          </div>
          <div className="flex-col space-y-8 min-w-[368px]">
            <HeaderNavLinkItem
              hoverState={hoverState}
              setHoverState={setHoverState}
              href={MenuItems.dropDownItems.items[3].href}
              icon={MenuItems.dropDownItems.items[3].icon}
              label={MenuItems.dropDownItems.items[3].title}
              subLabel={MenuItems.dropDownItems.items[3].subtitle}
            />
            <HeaderNavLinkItem
              hoverState={hoverState}
              setHoverState={setHoverState}
              href={MenuItems.dropDownItems.items[4].href}
              icon={MenuItems.dropDownItems.items[4].icon}
              label={MenuItems.dropDownItems.items[4].title}
              subLabel={MenuItems.dropDownItems.items[4].subtitle}
            />
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setCardHover(true);
          }}
          onMouseLeave={() => {
            setCardHover(false);
          }}
          className="group cursor-pointer hover:accent-gradient-1 hidden md:block rounded-[15px] bg-dark-200 w-[416px] xl:h-[176px] md:h-[191px] p-[0.5px]"
        >
          <a
            href={MenuItems.image.href}
            style={{ backgroundImage: cardImage }}
            className={classNames(
              `p-8 bg-dark-00 w-full h-full rounded-[15px] flex flex-col bg-contain bg-no-repeat bg-right-bottom`
            )}
          >
            <div className="font-bold text-dark-1000">
              {MenuItems.image.title}
            </div>
            <div className={classNames("text-dark-800 max-w-[178px] mt-1")}>
              {MenuItems.image.subtitle}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
