import classNames from "classnames";
import { PropsWithChildren } from "react";
import { useTranslation } from "next-i18next";

export function ContentHeader({
  text,
  id,
  customStyle,
}: {
  text: string;
  id?: string;
  customStyle?: string;
}) {
  const escapedId = id?.toLowerCase().replaceAll(" ", "-");
  return (
    <h2
      id={escapedId}
      title={id}
      className={classNames(
        "text-[24px] leading-8 scroll-mt-40",
        "lg:text-[32px] lg:leading-[40px]",
        customStyle,
      )}
    >
      {text}
    </h2>
  );
}

export function ContentSubHeader({
  text,
  id,
  customStyle,
}: {
  text: string;
  id?: string;
  customStyle?: string;
}) {
  const escapedId = id?.toLowerCase().replaceAll(" ", "-");
  return (
    <h3
      id={escapedId}
      title={id}
      className={classNames("text-2xl font-bold scroll-mt-40", customStyle)}
    >
      {text}
    </h3>
  );
}

export function ContentDescription({
  text,
  customStyle,
  containerStyle,
  children,
}: PropsWithChildren<{
  text: string;
  customStyle?: string;
  containerStyle?: string;
}>) {
  return (
    <div className={containerStyle ?? "mt-5"}>
      <span
        className={classNames(
          "font-desc text-dark-800 break-words",
          "text-base tracking-[0.03em]",
          "lg:text-xl lg:tracking-normal lg:leading-8",
          customStyle,
        )}
      >
        {text}
      </span>
      {children}
    </div>
  );
}

export function Step({ count }: { count: string }) {
  const { t } = useTranslation("page-explore-masternodes");
  return (
    <div className="flex flex-row mb-2 mt-[72px] lg:mt-12">
      <span className="font-mono text-dark-700 tracking-[0.04em] leading-4">
        {t("technicalGuide.step")}&nbsp;{count}
      </span>
    </div>
  );
}

export function Code({
  text,
  customStyle,
  textStyle,
}: {
  text: string;
  customStyle?: string;
  textStyle?: string;
}) {
  return (
    <div
      className={classNames("mt-5 p-6 bg-dark-100 rounded-[5px]", customStyle)}
    >
      <div
        className={classNames(
          "whitespace-nowrap font-code overflow-x-auto text-dark-900 leading-[48px]",
          textStyle,
        )}
      >
        {text}
      </div>
    </div>
  );
}
