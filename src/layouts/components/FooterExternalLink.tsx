import { RiArrowRightUpLine } from "react-icons/ri";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export default function FooterExternalLink(props: {
  label: string;
  category: string;
  url: string;
  testId: string;
  hasUpArrowIcon?: boolean;
}): JSX.Element {
  const { label, category, url, testId, hasUpArrowIcon } = props;
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation("layout");
  const hoverTextState = document.getElementById("FooterExternalLinkText");
  useEffect(() => {
    hoverTextState?.addEventListener("mouseover", () => setIsHovered(true));
    hoverTextState?.addEventListener("mouseout", () => setIsHovered(false));
  });
  return (
    <div
      id="FooterExternalLinkText"
      className="text-dark-1000 font-semibold cursor-pointer w-[150px] hover:accent-dfc-gradient-text group-hover:bg-clip-text"
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        data-testid={testId}
        className="flex flex-row items-center"
      >
        {t(`footer.sitemap.${category}.${label}`)}
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
            className="pl-0.5"
            // uses the gradient color defined with the same svg id
            style={{ fill: isHovered ? "url(#accent-gradient)" : "" }}
            size={20}
          />
        ) : null}
      </a>
    </div>
  );
}
