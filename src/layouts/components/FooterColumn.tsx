import classNames from "classnames";
import { useTranslation } from "next-i18next";
import FooterLink from "./FooterLink";

interface FooterLinkItemProps {
  label: string;
  pathname: string; // href
  testId: string;
  altLabel: string;
  isExternaLink: boolean;
  url?: string;
  hasUpArrowIcon?: boolean;
}

export default function FooterColumn({
  category,
  childLinks,
  customStyle,
}: {
  category: string;
  customStyle?: string;
  childLinks: FooterLinkItemProps[];
}): JSX.Element {
  const { t } = useTranslation("layout");
  return (
    <section>
      <h3
        className={classNames(
          "text-sm font-semibold pb-[22px] text-dark-500 md:pb-[30px] md:pt-0 lg:pb-[38px]",
          customStyle
        )}
      >
        {t(`footer.sitemap.${category}.category`)}
      </h3>
      <div
        className={classNames("grid grid-flow-col gap-y-6 md:gap-x-14", {
          "grid-rows-2 md:grid-rows-4 lg:grid-rows-2": childLinks.length >= 2,
        })}
      >
        {childLinks.map((link) => (
          <FooterLink
            key={link.label}
            altLabel={link.altLabel}
            category={category}
            isExternaLink={link.isExternaLink}
            // use external url instead of internal pathname
            url={link.url ?? link.pathname}
            testId={`FooterColumn.${link.testId}`}
            hasUpArrowIcon={link.hasUpArrowIcon}
          />
        ))}
      </div>
    </section>
  );
}
