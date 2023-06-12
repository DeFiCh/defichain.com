import classNames from "classnames";

export function SectionDescription({
  text,
  customStyle,
  testID,
}: {
  text: string;
  customStyle?: string;
  testID?: string;
}) {
  return (
    <div
      data-testid={`section-desc-${testID}`}
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
