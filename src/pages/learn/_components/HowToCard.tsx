import { PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "@components/commons/Buttons";
import { useTranslation } from "next-i18next";

export function HowToCard(
  props: PropsWithChildren<{ title: string; desc: string; slug: string }>
): JSX.Element {
  const { t } = useTranslation(["page-learn"]);

  return (
    <div
      className="p-1.5 w-full lg:w-1/2 flex flex-col"
      data-testid="HowToCard"
    >
      <div className="rounded bg-gray-50 p-10 flex flex-col flex-1">
        <h3 className="text-xl font-medium" data-testid="HowToCard.Title">
          {props.title}
        </h3>
        <div className="text-lg flex-1 mt-4" data-testid="HowToCard.Desc">
          {props.desc}
        </div>
        <div className="mt-8" data-testid="HowToCard.Button">
          <Link
            href={{ pathname: `/learn/${props.slug}` }}
            passHref
            className="contents"
          >
            <Button text={t("HowToSection.read")} />
          </Link>
        </div>
      </div>
    </div>
  );
}
