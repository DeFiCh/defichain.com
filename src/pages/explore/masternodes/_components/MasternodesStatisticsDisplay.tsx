import { useEffect, useState } from "react";
import { StatsData } from "@defichain/whale-api-client/dist/api/stats";
import { StatisticPanel } from "@components/commons/StatisticPanel";
import { useUnitSuffix } from "@hooks/useUnitSuffix";
import { Container } from "@components/commons/Container";
import classNames from "classnames";
import { useTranslation } from "../../../../hooks/useTranslation";
import { useWhaleApiClient } from "../../../../layouts/context/WhaleContext";

export function MasternodesStatisticsDisplay() {
  const api = useWhaleApiClient();
  const [stats, setStats] = useState<StatsData>();
  const { t } = useTranslation("page-explore-masternodes");

  useEffect(() => {
    api.stats.get().then((statsItem) => {
      setStats(statsItem);
    });
  }, [api.stats]);

  function reducer(items, prop) {
    if (items === undefined) {
      return undefined;
    }
    return items.reduce((a, b) => a + b[prop], 0);
  }

  const { suffix, value } = useUnitSuffix(
    stats?.masternodes.locked?.find((l) => l.weeks === 520)?.count.toString() ??
      "N/A",
  );

  const masternodeValue = value === "N/A" ? undefined : `${value + suffix}+`;

  const statsItems = [
    {
      title: t("statisticsDisplay.masternodes.title"),
      stats: reducer(stats?.masternodes.locked, "count"),
      desc:
        masternodeValue === undefined
          ? masternodeValue
          : t("statisticsDisplay.masternodes.desc", {
              value: masternodeValue,
            }),
      testID: "masternodes",
    },
    {
      title: t("statisticsDisplay.tvl.title"),
      prefix: "$",
      stats: stats?.tvl.masternodes,
      desc: t("statisticsDisplay.tvl.desc"),
      testID: "tvl",
    },
  ];
  return (
    <Container className="lg:mt-[69px] md:mt-[33px] mt-0 lg:mb-[180px] mb-[72px] relative">
      <StatisticPanel
        displayItem={statsItems}
        displayStripCustomStyle="lg:-scroll-mt-[150px] -scroll-mt-[100px]"
        displayId="statistics_display_masternodes"
      />
      <div
        className={classNames(
          "z-[-1] lg:block hidden absolute bg-contain bg-no-repeat md:rotate-0",
          "bg-[url(/assets/img/background/explore/masternodes/stats-accent-desktop.png)]",
          "lg:h-[386.45px] lg:w-[772.13px] lg:-left-[7.5em] lg:-bottom-[2em]",
          "h-[183.04px] w-[292.57px] rotate-90 -right-[11em] -bottom-[6.5em]",
        )}
      />
      <div
        className={classNames(
          "absolute bg-contain bg-no-repeat z-[-1]",
          "lg:bg-[url(/assets/img/background/explore/masternodes/stats-greendot-desktop.png)]",
          "md:bg-[url(/assets/img/background/explore/masternodes/stats-greendot-tablet.png)]",
          "bg-[url(/assets/img/background/explore/masternodes/stats-greendot-mobile.png)]",
          "lg:h-[127.67px] lg:w-[430.42px] lg:-left-[7.5em] lg:bottom-[1em]",
          "md:h-[287px] md:w-[558px] md:-left-[3.2em] md:-bottom-[2.2em]",
          "h-[364.07px] w-[187.25px] -bottom-[7.5em] -left-[1.5em]",
        )}
      />
    </Container>
  );
}
