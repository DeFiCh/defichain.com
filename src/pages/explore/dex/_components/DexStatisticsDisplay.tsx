import { useEffect, useState } from "react";
import { StatsData } from "@defichain/whale-api-client/dist/api/stats";
import { PoolPairData } from "@defichain/whale-api-client/dist/api/poolpairs";
import { Container } from "@components/commons/Container";
import { StatisticPanel } from "@components/commons/StatisticPanel";
import { TokenData } from "@defichain/whale-api-client/dist/api/tokens";
import { WhaleApiClient } from "@defichain/whale-api-client";
import { useTranslation } from "next-i18next";
import { useWhaleApiClient } from "../../../../layouts/context/WhaleContext";

export function DexStatisticsDisplay() {
  const api = useWhaleApiClient();
  const [stats, setStats] = useState<StatsData>();
  const [total24h, setTotal24h] = useState<number | undefined>(undefined);
  const [numTokens, setNumTokens] = useState<number | undefined>(undefined);
  const { t } = useTranslation("page-explore-dex");

  useEffect(() => {
    api.stats.get().then((statsItem) => {
      setStats(statsItem);
    });

    getTotal24Vol(api).then((res) => {
      setTotal24h(res);
    });

    getTotalTokens(api).then((result) => {
      setNumTokens(result);
    });
  }, [api, api.poolpairs, api.stats, api.tokens]);

  const statsItems = [
    {
      title: t("statisticsDisplay.totalValueLocked.title"),
      prefix: "$",
      stats: stats?.tvl.dex,
    },
    {
      title: t("statisticsDisplay.tradingVolume.title"),
      prefix: "$",
      stats: total24h,
    },
    {
      title: t("statisticsDisplay.tokens.title"),
      stats: numTokens,
    },
  ];

  return (
    <Container className="lg:mt-[69px] md:mt-[33px] mt-0 lg:mb-[180px] mb-[72px]">
      <StatisticPanel
        displayItem={statsItems}
        displayStripCustomStyle="-scroll-mt-[100px]"
        displayId="explore-dex-statistics-display"
      />
    </Container>
  );
}

async function getTotal24Vol(api: WhaleApiClient) {
  const allPoolpairs: PoolPairData[] = [];
  let hasNext = false;
  let next;

  do {
    // eslint-disable-next-line no-await-in-loop
    const poolpairs = await api.poolpairs.list(200, next);
    allPoolpairs.push(...poolpairs);
    hasNext = poolpairs.hasNext;
    next = poolpairs.nextToken;
  } while (hasNext);

  return allPoolpairs.reduce((a, b) => a + (b.volume?.h24 ?? 0), 0);
}

async function getTotalTokens(api: WhaleApiClient) {
  const allTokens: TokenData[] = [];
  let hasNext = false;
  let next;

  do {
    // eslint-disable-next-line no-await-in-loop
    const tokens = await api.tokens.list(200, next);
    allTokens.push(...tokens);
    hasNext = tokens.hasNext;
    next = tokens.nextToken;
  } while (hasNext);

  const allDatNLpsTokens = allTokens.filter(
    (token) => token.isLPS || token.isDAT
  );

  return allDatNLpsTokens.length;
}
