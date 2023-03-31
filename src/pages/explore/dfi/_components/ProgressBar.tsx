import classNames from "classnames";

export function ProgressBar({
  value,
  containerClass,
}: {
  value: number;
  containerClass: string;
}) {
  return (
    <div className="relative">
      <div
        className={classNames(
          "h-3 rounded-[5px] w-full bg-dark-200 relative overflow-hidden",
          containerClass
        )}
      >
        <div
          style={{ width: `${value}%` }}
          className="absolute top-0 left-0 h-3 bg-brand-100 rounded-[5px]"
        />
      </div>
    </div>
  );
}
