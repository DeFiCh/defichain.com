import classNames from "classnames";

export function SectionSubTitle({
  text,
  customStyle,
  testID,
}: {
  text: string;
  customStyle?: string;
  testID: string;
}) {
  return (
    <h1
      data-testid={`section-header-${testID}`}
      className={classNames(
        "text-dark-1000 text-[40px] leading-[44px] tracking-[-0.02em]",
        "md:text-5xl md:leading-[52px] md:tracking-normal",
        "lg:text-[80px] lg:leading-[84px] md:tracking-normal",
        customStyle,
      )}
    >
      {text}
    </h1>
  );
}
