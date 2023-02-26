import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "next-i18next";
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
          href: "",
          title: entries[0].title,
          subtitle: entries[0].subtitle,
        },
        {
          icon: "invest",
          href: "",
          title: entries[1].title,
          subtitle: entries[1].subtitle,
        },
        {
          icon: "dex",
          href: "",
          title: entries[2].title,
          subtitle: entries[2].subtitle,
        },
        {
          icon: "wallet",
          href: "",
          title: entries[3].title,
          subtitle: entries[3].subtitle,
        },
        {
          icon: "masternode",
          href: "",
          title: entries[4].title,
          subtitle: entries[4].subtitle,
        },
      ],
    },
    image: {
      title: t("header.explore.image.title"),
      subtitle: t("header.explore.image.subtitle"),
      href: "",
    },
  };

  const [hoverState, setHoverState] = useState<string | undefined>(undefined);

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

        <div className="group cursor-pointer hover:accent-gradient-1 hover:transition hover:duration-500 hidden md:block rounded-[15px] bg-dark-200 w-[416px] xl:h-[176px] md:h-[191px] p-[0.5px]">
          <a
            href={MenuItems.image.href}
            className={classNames(
              `header-explore-card-bg p-8 bg-dark-00 w-full h-full rounded-[15px] flex flex-col bg-contain bg-no-repeat bg-right-bottom`
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
