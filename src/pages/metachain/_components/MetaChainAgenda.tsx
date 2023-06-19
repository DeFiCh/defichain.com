import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

interface AgendaItem {
  title: string;
  status: string;
  desc: string;
  image: string;
  color: string;
}

function StatusItem({
  status,
  color,
}: {
  status: string;
  color: string;
}): JSX.Element {
  const deployedGreen = "bg-[#00AD1D]";
  const inProgressOrange = "bg-warning";
  const upcomingGrey = "bg-dark-200";

  const statusColorMap: { [key: string]: string } = {
    green: deployedGreen,
    orange: inProgressOrange,
    grey: upcomingGrey,
  };

  const bgColor = statusColorMap[color];

  return (
    <div
      className={classNames(
        "absolute right-[20px] top-[28px] text-[10px] leading-3 tracking-[0.08em] font-bold text-dark-1000 rounded-xl py-1 px-3",
        bgColor
      )}
    >
      {status}
    </div>
  );
}

export function MetaChainAgenda(): JSX.Element {
  const { t } = useTranslation("page-meta-chain");
  const router = useRouter();
  const [language, setLanguage] = useState(router.locale ?? "");
  const cards: AgendaItem[] = t("agenda.cards", {
    returnObjects: true,
  });
  useEffect(() => {
    switch (router.locale) {
      case "de":
        return setLanguage("_DE");
      case "fr":
        return setLanguage("_FR");
      default:
        return setLanguage("");
    }
  }, [router]);

  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
        {cards.map((card) => (
          <AgendaCard key={card.title} {...card} />
        ))}
      </div>
      <div className="flex flex-wrap text-dark-700 text-sm lg:text-lg lg:leading-6 w-[272px] md:w-auto justify-end md:justify-center mb-[104px] md:mb-[216px] lg:mb-[264px] mt-8 md:mt-10 mx-auto">
        {t("agenda.social.title")}
        <div className="flex md:ml-6 space-x-5 md:mt-0 mt-[16px]">
          <a
            href="https://twitter.com/defichain"
            target="_blank"
            rel="noreferrer"
            data-testid="metachain-social-twitter"
          >
            <AiOutlineTwitter className="hover-icons" size={24} />
          </a>
          <a
            href={`https://t.me/defiblockchain${language}`}
            target="_blank"
            rel="noreferrer"
            data-testid="metachain-social-telegram"
          >
            <FaTelegramPlane className="hover-icons" size={24} />
          </a>
          <a
            href="https://github.com/DeFiCh/ain"
            target="_blank"
            rel="noreferrer"
            data-testid="metachain-social-github"
          >
            <AiFillGithub className="hover-icons" size={24} />
          </a>
        </div>
      </div>
      <div
        className={classNames(
          "bg-[url('/assets/img/index/mc_accent.png')] absolute w-[772px] h-[386px] bg-auto bg-no-repeat z-[-1]",
          "2xl:left-0 md:left-[-105px] lg:top-[331px] md:top-[-173px] w-[1440px] h-[469px] left-[72px] top-[-154px]"
        )}
      />
    </div>
  );
}
function AgendaCard(props: AgendaItem): JSX.Element {
  const [isHoverOn, setIsHoverOn] = useState(false);
  const { image, title, desc, status, color } = props;
  return (
    <article
      data-bg-image={`url(${image})`}
      data-testid={`metachain-agenda-${title}`}
      className={classNames(
        "relative rounded-[15px] lg:w-[384px] md:w-[324px] h-[202px] w-[272px] p-[0.5px]",
        {
          "border-gradient before:absolute before:content-[''] before:inset-0 before:p-px before:rounded-[15px] before:z-[-1]":
            isHoverOn,
        }
      )}
      onMouseLeave={() => {
        setIsHoverOn!(false);
      }}
      onMouseEnter={() => {
        setIsHoverOn!(true);
      }}
    >
      <div
        className="p-6 rounded-[15px] h-full bg-[75%]"
        style={
          !isHoverOn
            ? { backgroundImage: `url(${image}.png)` }
            : { backgroundImage: `url(${image}_hover.png)` }
        }
      >
        {!isHoverOn ? (
          <div
            className={classNames(
              "text-dark-1000 text-xl font-bold w-[47%] md:w-full",
              { "break-words": title === "Infrastructure" }
            )}
            data-testid={`metachain-agenda-title-${title}`}
          >
            {title}
          </div>
        ) : (
          <div
            className="text-dark-1000 text-sm transition-colors w-[65%] md:w-8/12"
            data-testid={`metachain-agenda-desc-${title}`}
          >
            {desc}
          </div>
        )}
      </div>
      <StatusItem status={status} color={color} />
    </article>
  );
}
