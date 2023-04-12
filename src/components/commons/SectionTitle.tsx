import classNames from "classnames";

export function SectionTitle({
  text,
  customStyle,
}: {
  text: string;
  customStyle?: string;
}) {
  return (
    <h3
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
