import { useEffect, useState } from "react";
import { SupplyData } from "@defichain/whale-api-client/dist/api/stats";
import { StatisticPanel } from "@components/commons/StatisticPanel";
import { Container } from "@components/commons/Container";
import { useUnitSuffix } from "@hooks/useUnitSuffix";
import { useTranslation } from "next-i18next";
import { useWhaleApiClient } from "../../../../layouts/context/WhaleContext";
import { calculatePercentage } from "../../../../shared/calculatePercentage";

export function DFIStatisticsDisplay() {
  const api = useWhaleApiClient();
  const [supply, setSupply] = useState<SupplyData>();
  const { t } = useTranslation("page-explore-dfi");

  const { value: dfiMintedValue, suffix: dfiMintedSuffix } = useUnitSuffix(
    supply?.max,
    1
  );

  useEffect(() => {
    api.stats.getSupply().then((supplyItem) => {
      setSupply(supplyItem);
    });
  }, [api.stats]);

  const supplyItems = [
    {
      title: t("statisticsDisplay.circulatingSupply.title"),
      stats: supply?.circulating,
      desc:
        supply === undefined
          ? supply
          : t("statisticsDisplay.circulatingSupply.desc", {
              perc: calculatePercentage(supply?.circulating, supply?.total),
            }),
    },
    {
      title: t("statisticsDisplay.dfiMinted.title"),
      stats: supply?.total,
      desc:
        supply === undefined
          ? supply
          : t("statisticsDisplay.dfiMinted.desc", {
              value: dfiMintedValue,
              suffix: dfiMintedSuffix,
            }),
    },
  ];

  return (
    <Container className="lg:mt-[69px] md:mt-[33px] mt-0 lg:mb-[180px] mb-[72px]">
      <StatisticPanel
        displayItem={supplyItems}
        displayStripCustomStyle="scroll-mt-[200px]"
        displayId="statistics-display-dfi"
      />
    </Container>
  );
}
