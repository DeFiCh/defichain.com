import { useEffect, useState } from "react";
import { StatsData } from "@defichain/whale-api-client/dist/api/stats";
import { PoolPairData } from "@defichain/whale-api-client/dist/api/poolpairs";
import { Container } from "@components/commons/Container";
import { StatisticPanel } from "@components/commons/StatisticPanel";
import { TokenData } from "@defichain/whale-api-client/dist/api/tokens";
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

    const poolpairs: PoolPairData[] = [];
    api.poolpairs.list(200).then((result) => {
      poolpairs.push(...result);
      if (result.hasNext) {
        api.poolpairs
          .list(200, result.nextToken)
          .then((resultNext) => poolpairs.push(...resultNext));
      }
      setTotal24h(poolpairs.reduce((a, b) => a + (b.volume?.h24 ?? 0), 0));
    });

    let tokens: TokenData[] = [];
    api.tokens.list(200).then((tokenList) => {
      tokens.push(...tokenList);
      if (tokenList.hasNext) {
        api.tokens.list(200, tokenList.nextToken).then((tokenListNext) => {
          tokens.push(...tokenListNext);
        });
        tokens = tokens.filter((token) => token.isLPS || token.isDAT);
        setNumTokens(tokens.length);
      }
    });
  }, [api.stats, api.tokens]);

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
