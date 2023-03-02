import classNames from "classnames";
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
  return (
    <section>
      <h3
        className={classNames(
          "text-sm font-semibold pb-[22px] text-dark-500 md:pb-[38px] md:pt-0",
          customStyle
        )}
      >
        {category}
      </h3>
      <div className="grid grid-flow-row grid-cols-2 gap-6 md:grid-cols-1">
        {childLinks.map((link) => (
          <FooterLink
            key={link.label}
            altLabel={link.altLabel}
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
