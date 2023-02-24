import { useState } from "react";
import { HeaderNavLinkItem } from "./HeaderNavLinkItem";

const MenuItems = {
  label: "Build",
  dropDownItems: {
    label: "START BUILDING",
    items: [
      {
        icon: "jellyfish",
        href: "",
        title: "Jellyfish SDK",
        subtitle: "Build for modern DeFi Applications",
      },
      {
        icon: "whitepaper",
        href: "",
        title: "DeFiChain White Paper",
        subtitle: "Fundamentals of DeFiChain",
      },

      {
        icon: "github",
        href: "",
        title: "GitHub",
        subtitle: "Track recent developments",
      },
      {
        icon: "developer",
        href: "",
        title: "Developer Resources",
        subtitle: "Start building on DeFiChain",
      },

      {
        icon: "media",
        href: "",
        title: "Media Assets",
        subtitle: "Brand resources of DeFiChain",
      },
      {
        icon: "security",
        href: "",
        title: "Security",
        subtitle: "Trustless and decentralized",
      },
    ],
  },
};

export function Build() {
  const [hoverState, setHoverState] = useState<string | undefined>(undefined);
  return (
    <div className="flex flex-col">
      <div className="hidden md:block text-dark-500 font-bold leading-5 mb-8">
        {MenuItems.dropDownItems.label}
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows-2 grid-rows-6 grid-flow-col gap-y-8 gap-x-8">
        {MenuItems.dropDownItems.items.map((item, key) => (
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
  );
}
