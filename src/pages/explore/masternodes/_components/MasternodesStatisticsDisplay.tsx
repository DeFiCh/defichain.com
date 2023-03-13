import { useEffect, useState } from "react";
import { StatsData } from "@defichain/whale-api-client/dist/api/stats";
import { StatisticPanel } from "@components/commons/StatisticPanel";
import { useUnitSuffix } from "@hooks/useUnitSuffix";
import { Container } from "@components/commons/Container";
import { useWhaleApiClient } from "../../../../layouts/context/WhaleContext";

export function MasternodesStatisticsDisplay() {
  const api = useWhaleApiClient();
  const [stats, setStats] = useState<StatsData>();

  useEffect(() => {
    void api.stats.get().then((statsItem) => {
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
      "N/A"
  );

  const masternodeValue = value === "N/A" ? undefined : `${value + suffix}+`;

  const statsItems = [
    {
      title: "MASTERNODES",
      stats: reducer(stats?.masternodes.locked, "count"),
      desc: `${masternodeValue} locked for 10 years`,
    },
    {
      title: "TOTAL VALUE LOCKED",
      prefix: "$",
      stats: stats?.tvl.masternodes,
      desc: "in user engagement network",
    },
  ];
  return (
    <Container className="lg:mt-[69px] md:mt-[33px] mt-0 lg:mb-[180px] mb-[72px]">
      <StatisticPanel
        displayItem={statsItems}
        displayStripCustomStyle="scroll-mt-[200px]"
        displayId="statistics_display_masternodes"
      />
    </Container>
  );
}
