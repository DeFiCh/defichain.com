import { PropsWithChildren } from "react";
import classNames from "classnames";

/**
 * Container implementation that is part of the design language.
 */
export function Container(
  props: PropsWithChildren<{ className?: string; bgClassName?: string }>
): JSX.Element {
  return (
    <div
      className={classNames("xl:mx-auto xl:container flex", props.bgClassName)}
    >
      <div
        className={classNames(
          "mx-6 md:mx-12 xl:mx-[120px] 2xl:mx-[300px] w-full",
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
