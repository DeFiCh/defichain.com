import classNames from "classnames";
import FooterInternalLink from "./FooterInternalLink";

interface FooterLinkItemProps {
  label: string;
  pathname: string;
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
          "text-sm font-semibold pb-[22px] text-dark-500 md:pb-[38px] sm:pt-[54px] md:pt-0",
          customStyle
        )}
      >
        {category}
      </h3>
      <div className="grid grid-flow-row grid-cols-2 gap-6 md:grid-cols-1">
        {childLinks.map((link) => (
          <FooterInternalLink
            key={link.label}
            altLabel={link.altLabel}
            isExternaLink={link.isExternaLink}
            url={link.url}
            testId={link.testId}
            hasUpArrowIcon={link.hasUpArrowIcon}
          />
        ))}
      </div>
    </section>
  );
}
