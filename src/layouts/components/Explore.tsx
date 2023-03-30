import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { HeaderNavLinkItem } from "./HeaderNavLinkItem";

export function Explore() {
  const { t } = useTranslation("layout");
  const entries: Array<{ title: string; subtitle: string }> = t(
    "header.explore.labels",
    { returnObjects: true }
  );
  const MenuItems = {
    dropDownItems: {
      label: t("header.explore.title"),
      items: [
        {
          icon: "dfi",
          href: "/explore/dfi",
          title: entries[0].title,
          subtitle: entries[0].subtitle,
        },
        {
          icon: "dex",
          href: "/explore/dex",
          title: entries[1].title,
          subtitle: entries[1].subtitle,
        },
        {
          icon: "wallet",
          href: "/explore/wallets",
          title: entries[2].title,
          subtitle: entries[2].subtitle,
        },
        {
          icon: "masternode",
          href: "/explore/masternodes",
          title: entries[3].title,
          subtitle: entries[3].subtitle,
        },
      ],
    },
    image: {
      title: t("header.explore.image.title"),
      subtitle: t("header.explore.image.subtitle"),
      href: "/explore/dfi",
    },
  };

  const [hoverState, setHoverState] = useState<string | undefined>(undefined);
  const dimension = useWindowDimensions();

  return (
    <div className="flex flex-col">
      <div className="text-dark-500 font-bold leading-5 lg:mb-6 mb-10 md:block hidden">
        {MenuItems.dropDownItems.label}
      </div>
      <div
        className={classNames(
          "flex",
          dimension.width < 1280 ? "flex-col gap-10" : "flex-row"
        )}
      >
        <div
          className={classNames(
            "grid md:grid-rows-2 lg:grid-cols-[364px_minmax(364px,_1fr)_1px] md:grid-cols-2 grid-rows-4",
            "gap-x-10 grid-flow-col",
            dimension.width < 1280 ? "gap-y-8" : "gap-y-0"
          )}
        >
          {MenuItems.dropDownItems.items.map((item, key) => (
            <HeaderNavLinkItem
              key={key}
              hoverState={hoverState}
              setHoverState={setHoverState}
              href={item.href}
              icon={item.icon}
              label={item.title}
              subLabel={item.subtitle}
            />
          ))}
        </div>

        <div
          className={classNames(
            "p-[0.5px] rounded-[15px] w-[416px] xl:h-[176px] md:h-[191px]",
            "group cursor-pointer hidden md:block",
            "bg-dark-200 hover:accent-gradient-1 hover:transition-all hover:duration-300"
          )}
        >
          <a
            href={MenuItems.image.href}
            className={classNames(
              "p-8 w-full h-full rounded-[15px] flex flex-col",
              "bg-dark-00 bg-contain bg-no-repeat bg-right-bottom bg-[url(/assets/img/header/header-metal-dfi-coin.png)]",
              "hover:bg-[url(/assets/img/header/header-hover-dfi-coin.png)] transition-all duration-300"
            )}
          >
            <div className="font-bold text-2xl text-dark-1000">
              {MenuItems.image.title}
            </div>
            <div className="text-dark-800 max-w-[178px] mt-1 text-base font-normal">
              {MenuItems.image.subtitle}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
