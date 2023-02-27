import { useState } from "react";
import { useTranslation } from "next-i18next";
import { HeaderNavLinkItem } from "./HeaderNavLinkItem";

export function Build() {
  const { t } = useTranslation("layout");
  const entries: Array<{ title: string; subtitle: string }> = t(
    "header.build.labels",
    { returnObjects: true }
  );

  const MenuItems = {
    dropDownItems: {
      label: t("header.build.title"),
      items: [
        {
          icon: "jellyfish",
          href: "",
          title: entries[0].title,
          subtitle: entries[0].subtitle,
        },
        {
          icon: "whitepaper",
          href: "https://defichain.com/white-paper",
          title: entries[1].title,
          subtitle: entries[1].subtitle,
        },

        {
          icon: "github",
          href: "https://github.com/DeFiCh/ain",
          title: entries[2].title,
          subtitle: entries[2].subtitle,
        },
        {
          icon: "developer",
          href: "",
          title: entries[3].title,
          subtitle: entries[3].subtitle,
        },

        {
          icon: "media",
          href: "",
          title: entries[4].title,
          subtitle: entries[4].subtitle,
        },
        {
          icon: "security",
          href: "",
          title: entries[5].title,
          subtitle: entries[5].subtitle,
        },
      ],
    },
  };

  const [hoverState, setHoverState] = useState<string | undefined>(undefined);
  return (
    <div className="flex flex-col">
      <div className="hidden md:block text-dark-500 font-bold leading-5 mb-10">
        {MenuItems.dropDownItems.label}
      </div>
      <div className="grid md:grid-cols-3 lg:grid-rows-2 md:grid-rows-[80px_minmax(100px,_1fr)] grid-rows-6 grid-flow-col gap-y-8 gap-x-8">
        {MenuItems.dropDownItems.items.map((item, key) => (
          <HeaderNavLinkItem
            haveIcon={item.title === "GitHub"}
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
  );
}
