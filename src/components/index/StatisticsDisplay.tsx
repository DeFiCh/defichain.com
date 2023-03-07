import { Container } from "@components/commons/Container";
import { useUnitSuffix } from "@hooks/useUnitSuffix";
import {
  StatsData,
  SupplyData,
} from "@defichain/whale-api-client/dist/api/stats";
import { useEffect, useState } from "react";
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
  const dimensions = useWindowDimensions();

  useEffect(() => {
    void api.stats.getSupply().then((supplyItem) => {
      setSupply(supplyItem);
    });

    void api.stats.get().then((statsItem) => {
      setStats(statsItem);
    });
  }, [api.stats]);

  const { suffix, value } = useUnitSuffix(
    stats ? stats.tvl.masternodes.toString() : "N/A"
  );
  const masternodeValue = value === "N/A" ? undefined : `${value + suffix}+`;

  return (
    <div className="relative z-0">
      <Container className="relative lg:mt-[57px] mt-[76px]">
        <div
          id="statistics_display"
          className="scroll-mt-[200px] card-outline-2 p-[0.5px] rounded-[30px]"
        >
          <div className="card-bg rounded-[30px] py-10 px-6">
            <div className="flex lg:flex-row flex-col gap-y-4">
              <StatsItem
                title={t("StatisticsSection.dfiMinted.title")}
                stats={supply?.total}
                desc={
                  supply?.total === undefined
                    ? supply?.total
                    : t("StatisticsSection.dfiMinted.desc", {
                        perc: calculatePercentage(supply.total, supply.max),
                      })
                }
              />
              <StatsItem
                title={
                  dimensions.width <= 600
                    ? t("StatisticsSection.tvlLocked.mobileTitle")
                    : t("StatisticsSection.tvlLocked.title")
                }
                prefix="$"
                stats={stats?.tvl.total}
                desc={
                  stats?.tvl.total === undefined
                    ? stats?.tvl.total
                    : t("StatisticsSection.tvlLocked.desc")
                }
                descStyle="lg:block hidden"
              />
              <StatsItem
                title={t("StatisticsSection.masternodes.title")}
                stats={stats?.count.masternodes}
                desc={
                  masternodeValue === undefined
                    ? masternodeValue
                    : t("StatisticsSection.masternodes.desc", {
                        perc: masternodeValue,
                      })
                }
              />
            </div>
          </div>
        </div>
      </Container>
      <div
        className={classNames(
          "absolute z-[-1] bg-contain bg-no-repeat bg-left bg-[url(/assets/img/index/index-cube.png)]",
          "lg:top-0 md:top-[84px] top-[108px] lg:left-0 md:-left-14",
          "2xl:w-full 2xl:h-[600px] lg:w-full lg:h-[400px] md:w-[280px] md:h-[280px] w-[208px] h-[208px]"
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
  desc: string | undefined;
  prefix?: string;
  descStyle?: string;
}) {
  const { suffix, value } = useUnitSuffix(
    stats === undefined ? "N/A" : stats.toString()
  );

  return (
    <div className="flex lg:grow grow-0 lg:flex-col flex-row lg:items-center items-start gap-y-2 gap-x-2">
      <div className="lg:w-full md:w-[316px] w-[135px] lg:text-center bg-clip-text text-transparent accent-gradient-2 font-bold leading-5">
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
              {suffix !== "" ? `${suffix}+` : suffix}
            </>
          ) : (
            <>N/A</>
          )}
        </div>

        {desc !== undefined && (
          <div
            className={classNames(
              "font-desc text-dark-700 lg:text-base lg:leading-6 md:text-sm text-xs text-right",
              descStyle
            )}
          >
            {desc}
          </div>
        )}
      </div>
    </div>
  );
}
