import { useEffect, useState } from "react";
import { SupplyData } from "@defichain/whale-api-client/dist/api/stats";
import { StatisticPanel } from "@components/commons/StatisticPanel";
import { Container } from "@components/commons/Container";
import { useUnitSuffix } from "@hooks/useUnitSuffix";
import classNames from "classnames";
import { useTranslation } from "../../../../hooks/useTranslation";
import { useWhaleApiClient } from "../../../../layouts/context/WhaleContext";
import { calculatePercentage } from "../../../../shared/calculatePercentage";

export function DFIStatisticsDisplay() {
  const api = useWhaleApiClient();
  const [supply, setSupply] = useState<SupplyData>();
  const { t } = useTranslation("page-explore-dfi");

  const { value: dfiMintedValue, suffix: dfiMintedSuffix } = useUnitSuffix(
    1300000000,
    1,
  );

  useEffect(() => {
    api.stats
      .getSupply()
      .then((supplyItem) => {
        setSupply(supplyItem);
      })
      .catch((e) => console.error(e));
  }, [api.stats]);

  const supplyItems = [
    {
      title: t("statisticsDisplay.circulatingSupply.title"),
      stats: supply?.circulating,
      desc:
        supply === undefined
          ? supply
          : `${calculatePercentage(
              supply?.circulating,
              supply?.total,
            )} of max supply`,
      testID: "circulating-supply",
    },
    {
      title: t("statisticsDisplay.dfiMinted.title"),
      stats: supply?.total,
      desc:
        supply === undefined
          ? supply
          : `out of ${dfiMintedValue}${dfiMintedSuffix}} fixed supply`,
      testID: "dfi-minted",
    },
  ];

  return (
    <Container className="lg:mt-[69px] md:mt-[33px] mt-0 lg:mb-[180px] mb-[72px] relative">
      <StatisticPanel
        displayItem={supplyItems}
        displayStripCustomStyle="lg:-scroll-mt-[150px] -scroll-mt-[100px]"
        displayId="statistics-display-dfi"
      />
      <div
        className={classNames(
          "absolute bg-contain bg-no-repeat z-[-1]",
          "bg-[url(/assets/img/background/explore/dfi/stats-accent.png)]",
          "lg:h-[689px] lg:w-[354px] lg:-left-[4.2em] lg:-bottom-[25em]",
          "md:h-[558px] md:w-[287px] md:-left-[3.2em] md:-bottom-[20em] md:-left-[8em]",
          "w-[364.07px] h-[187.25px] -bottom-[9em] -left-[7em]",
        )}
      />
    </Container>
  );
}
