import classNames from "classnames";
import {
  AiFillGithub,
  AiFillRedditCircle,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

interface SocialsRowProps {
  language: string;
  customStyle?: string;
}

export default function SocialsRow(props: SocialsRowProps): JSX.Element {
  const { language, customStyle } = props;
  return (
    <div className={classNames(customStyle)}>
      <a
        href={`https://t.me/defiblockchain${language}`}
        target="_blank"
        rel="noreferrer"
        data-testid="socials-row-telegram"
        id="Telegram"
      >
        <FaTelegramPlane className="hover-icons" size={24} />
      </a>
      <a
        href="https://discord.gg/5ncBGuj7"
        target="_blank"
        rel="noreferrer"
        data-testid="socials-row-discord"
        id="Discord"
      >
        <FaDiscord className="hover-icons" size={24} />
      </a>
      <a
        href="https://github.com/DeFiCh/ain"
        target="_blank"
        rel="noreferrer"
        data-testid="socials-row-github"
        id="GitHub"
      >
        <AiFillGithub className="hover-icons" size={24} />
      </a>
      <a
        href="https://www.reddit.com/r/defiblockchain/"
        target="_blank"
        rel="noreferrer"
        data-testid="socials-row-reddit"
        id="Reddit"
      >
        <AiFillRedditCircle className="hover-icons" size={24} />
      </a>
      <a
        href="https://www.youtube.com/DeFiChain"
        target="_blank"
        rel="noreferrer"
        data-testid="socials-row-youtube"
        id="YouTube"
      >
        <AiFillYoutube className="hover-icons" size={24} />
      </a>
      <a
        href="https://x.com/defichain"
        target="_blank"
        rel="noreferrer"
        data-testid="socials-row-x"
        id="X"
      >
        <AiOutlineTwitter className="hover-icons" size={24} />
      </a>
    </div>
  );
}
