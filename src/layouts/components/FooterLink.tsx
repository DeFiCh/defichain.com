import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import FooterExternalLink from "./FooterExternalLink";

export default function FooterLink({
  testId,
  altLabel,
  isExternaLink,
  hasUpArrowIcon,
  url,
}: {
  url: string;
  altLabel: string;
  testId: string;
  isExternaLink: boolean;
  hasUpArrowIcon?: boolean;
}): JSX.Element {
  const { t } = useTranslation("layout");
  return (
    <div>
      {isExternaLink === true && url !== undefined ? (
        <FooterExternalLink
          text={altLabel}
          url={url}
          hasUpArrowIcon={hasUpArrowIcon}
          testId={testId}
        />
      ) : (
        // Internal link
        <div
          className={classNames(
            "text-dark-1000 font-semibold hover:accent-dfc-gradient-text cursor-pointer w-[133px] md:w-full"
          )}
        >
          <Link href={url} passHref data-testid={testId}>
            {t(`footer.sitemap.${altLabel}`)}
          </Link>
        </div>
      )}
    </div>
  );
}
