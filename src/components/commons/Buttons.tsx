import { HTMLAttributeAnchorTarget, PropsWithChildren, useState } from "react";
import classNames from "classnames";
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export function Button({
  text,
  className,
  disabled,
  href,
  onClick,
}: {
  text: string;
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
          text={text}
          className={className}
          disabled={disabled}
          onClick={onClick}
        />
      </a>
    );
  }
  return (
    <ButtonElement
      text={text}
      className={className}
      disabled={disabled}
      onClick={onClick}
    />
  );
}

function ButtonElement({
  text,
  className,
  disabled,
  onClick,
}: {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        className ?? "py-4",
        "flex items-center justify-center rounded-[92px] font-bold disabled:opacity-30 disabled:pointer-events-none min-w-[232px]",
        "bg-dark-1000 text-dark-100 hover:bg-brand-100 active:bg-brand-100 active:opacity-70"
      )}
    >
      {text}
    </button>
  );
}

export function SecondaryButton({
  text,
  className,
  disabled,
  onClick,
}: {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        className ?? "py-4",
        "flex items-center justify-center rounded-[92px] font-bold disabled:opacity-30 disabled:pointer-events-none !mt-0",
        "outline outline-1 outline-dark-1000 hover:outline-brand-100 active:text-brand-100 text-dark-1000 active:opacity-70"
      )}
    >
      {text}
      <FiArrowUpRight size={20} className="ml-[15px]" />
    </button>
  );
}

export function GradientButton({
  buttonText,
  className,
  borderClassName,
  disabled,
  onClick,
  href,
  target,
}: {
  buttonText: string;
  className?: string;
  borderClassName?: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}) {
  if (href) {
    return (
      <Link
        rel="noreferrer"
        target={target}
        href={href}
        className={classNames({ "pointer-events-none": disabled })}
        scroll={false}
      >
        <GradientButtonElement
          borderClassName={borderClassName}
          buttonText={buttonText}
          className={className}
          disabled={disabled}
          onClick={onClick}
        />
      </Link>
    );
  }
  return (
    <GradientButtonElement
      borderClassName={borderClassName}
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
  borderClassName,
}: {
  buttonText: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  borderClassName?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "accent-gradient-1 hover:gradient-button-hover rounded-[44px] p-0.5 w-auto h-auto disabled:opacity-30 disabled:pointer-events-none min-w-[133px] flex items-center active:opacity-70",
        borderClassName
      )}
    >
      <div
        className={classNames(
          "font-medium text-sm leading-4 text-light-00 rounded-[44px] hover:gradient-button-hover w-full h-full whitespace-nowrap",
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
        "hover:text-brand-100 flex flex-row gap-x-2 items-center",
        className ?? "text-lg text-dark-1000 font-semibold",
        {
          "pointer-events-none opacity-30": disabled,
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
