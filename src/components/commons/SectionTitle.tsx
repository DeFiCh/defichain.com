import classNames from "classnames";

export function SectionTitle({
  text,
  customStyle,
  testID,
}: {
  text: string;
  customStyle?: string;
  testID?: string; // TODO (@chloe) change to compulsary testID
}) {
  return (
    <h3
      data-testid={`section-title-${testID}`}
      className={classNames(
        "accent-gradient-1 text-transparent bg-clip-text font-mono",
        "leading-4 tracking-[0.04em] text-base",
        customStyle ?? "w-fit"
      )}
    >
      {text}
    </h3>
  );
}
