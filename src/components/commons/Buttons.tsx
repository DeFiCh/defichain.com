import { PropsWithChildren } from "react";
import classNames from "classnames";

export function Button({
  buttonText,
  className,
  disabled,
  href,
  onClick,
  isCTAButton = true,
}: {
  buttonText: string;
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  isCTAButton?: boolean;
}) {
  if (href) {
    return (
      <a
        href={href}
        className={classNames({ "pointer-events-none": disabled })}
      >
        <ButtonElement
          buttonText={buttonText}
          className={className}
          disabled={disabled}
          onClick={onClick}
          isCTAButton={isCTAButton}
        />
      </a>
    );
  }
  return (
    <ButtonElement
      buttonText={buttonText}
      className={className}
      disabled={disabled}
      onClick={onClick}
      isCTAButton={isCTAButton}
    />
  );
}

function ButtonElement({
  buttonText,
  className,
  disabled,
  onClick,
  isCTAButton = true,
}: {
  buttonText: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  isCTAButton?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        className ?? "py-4 px-28",
        "flex items-center justify-center rounded-[92px] font-bold disabled:opacity-30 disabled:pointer-events-none",
        isCTAButton
          ? "bg-dark-1000 text-dark-100 hover:text-dark-00 active:text-dark-00 hover:cta-on-hover active:cta-on-press"
          : "text-dark-1000 hover:on-button-hover active:on-button-press"
      )}
    >
      {buttonText}
    </button>
  );
}

export function GradientButton({
  buttonText,
  className,
  disabled,
  onClick,
}: {
  buttonText: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="accent-gradient-1 rounded-[44px] p-1 w-auto h-auto disabled:opacity-30 disabled:pointer-events-none"
    >
      <div
        className={classNames(
          "flex items-center bg-dark-00 text-light-00 rounded-[44px] hover:accent-gradient-1 w-full h-full whitespace-nowrap",
          className ?? "px-5 py-3"
        )}
      >
        {buttonText}
      </div>
    </button>
  );
}
// To remove currently not removed yet to load homescreen without error
export function ButtonUnfilled(
  props: PropsWithChildren<{ className?: string; text: string }>
): JSX.Element {
  return (
    <button
      className={classNames(
        "button rounded border border-primary-500 py-2 px-6 font-medium text-primary-500 cursor-pointer hover:bg-primary-500 hover:text-white",
        props.className
      )}
    >
      {props.text}
    </button>
  );
}
