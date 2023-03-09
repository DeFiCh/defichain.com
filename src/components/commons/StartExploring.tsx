import { IoChevronDown } from "react-icons/io5";

import classNames from "classnames";

export function StartExploring({
  startExploringJumpLink,
}: {
  startExploringJumpLink: string;
}) {
  return (
    <a
      href={startExploringJumpLink}
      className={classNames("hidden md:flex justify-center")}
    >
      <button
        type="button"
        className="group flex flex-col items-center gap-y-[17px]"
      >
        <div className="text-sm text-dark-700 group-hover:text-brand-100">
          Start exploring
        </div>
        <IoChevronDown className="group-hover:text-brand-100" />
      </button>
    </a>
  );
}
