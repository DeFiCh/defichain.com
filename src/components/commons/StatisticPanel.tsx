import React, { ReactNode } from "react";
import { useUnitSuffix } from "@hooks/useUnitSuffix";
import CountUp from "react-countup";
import classNames from "classnames";
import { useRouter } from "next/router";

interface StatisticPanelItemProps {
  title: string;
  stats?: number;
  desc?: ReactNode; // JSX or string
  prefix?: string;
  descStyle?: string;
  displayId?: string;
  displayStripCustomStyle?: string;
  testID: string;
}

export function StatisticPanel({
  displayId,
  displayStripCustomStyle,
  displayItem,
}: {
  displayItem: StatisticPanelItemProps[];
  displayId?: string;
  displayStripCustomStyle?: string;
}) {
  const isHorizontalInTablet = displayItem.length <= 2;

  return (
    <section
      id={displayId}
      className={classNames(
        "card-outline-2 p-[0.5px] rounded-[30px]",
        displayStripCustomStyle,
      )}
    >
      <div className="card-bg rounded-[30px] py-10 px-6">
        <div
          className={classNames("flex lg:flex-row flex-col gap-y-4", {
            "md:flex-row": isHorizontalInTablet,
          })}
        >
          {displayItem.map((item, key) => (
            <StatisticsPanelItem
              key={key}
              title={item.title}
              stats={item.stats}
              desc={item.desc}
              prefix={item.prefix}
              descStyle={item.descStyle}
              isTabletHorizontal={isHorizontalInTablet}
              testID={item.testID}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatisticsPanelItem({
  title,
  stats,
  desc,
  prefix,
  descStyle,
  testID,
  isTabletHorizontal = false,
}: {
  title: string;
  stats?: number;
  desc?: ReactNode;
  prefix?: string;
  descStyle?: string;
  isTabletHorizontal?: boolean;
  testID: string;
}) {
  const router = useRouter();
  const { suffix, value } = useUnitSuffix(
    stats === undefined ? "N/A" : stats.toString(),
  );

  return (
    <article
      className={classNames(
        "flex lg:grow grow-0 lg:flex-col flex-row lg:items-center items-start gap-y-2 gap-x-2",
        { "md:flex-col md:items-center md:grow": isTabletHorizontal },
      )}
    >
      <div
        className={classNames(
          "lg:w-full md:w-[316px] w-[135px] lg:text-center bg-clip-text text-transparent accent-gradient-2 font-bold leading-5",
          { "md:w-full md:text-center": isTabletHorizontal },
        )}
        data-testid={`statistic-title-${testID}`}
      >
        {title}
      </div>
      <div
        className={classNames(
          "flex flex-col lg:items-center items-end lg:gap-y-2 gap-y-1 lg:grow-0 grow",
          { "md:items-center md:gap-y-2 md:grow-0": isTabletHorizontal },
        )}
      >
        <div
          className={classNames(
            "text-dark-1000 text-xl leading-6 lg:text-[52px] lg:leading-[52px]",
            {
              "md:text-[32px] md:leading-[36px]": isTabletHorizontal,
            },
          )}
        >
          {stats ? (
            getLocaledStatisticValue(router.locale, prefix, value, suffix)
          ) : (
            <>N/A</>
          )}
        </div>

        {desc !== undefined && (
          <div
            className={classNames(
              "font-desc text-dark-700 lg:text-base lg:leading-6 md:text-sm text-xs text-right",
              descStyle,
            )}
          >
            {desc}
          </div>
        )}
      </div>
    </article>
  );
}

function getLocaledStatisticValue(
  locale?: string,
  prefix?: string,
  value?: string,
  suffix?: string,
) {
  switch (locale) {
    case "de":
      return (
        <>
          {suffix !== "" ? ` ` : ``}
          <CountUp
            onUpdate={({ reset, start }) => {
              reset();
              start();
            }}
            end={Number(value)}
            enableScrollSpy
            duration={0.5}
          />{" "}
          {suffix ?? ""} {prefix ?? ""} {/* This prefix is for the $ symbol */}
        </>
      );

    default:
      return (
        <>
          {prefix ?? ""}
          <CountUp
            onUpdate={({ reset, start }) => {
              reset();
              start();
            }}
            end={Number(value)}
            enableScrollSpy
            duration={0.5}
          />
          {suffix !== "" ? `${suffix}` : ``}
        </>
      );
  }
}
