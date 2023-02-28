import { PropsWithChildren } from "react";
import classNames from "classnames";

/**
 * Container implementation that is part of the design language.
 */
export function Container(
  props: PropsWithChildren<{ className?: string; bgClassName?: string }>
): JSX.Element {
  return (
    <div className={classNames("w-full", props.bgClassName)}>
      <div
        className={classNames(
          "mx-12 xl:mx-[120px] 2xl:mx-[300px]",
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
