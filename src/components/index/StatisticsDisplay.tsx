import { Container } from "@components/commons/Container";
import { useUnitSuffix } from "@hooks/useUnitSuffix";
import {
  StatsData,
  SupplyData,
} from "@defichain/whale-api-client/dist/api/stats";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { useWhaleApiClient } from "../../layouts/context/WhaleContext";
import { calculatePercentage } from "../../shared/calculatePercentage";

export function StatsDisplay() {
  const api = useWhaleApiClient();
  const [stats, setStats] = useState<StatsData>();
  const [supply, setSupply] = useState<SupplyData>();
  const { t } = useTranslation("page-index");
  const isFirstLoad = useRef(true);
  const dimensions = useWindowDimensions();

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      void api.stats.getSupply().then((supplyItem) => {
        setSupply(supplyItem);
      });

      void api.stats.get().then((statsItem) => {
        setStats(statsItem);
      });
    }
  });

  const { suffix, value } = useUnitSuffix(
    stats ? stats.tvl.masternodes.toString() : "N/A"
  );
  const masternodeValue = `${value + suffix}+`;

  return (
    <div className="relative z-0">
      <Container className="relative lg:mt-[57px] md:mt-[76px] mt-[133px]">
        <div
          id="statistics_display"
          className="scroll-mt-[200px] card-outline-2 p-[0.5px] rounded-[30px]"
        >
          <div className="card-bg rounded-[30px] py-10 px-6">
            <div className="flex lg:flex-row flex-col gap-y-4 justify-evenly justify-center">
              <StatsItem
                title={t("StatisticsSection.dfiMinted.title")}
                stats={supply?.total ?? undefined}
                desc={t("StatisticsSection.dfiMinted.desc", {
                  perc: calculatePercentage(supply?.total, supply?.max),
                })}
              />
              <StatsItem
                title={
                  dimensions.width <= 600
                    ? t("StatisticsSection.tvlLocked.mobileTitle")
                    : t("StatisticsSection.tvlLocked.title")
                }
                prefix="$"
                stats={stats?.tvl.total ?? undefined}
                desc={t("StatisticsSection.tvlLocked.desc")}
                descStyle="lg:block hidden"
              />
              <StatsItem
                title={t("StatisticsSection.masternodes.title")}
                stats={stats?.count.masternodes ?? undefined}
                desc={t("StatisticsSection.masternodes.desc", {
                  perc: masternodeValue,
                })}
              />
            </div>
          </div>
        </div>
      </Container>
      <div
        className={classNames(
          "absolute z-[-1] bg-contain bg-no-repeat bg-left bg-[url(/assets/img/index/index-cube.png)]",
          "lg:top-0 md:top-[89.06px] top-[108px]",
          "h-screen w-full",
          "lg:w-[453px] lg:h-[453px] md:w-[292.42px] md:h-[292.42px] w-[208px] h-[208px]"
        )}
      />
    </div>
  );
}

function StatsItem({
  title,
  stats,
  desc,
  prefix,
  descStyle,
}: {
  title: string;
  stats: number | undefined;
  desc: string;
  prefix?: string;
  descStyle?: string;
}) {
  const { suffix, value } = useUnitSuffix(
    stats === undefined ? "N/A" : stats.toString()
  );

  return (
    <div className="flex lg:flex-col flex-row lg:items-center items-start gap-y-2 gap-x-2">
      <div className="bg-clip-text text-transparent accent-gradient-2 font-bold leading-5">
        {title}
      </div>
      <div className="flex flex-col lg:items-center items-end lg:gap-y-2 gap-y-1 lg:grow-0 grow">
        <div className="text-dark-1000 text-xl leading-6 lg:text-[52px] lg:leading-[52px]">
          {stats ? (
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
              {suffix ? suffix.toString().concat("+") : ""}
            </>
          ) : (
            <>N/A</>
          )}
        </div>

        <div
          className={classNames(
            "font-desc text-dark-700 lg:text-base lg:leading-6 md:text-sm text-xs text-right",
            descStyle
          )}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}
