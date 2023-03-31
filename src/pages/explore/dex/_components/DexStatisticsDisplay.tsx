import { useEffect, useState } from "react";
import { StatsData } from "@defichain/whale-api-client/dist/api/stats";
import { PoolPairData } from "@defichain/whale-api-client/dist/api/poolpairs";
import { Container } from "@components/commons/Container";
import { StatisticPanel } from "@components/commons/StatisticPanel";
import { TokenData } from "@defichain/whale-api-client/dist/api/tokens";
import { WhaleApiClient } from "@defichain/whale-api-client";
import { useWhaleApiClient } from "../../../../layouts/context/WhaleContext";

export function DexStatisticsDisplay() {
  const api = useWhaleApiClient();
  const [stats, setStats] = useState<StatsData>();
  const [total24h, setTotal24h] = useState<number | undefined>(undefined);
  const [numTokens, setNumTokens] = useState<number | undefined>(undefined);

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
      title: "TOTAL VALUE LOCKED",
      prefix: "$",
      stats: stats?.tvl.dex,
      desc: "Data from DeFiScan",
    },
    {
      title: "TRADING VOLUME (24H)",
      prefix: "$",
      stats: total24h,
      desc: "Data from DeFiScan",
    },
    {
      title: "Tokens",
      stats: numTokens,
      desc: "Crypto • dStocks • ETFs ",
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
