import { Container } from "@components/commons/Container";
import { UnitSuffixReturnValue, useUnitSuffix } from "@hooks/useUnitSuffix";
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
    if (isFirstLoad) {
      isFirstLoad.current = false;
      void api.stats.getSupply().then((supplyItem) => {
        setSupply(supplyItem);
      });

      void api.stats.get().then((statsItem) => {
        setStats(statsItem);
      });
    }
  });

  return (
    <Container className="lg:mt-[57px] md:mt-[76px] mt-[65px]">
      <div
        id="statistics_display"
        className="card-outline-2 p-[0.5px] rounded-[30px]"
      >
        <div className="card-bg rounded-[30px] p-6">
          <div className="flex lg:flex-row flex-col gap-y-4 justify-evenly justify-center">
            <StatsItem
              title={t("StatisticsSection.dfiMinted.title")}
              stats={supply?.total ?? 0}
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
              stats={stats?.tvl.total ?? 0}
              desc={t("StatisticsSection.tvlLocked.desc")}
              descStyle="lg:block hidden"
            />
            <StatsItem
              title={t("StatisticsSection.masternodes.title")}
              stats={stats?.count.masternodes ?? 0}
              desc={t("StatisticsSection.masternodes.desc", {
                perc: useUnitSuffix(
                  stats ? stats.tvl.masternodes.toString() : "0"
                )
                  .toString()
                  .concat("+"),
              })}
            />
          </div>
        </div>
      </div>
    </Container>
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
  stats: number;
  desc: string;
  prefix?: string;
  descStyle?: string;
}) {
  const suffix = useUnitSuffix(stats.toString(), UnitSuffixReturnValue.SUFFIX);
  const value = useUnitSuffix(stats.toString(), UnitSuffixReturnValue.VALUE);

  return (
    <div className="flex lg:flex-col flex-row md:items-center items-start gap-y-2">
      <div className="bg-clip-text text-transparent accent-gradient-2 font-bold leading-5">
        {title}
      </div>
      <div className="flex flex-col lg:items-center items-end lg:gap-y-2 gap-y-1 lg:grow-0 grow">
        <div className="text-dark-1000 text-xl leading-6 lg:text-[52px] lg:leading-[52px]">
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
        </div>

        <div
          className={classNames(
            "font-desc text-dark-700 lg:text-base lg:leading-6 md:text-sm text-xs",
            descStyle
          )}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}
