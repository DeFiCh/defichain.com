import { useState } from "react";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
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

  const MenuItems = {
    dropDownItems: [
      {
        label: entries[0].title,
        items: [
          {
            icon: "dfi",
            href: "",
            title: entries[0].labels[0].title,
            subtitle: entries[0].labels[0].subtitle,
          },
          {
            icon: "newsletter",
            href: "",
            title: entries[0].labels[1].title,
            subtitle: entries[0].labels[1].subtitle,
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
          {
            href: "",
            title: entries[1].labels[2].title,
          },
          {
            href: "",
            title: entries[1].labels[3].title,
          },
          {
            href: "",
            title: entries[1].labels[4].title,
          },
          {
            href: "",
            title: entries[1].labels[5].title,
          },
          {
            href: "",
            title: entries[1].labels[6].title,
          },
          {
            href: "",
            title: entries[1].labels[7].title,
          },

          {
            href: "",
            title: entries[1].labels[8].title,
          },
          {
            href: "",
            title: entries[1].labels[9].title,
          },
          {
            href: "",
            title: entries[1].labels[10].title,
          },
          {
            href: "",
            title: entries[1].labels[11].title,
          },
          {
            href: "",
            title: entries[1].labels[12].title,
          },
          {
            href: "",
            title: entries[1].labels[13].title,
          },
          {
            href: "",
            title: entries[1].labels[14].title,
          },
        ],
      },
    ],
  };

  const [hoverState, setHoverState] = useState<string | undefined>(undefined);
  return (
    <div className="flex md:flex-row flex-col gap-y-9 gap-x-32">
      {/* first col */}
      <div className="flex flex-col">
        <div>
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
      </div>
      {/* second col */}
      <div className="flex flex-col">
        <div className="text-dark-500 font-bold leading-5 mb-8">
          {MenuItems.dropDownItems[1].label}
        </div>
        <div
          className={classNames(
            "grid grid-flow-col xl:grid-cols-4 xl:grid-rows-4 lg:grid-cols-3 lg:grid-rows-5 grid-cols-2 grid-rows-8",
            "gap-y-6 md:gap-x-20 gap-x-10 place-items-start"
          )}
        >
          {MenuItems.dropDownItems[1].items.map((item, key) => (
            <div key={key} className="w-[160px]">
              <HeaderNavLinkItem
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
