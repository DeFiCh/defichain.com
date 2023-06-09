import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

interface AgendaItem {
  title: string;
  status: string;
  desc: string;
  image: string;
}

function renderStatus(param) {
  switch (param) {
    case "deployed":
      return (
        <div className="absolute right-[20px] top-[28px] bg-[#00AD1D] text-[10px] leading-3 tracking-[0.08em] font-bold text-dark-1000 rounded-xl py-1 px-3">
          DEPLOYED
        </div>
      );
    case "inProgress":
      return (
        <div className="absolute right-[20px] top-[28px] bg-warning text-[10px] leading-3 tracking-[0.08em] font-bold text-dark-1000 rounded-xl py-1 px-3">
          IN PROGRESS
        </div>
      );
    default:
      return (
        <div className="absolute right-[20px] top-[28px] bg-dark-200 text-[10px] leading-3 tracking-[0.08em] font-bold text-dark-1000 rounded-xl py-1 px-3">
          UPCOMING
        </div>
      );
  }
}

export function MetaChainAgenda(): JSX.Element {
  const { t } = useTranslation("page-meta-chain");
  const router = useRouter();
  const [language, setLanguage] = useState(router.locale ?? "");
  console.log(language);
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
    <>
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
        {cards.map((card) => (
          <AgendaCard key={card.title} {...card} />
        ))}
      </div>
      <div className="flex flex-wrap text-dark-700 md:justify-center justify-end lg:text-lg lg:leading-6 lg:mb-[264px] md:mt-10 md:mb-[216px] text-sm mt-8 mb-[104px] md:mr-0 mr-6">
        {t("agenda.social.title")}
        <div className="flex md:ml-6 space-x-5 md:mt-0 mt-[16px]">
          <a
            href="https://twitter.com/defichain"
            target="_blank"
            rel="noreferrer"
            data-testid="metachain-social-twitter"
            id="Twitter"
          >
            <AiOutlineTwitter className="hover-icons" size={24} />
          </a>
          <a
            href={`https://t.me/defiblockchain${language}`}
            target="_blank"
            rel="noreferrer"
            data-testid="metachain-social-telegram"
            id="Telegram"
          >
            <FaTelegramPlane className="hover-icons" size={24} />
          </a>
          <a
            href="https://github.com/DeFiCh/ain"
            target="_blank"
            rel="noreferrer"
            data-testid="metachain-social-github"
            id="GitHub"
          >
            <AiFillGithub className="hover-icons" size={24} />
          </a>
        </div>
      </div>
    </>
  );
}
function AgendaCard(props): JSX.Element {
  const [isHoverOn, setIsHoverOn] = useState(false);
  return (
    <article
      data-bg-image={`url(${props.image})`}
      className="relative card-outline-2 hover:accent-gradient-1 rounded-[15px] lg:w-[384px] md:w-[324px] h-[202px] w-[272px] p-[0.5px]"
      onMouseLeave={() => {
        setIsHoverOn!(false);
      }}
      onMouseEnter={() => {
        setIsHoverOn!(true);
      }}
    >
      <div
        className="p-6 group-hover:bg-dark-00/90 rounded-[15px] h-full bg-[75%]"
        style={
          !isHoverOn
            ? { backgroundImage: `url(${props.image}.png)` }
            : { backgroundImage: `url(${props.image}_hover.png)` }
        }
      >
        {!isHoverOn ? (
          <div className="text-dark-1000 group-hover:text-brand-100 hover:backdrop-blur text-2xl transition-colors w-2/4 md:w-full">
            {props.title}
          </div>
        ) : (
          <div className="text-dark-1000 text-sm transition-colors w-8/12">
            {props.desc}
          </div>
        )}
      </div>
      {renderStatus(props.status)}
    </article>
  );
}
