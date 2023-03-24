import { Container } from "@components/commons/Container";
import { useUnitSuffix } from "@hooks/useUnitSuffix";
import {
  StatsData,
  SupplyData,
} from "@defichain/whale-api-client/dist/api/stats";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { StatisticPanel } from "@components/commons/StatisticPanel";
import { useWhaleApiClient } from "../../layouts/context/WhaleContext";
import { calculatePercentage } from "../../shared/calculatePercentage";

export function StatsDisplay() {
  const api = useWhaleApiClient();
  const [stats, setStats] = useState<StatsData>();
  const [supply, setSupply] = useState<SupplyData>();
  const { t } = useTranslation("page-index");
  const dimensions = useWindowDimensions();

  useEffect(() => {
    api.stats.getSupply().then((supplyItem) => {
      setSupply(supplyItem);
    });

    api.stats.get().then((statsItem) => {
      setStats(statsItem);
    });
  }, [api.stats]);

  const { suffix, value } = useUnitSuffix(
    stats ? stats.tvl.masternodes.toString() : "N/A"
  );
  const masternodeValue = value === "N/A" ? undefined : `${value + suffix}+`;

  const statsItems = [
    {
      title: t("StatisticsSection.dfiMinted.title"),
      stats: supply?.total,
      desc:
        supply?.total === undefined
          ? supply?.total
          : t("StatisticsSection.dfiMinted.desc", {
              perc: calculatePercentage(supply.total, supply.max),
            }),
    },
    {
      title:
        dimensions.width <= 600
          ? t("StatisticsSection.tvlLocked.mobileTitle")
          : t("StatisticsSection.tvlLocked.title"),
      prefix: "$",
      stats: stats?.tvl.total,
      desc:
        stats?.tvl.total === undefined
          ? stats?.tvl.total
          : t("StatisticsSection.tvlLocked.desc"),
      descStyle: "lg:block hidden",
    },
    {
      title: t("StatisticsSection.masternodes.title"),
      stats: stats?.count.masternodes,
      desc:
        masternodeValue === undefined
          ? masternodeValue
          : t("StatisticsSection.masternodes.desc", {
              perc: masternodeValue,
            }),
    },
  ];

  return (
    <div className="relative">
      <Container className="z-10 relative lg:mt-[57px] mt-[76px]">
        <StatisticPanel
          displayItem={statsItems}
          displayStripCustomStyle="scroll-mt-[200px]"
          displayId="statistics_display"
        />
      </Container>
      <div
        className={classNames(
          "absolute z-0 bg-contain bg-no-repeat bg-left bg-[url(/assets/img/index/index-cube.png)]",
          "lg:top-0 md:top-[84px] top-[108px] lg:left-0 md:-left-14",
          "2xl:w-full 2xl:h-[600px] lg:w-full lg:h-[400px] md:w-[280px] md:h-[280px] w-[208px] h-[208px]"
        )}
      />
    </div>
  );
}
