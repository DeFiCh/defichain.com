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
      data-testid="desc"
      className={classNames(
        "font-desc tracking-[0.03em] text-xl text-dark-700",
        "lg:text-2xl tracking-normal",
        customStyle
      )}
    >
      {text}
    </div>
  );
}
