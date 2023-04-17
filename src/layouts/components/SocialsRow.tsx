import classNames from "classnames";
import {
  AiFillGithub,
  AiFillRedditCircle,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

interface SocialsRowProps {
  language: string;
  customStyle?: string;
}

export default function SocialsRow(props: SocialsRowProps): JSX.Element {
  const { language, customStyle } = props;
  return (
    <div className={classNames(customStyle)}>
      <a
        href="https://github.com/DeFiCh/ain"
        target="_blank"
        rel="noreferrer"
        data-testid="SocialsRow.GitHub"
        id="GitHub"
      >
        <AiFillGithub className="hover-icons" size={24} />
      </a>
      <a
        href="https://www.reddit.com/r/defiblockchain/"
        target="_blank"
        rel="noreferrer"
        data-testid="SocialsRow.Reddit"
        id="Reddit"
      >
        <AiFillRedditCircle className="hover-icons" size={24} />
      </a>
      <a
        href="https://www.youtube.com/DeFiChain"
        target="_blank"
        rel="noreferrer"
        data-testid="SocialsRow.YouTube"
        id="YouTube"
      >
        <AiFillYoutube className="hover-icons" size={24} />
      </a>
      <a
        href={`https://t.me/defiblockchain${language}`}
        target="_blank"
        rel="noreferrer"
        data-testid="SocialsRow.Telegram"
        id="Telegram"
      >
        <FaTelegramPlane className="hover-icons" size={24} />
      </a>
      <a
        href="https://twitter.com/defichain"
        target="_blank"
        rel="noreferrer"
        data-testid="SocialsRow.Twitter"
        id="Twitter"
      >
        <AiOutlineTwitter className="hover-icons" size={24} />
      </a>
    </div>
  );
}
