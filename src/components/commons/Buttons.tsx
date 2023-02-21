import { PropsWithChildren, useState } from "react";
import classNames from "classnames";
import { IoMdArrowRoundForward } from "react-icons/io";

export function Button({
  buttonText,
  className,
  disabled,
  href,
  onClick,
}: {
  buttonText: string;
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}) {
  if (href) {
    return (
      <a
        rel="noreferrer"
        target="_blank"
        href={href}
        className={classNames({ "pointer-events-none": disabled })}
      >
        <ButtonElement
          buttonText={buttonText}
          className={className}
          disabled={disabled}
          onClick={onClick}
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
    />
  );
}

function ButtonElement({
  buttonText,
  className,
  disabled,
  onClick,
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
        className ?? "py-4",
        "flex items-center justify-center rounded-[92px] font-bold disabled:opacity-30 disabled:pointer-events-none min-w-[133px]",
        "bg-dark-1000 text-dark-100 hover:bg-brand-100 active:bg-brand-100 active:opacity-70"
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
  href,
}: {
  buttonText: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}) {
  if (href) {
    return (
      <a
        rel="noreferrer"
        target="_blank"
        href={href}
        className={classNames({ "pointer-events-none": disabled })}
      >
        <GradientButtonElement
          buttonText={buttonText}
          className={className}
          disabled={disabled}
          onClick={onClick}
        />
      </a>
    );
  }
  return (
    <GradientButtonElement
      buttonText={buttonText}
      className={className}
      disabled={disabled}
      onClick={onClick}
    />
  );
}

function GradientButtonElement({
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
      className="gradient-button rounded-[44px] p-[2px] w-auto h-auto disabled:opacity-30 disabled:pointer-events-none min-w-[133px] flex items-center active:opacity-70"
    >
      <div
        className={classNames(
          "font-medium text-sm leading-4 text-light-00 rounded-[44px] hover:gradient-button w-full h-full whitespace-nowrap",
          className ?? "py-3 bg-dark-00"
        )}
      >
        {buttonText}
      </div>
    </button>
  );
}

export function LinkButton({
  buttonText,
  className,
  disabled,
  href,
  horizontalArrow,
  diagonalArrow,
}: {
  buttonText: string;
  className?: string;
  disabled?: boolean;
  href: string;
  horizontalArrow?: boolean;
  diagonalArrow?: boolean;
}) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <a
      rel="noreferrer"
      target="_blank"
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      href={href}
      className={classNames(
        "font-semibold text-dark-100 hover:text-brand-100 flex flex-row items-center",
        className,
        {
          "pointer-events-none": disabled,
        }
      )}
    >
      {buttonText}
      {(horizontalArrow || diagonalArrow) && isMouseEnter && (
        <IoMdArrowRoundForward
          className={classNames({ "-rotate-45": diagonalArrow })}
        />
      )}
    </a>
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
