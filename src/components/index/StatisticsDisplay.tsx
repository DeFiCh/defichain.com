import { Container } from "@components/commons/Container";
import { UnitSuffixReturnValue, useUnitSuffix } from "@hooks/useUnitSuffix";
import {
  StatsData,
  SupplyData,
} from "@defichain/whale-api-client/dist/api/stats";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import classNames from "classnames";
import { useWhaleApiClient } from "../../layouts/context/WhaleContext";
import { calculatePercentage } from "../../shared/calculatePercentage";

export function StatsDisplay() {
  const api = useWhaleApiClient();

  const [stats, setStats] = useState<StatsData>();
  const [supply, setSupply] = useState<SupplyData>();

  async function getData() {
    await Promise.all([api.stats.getSupply(), api.stats.get()]).then((item) => {
      setSupply(item[0]);
      setStats(item[1]);
    });
  }

  useEffect(() => {
    getData();
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
              title="TOTAL DFI MINTED"
              stats={supply?.total ?? 0}
              desc={`${calculatePercentage(
                supply?.total,
                supply?.max
              )} of max supply`}
            />
            <StatsItem
              title="Total VALUE LOCKED IN USD"
              prefix="$"
              stats={stats?.tvl.total ?? 0}
              desc="Pool | Masternodes | Vaults"
              descStyle="lg:block hidden"
            />
            <StatsItem
              title="MASTERNODES"
              stats={stats?.count.masternodes ?? 0}
              desc={`$${useUnitSuffix(
                stats ? stats.tvl.masternodes.toString() : "0"
              )}+ locked`}
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
    <div className="flex lg:flex-col flex-row items-center gap-y-2">
      <div className="bg-clip-text text-transparent accent-gradient-2 font-bold leading-5">
        {title}
      </div>
      <div className="flex flex-col lg:items-center items-end lg:gap-y-2 gap-y-1 lg:grow-0 grow">
        <div className="text-dark-1000 lg:text-[52px] text-xl leading-6 lg:leading-[52px]">
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

        <div className={classNames("text-dark-700", descStyle)}>{desc}</div>
      </div>
    </div>
  );
}
