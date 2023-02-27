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
        data-testid="GitHub"
      >
        <AiFillGithub size={24} />
      </a>
      <a
        href="https://www.reddit.com/r/defiblockchain/"
        target="_blank"
        rel="noreferrer"
        data-testid="Reddit"
      >
        <AiFillRedditCircle size={24} />
      </a>
      <a
        href="https://www.youtube.com/DeFiChain"
        target="_blank"
        rel="noreferrer"
        data-testid="YouTube"
      >
        <AiFillYoutube size={24} />
      </a>
      <a
        href={`https://t.me/defiblockchain${language}`}
        target="_blank"
        rel="noreferrer"
        data-testid="GitHub"
      >
        <FaTelegramPlane size={24} />
      </a>
      <a
        href="https://twitter.com/defichain"
        target="_blank"
        rel="noreferrer"
        data-testid="GitHub"
      >
        <AiOutlineTwitter size={24} />
      </a>
    </div>
  );
}
