import { HeaderNavLinkItem } from "./HeaderNavLinkItem";

const MenuItems = {
  label: "Community",
  dropDownItems: [
    {
      label: "DIVE INTO THE ECOSYSTEM",
      items: [
        {
          icon: "apps",
          href: "",
          title: "Blog",
          subtitle: "Read and learn more",
        },
        {
          icon: "whitepaper",
          href: "",
          title: "Newsletter",
          subtitle: "Get the latest news",
        },
      ],
    },
    {
      label: "JOIN COMMUNITIES",
      items: [
        {
          href: "",
          title: "Reddit",
        },
        {
          href: "",
          title: "Twitter",
        },
        {
          href: "",
          title: "Facebook",
        },
        {
          href: "",
          title: "GitHub",
        },
        {
          href: "",
          title: "Youtube",
        },
        {
          href: "",
          title: "LinkedIn",
        },
        {
          href: "",
          title: "Discord",
        },
        {
          href: "",
          title: "CoinMarketCap",
        },

        {
          href: "",
          title: "Telegram (EN)",
        },
        {
          href: "",
          title: "Telegram (DE)",
        },
        {
          href: "",
          title: "Telegram (FR)",
        },
        {
          href: "",
          title: "Telegram (ES)",
        },
        {
          href: "",
          title: "Telegram (IT)",
        },
        {
          href: "",
          title: "Telegram (ID)",
        },
        {
          href: "",
          title: "Telegram (TR)",
        },
      ],
    },
  ],
};

export function Community() {
  return (
    <div className="flex md:flex-row flex-col gap-y-9 gap-x-32">
      {/* first col */}
      <div className="flex flex-col">
        <div>
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
      </div>
      {/* second col */}
      <div className="flex flex-col">
        <div className="text-dark-500 font-bold leading-5 mb-8">
          {MenuItems.dropDownItems[1].label}
        </div>
        <div className="grid xl:grid-cols-4 xl:grid-rows-4 lg:grid-cols-3 lg:grid-rows-5 grid-cols-2 grid-rows-8 grid-flow-col gap-y-6 gap-x-20 place-items-start">
          {MenuItems.dropDownItems[1].items.map((item) => (
            <HeaderNavLinkItem label={item.title} href={item.href} />
          ))}
        </div>
      </div>
    </div>
  );
}
