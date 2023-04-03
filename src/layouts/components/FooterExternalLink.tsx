import { RiArrowRightUpLine } from "react-icons/ri";
import { useTranslation } from "next-i18next";
import { useState } from "react";

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
