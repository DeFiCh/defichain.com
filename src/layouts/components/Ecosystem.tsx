import classNames from "classnames";
import DeFiChainLogo from "@components/icons/DeFiChainLogo";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { HeaderNavLinkItem } from "./HeaderNavLinkItem";

interface ColLabels {
  title?: string;
  subtitle: string;
}

export function Ecosystem() {
  const { t } = useTranslation("layout");
  const entries: Array<{ title: string; labels: ColLabels[] }> = t(
    "header.ecosystem.info",
    { returnObjects: true }
  );

  const MenuItems = {
    dropDownItems: [
      {
        label: entries[0].title,
        items: [
          {
            icon: "apps",
            href: "",
            title: entries[0].labels[0].title,
            subtitle: entries[0].labels[0].subtitle,
          },
          {
            icon: "dfi",
            href: "",
            title: entries[0].labels[1].title,
            subtitle: entries[0].labels[1].subtitle,
          },
          {
            icon: "governance",
            href: "",
            title: entries[0].labels[2].title,
            subtitle: entries[0].labels[2].subtitle,
          },
        ],
      },
      {
        label: entries[1].title,
        items: [
          {
            href: "",
            title: entries[1].labels[0].title,
          },
          {
            href: "",
            title: entries[1].labels[1].title,
          },
        ],
      },
    ],
    image: {
      href: "",
      subtitle: t("header.ecosystem.image.subtitle"),
    },
  };

  const [hoverState, setHoverState] = useState<string | undefined>(undefined);
  const dimension = useWindowDimensions();

  return (
    <div
      className={classNames(
        "flex",
        dimension.width < 1280 ? "flex-col" : "flex-row gap-x-20"
      )}
    >
      <div className="flex md:flex-row flex-col gap-y-[72px] gap-x-20">
        {/* first col */}
        <div className="flex flex-col">
          <div className="hidden md:block text-dark-500 font-bold leading-5 mb-10">
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
        <div className="flex flex-col">
          <div className="text-dark-500 font-bold leading-5 mb-7">
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
        className={classNames(
          "p-[0.5px] rounded-[15px] w-[416px] xl:h-[176px] md:h-[191px]",
          "cursor-pointer hidden md:block md:mt-[56px] ",
          "bg-dark-200 hover:accent-gradient-1 hover:transition-all hover:duration-300"
        )}
      >
        <a
          href={MenuItems.image.href}
          className={classNames(
            "w-full h-full p-8 rounded-[15px] border-[0.5px] flex flex-col",
            "border-dark-200 bg-dark-00 bg-[url(/assets/img/header/header-jellyfish.png)] bg-contain bg-no-repeat bg-right-top ",
            "hover:bg-[url(/assets/img/header/header-hover-jellyfish.png)] transition-all duration-300"
          )}
        >
          <DeFiChainLogo fill="#FFFFFF" className="w-[140px]" />
          <div className={classNames("text-dark-800 max-w-[178px] mt-2")}>
            {MenuItems.image.subtitle}
          </div>
        </a>
      </div>
    </div>
  );
}
