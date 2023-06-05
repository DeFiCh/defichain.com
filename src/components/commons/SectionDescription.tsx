import classNames from "classnames";

export function SectionDescription({
  text,
  customStyle,
}: {
  text: string;
  customStyle?: string;
}) {
  return (
    <div
      data-testid="section-desc-explore-dex-decentralized-exchange"
      className={classNames(
        "font-desc tracking-[0.03em] text-base text-dark-700",
        "lg:text-xl lg:leading-8 lg:tracking-normal",
        customStyle
      )}
    >
      {text}
    </div>
  );
}
