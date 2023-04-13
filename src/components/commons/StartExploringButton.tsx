import { IoChevronDown } from "react-icons/io5";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

export function StartExploringButton({
  startExploringJumpLink,
}: {
  startExploringJumpLink: string;
}) {
  const { t } = useTranslation("common");

  return (
    <a
      href={startExploringJumpLink}
      className={classNames("hidden md:flex justify-center relative z-10")}
    >
      <button
        type="button"
        className="group flex flex-col items-center gap-y-[17px]"
      >
        <div className="text-sm text-dark-700 group-hover:text-brand-100">
          {t("StartExploring.button")}
        </div>
        <IoChevronDown className="group-hover:text-brand-100" />
      </button>
    </a>
  );
}
