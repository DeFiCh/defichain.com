import { RiArrowRightUpLine } from "react-icons/ri";
import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

export default function FooterExternalLink(props: {
  text: string;
  category: string;
  url: string;
  testId: string;
  hasUpArrowIcon?: boolean;
}): JSX.Element {
  const { text, category, url, testId, hasUpArrowIcon } = props;
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation("layout");
  return (
    <div
      id="FooterExternalLinkText"
      className="text-dark-1000 font-semibold cursor-pointer w-[150px] hover:accent-dfc-gradient-text group-hover:bg-clip-text"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        data-testid={testId}
        className="flex flex-row items-center"
      >
        {t(`footer.sitemap.${category}.${text}`)}
        <svg width="0" height="0">
          <linearGradient
            id="accent-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#FF00FF" offset="0%" />
            <stop stopColor="#EC0C8D" offset="100%" />
          </linearGradient>
        </svg>
        {hasUpArrowIcon ? (
          <RiArrowRightUpLine
            className="pl-1"
            // uses the gradient color defined with the same svg id
            style={{ fill: isHovered ? "url(#accent-gradient)" : "" }}
            size={20}
          />
        ) : null}
      </a>
    </div>
  );
}
