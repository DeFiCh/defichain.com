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
}: {
  category: string;
  childLinks: FooterLinkItemProps[];
}): JSX.Element {
  return (
    <section className="md:px-2">
      <h3 className="text-sm font-semibold text-dark-500 pb-[22px] pt-[28px] md:pb-[38px]">
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
