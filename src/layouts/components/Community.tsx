import { useState } from "react";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { HeaderNavLinkItem } from "./HeaderNavLinkItem";

interface ColLabels {
  title?: string;
  subtitle: string;
}

export function Community() {
  const { t } = useTranslation("layout");
  const entries: Array<{ title: string; labels: ColLabels[] }> = t(
    "header.community.info",
    { returnObjects: true }
  );
  const dimension = useWindowDimensions();

  const MenuItems = {
    dropDownItems: [
      {
        label: entries[0].title,
        items: [
          {
            icon: "dfi",
            href: "https://blog.defichain.com/",
            title: entries[0].labels[0].title,
            subtitle: entries[0].labels[0].subtitle,
          },
        ],
      },
      {
        label: entries[1].title,
        items: [
          {
            href: "https://www.reddit.com/r/defiblockchain/",
            title: entries[1].labels[0].title,
          },
          {
            href: "https://twitter.com/defichain",
            title: entries[1].labels[1].title,
          },
          {
            href: "https://www.facebook.com/defichain.official",
            title: entries[1].labels[2].title,
          },
          {
            href: "https://github.com/DeFiCh/ain",
            title: entries[1].labels[3].title,
          },
          {
            href: "https://www.youtube.com/DeFiChain",
            title: entries[1].labels[4].title,
          },
          {
            href: "https://www.linkedin.com/company/defichain",
            title: entries[1].labels[5].title,
          },
          {
            href: "https://discord.com/invite/py55egyaGy",
            title: entries[1].labels[6].title,
          },
          {
            href: "https://coinmarketcap.com/community/profile/DeFiChain",
            title: entries[1].labels[7].title,
          },

          {
            href: "https://t.me/defiblockchain",
            title: entries[1].labels[8].title,
          },
          {
            href: "https://t.me/defiblockchain_DE",
            title: entries[1].labels[9].title,
          },
          {
            href: "https://t.me/defiblockchain_FR",
            title: entries[1].labels[10].title,
          },
          {
            href: "https://t.me/official_defichain_es",
            title: entries[1].labels[11].title,
          },
          {
            href: "https://t.me/defiblockchain_IT",
            title: entries[1].labels[12].title,
          },
          {
            href: "https://t.me/defiblockchain_ID",
            title: entries[1].labels[13].title,
          },
          {
            href: "https://t.me/defiblockchain_TR",
            title: entries[1].labels[14].title,
          },
          {
            href: "https://t.me/defichain_ZH",
            title: entries[1].labels[15].title,
          },
        ],
      },
    ],
  };

  const [hoverState, setHoverState] = useState<string | undefined>(undefined);
  return (
    <div
      className={classNames("flex md:flex-row flex-col gap-y-9 gap-x-32", {
        "gap-x-16": dimension.width < 784,
      })}
    >
      {/* first col */}
      <div className="flex flex-col">
        <div>
          <div className="hidden md:block text-dark-500 font-bold leading-5 mb-10">
            {MenuItems.dropDownItems[0].label}
          </div>
          <div className="flex flex-col gap-y-8">
            {MenuItems.dropDownItems[0].items.map((item, key) => (
              <HeaderNavLinkItem
                target="_blank"
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
      </div>
      {/* second col */}
      <div className="flex flex-col">
        <div className="text-dark-500 font-bold leading-5 mb-8">
          {MenuItems.dropDownItems[1].label}
        </div>
        <div
          className={classNames(
            "grid grid-flow-col xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 xl:grid-rows-4 lg:grid-rows-6 grid-rows-8",
            "gap-y-6 gap-x-10 lg:gap-x-20 place-items-start"
          )}
        >
          {MenuItems.dropDownItems[1].items.map((item, key) => (
            <div key={key} className="w-[160px]">
              <HeaderNavLinkItem
                target="_blank"
                haveIcon
                hoverState={hoverState}
                setHoverState={setHoverState}
                label={item.title}
                href={item.href}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
