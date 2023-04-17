import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Link from "next/link";
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
  isExternaLink?: boolean;
  hasUpArrowIcon?: boolean;
}): JSX.Element {
  const { t } = useTranslation("layout");
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
            "text-dark-1000 font-semibold hover:accent-dfc-gradient-text cursor-pointer min-w-[133px] text-ellipsis overflow-auto md:w-full"
          )}
        >
          <Link
            href={url}
            passHref
            data-testid={testId}
            className="flex flex-row items-center"
          >
            {t(`footer.sitemap.${category}.${altLabel}`)}
          </Link>
        </div>
      )}
    </div>
  );
}
