import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import FooterExternalLink from "./FooterExternalLink";

export default function FooterLink({
  testId,
  altLabel,
  category,
  isExternaLink,
  hasUpArrowIcon,
  url,
}: {
  url: string;
  altLabel: string;
  category: string;
  testId: string;
  isExternaLink: boolean;
  hasUpArrowIcon?: boolean;
}): JSX.Element {
  const { t } = useTranslation("layout");
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="md:w-[210px]">
      {isExternaLink === true && url !== undefined ? (
        <FooterExternalLink
          text={altLabel}
          category={category}
          url={url}
          hasUpArrowIcon={hasUpArrowIcon}
          testId={testId}
        />
      ) : (
        // Internal link
        <div
          className={classNames(
            "text-dark-1000 font-semibold hover:accent-dfc-gradient-text cursor-pointer md:w-[133px] md:w-full"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link
            href={url}
            passHref
            data-testid={testId}
            className="flex flex-row items-center"
          >
            {t(`footer.sitemap.${category}.${altLabel}`)}
            {hasUpArrowIcon ? (
              <RiArrowRightUpLine
                className="pl-1"
                // uses the gradient color defined with the same svg id
                style={{ fill: isHovered ? "url(#accent-gradient)" : "" }}
                size={20}
              />
            ) : null}
          </Link>
        </div>
      )}
    </div>
  );
}
