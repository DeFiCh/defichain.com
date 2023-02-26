import classNames from "classnames";
import { DeFiChainLogo } from "@components/icons/DeFiChainLogo";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { HeaderNavLinkItem } from "./HeaderNavLinkItem";

interface colLabels {
  title?: string;
  subtitle: string;
}

export function Ecosystem() {
  const { t } = useTranslation("layout");
  const entries: Array<{ title: string; labels: colLabels[] }> = t(
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
      bgImage: "/assets/img/header/header-jellyfish.png",
      hoverBgImage: "/assets/img/header/header-hover-jellyfish.png",
      subtitle: t("header.ecosystem.image.subtitle"),
    },
  };

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
      <div className="flex md:flex-row flex-col gap-y-[72px] gap-x-6">
        {/* first col */}
        <div className="flex flex-col min-w-[396px]">
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
          "p-[0.5px] hidden md:block md:mt-[56px] group hover:transition hover:duration-500 cursor-pointer hover:accent-gradient-1 rounded-[15px] w-[416px] xl:h-[176px] md:h-[191px]"
        )}
      >
        <a
          href={MenuItems.image.href}
          style={{ backgroundImage: cardImage }}
          className={classNames(
            `w-full h-full p-8 border-[0.5px] border-dark-200 bg-dark-00 rounded-[15px] flex flex-col bg-contain bg-no-repeat bg-right-top`
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
