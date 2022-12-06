import { useTranslation } from "next-i18next";
import { NumericFormat } from "react-number-format";
import { getAssetIcon } from "@components/icons/assets/tokens";
import { useEffect, useState } from "react";
import { PoolPairData } from "@defichain/whale-api-client/dist/api/poolpairs";
import { Section } from "@components/commons/Section";
import { useWhaleApiClient } from "../../../layouts/context/WhaleContext";

export function LiquidityPoolsSection(): JSX.Element {
  const { t } = useTranslation("page-dex");

  const api = useWhaleApiClient();
  const [poolPairsData, setPoolPairsData] = useState<PoolPairData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  function getLiquidityPools(): void {
    setIsLoading(true);

    api.poolpairs
      .list(200)
      .then((data) => {
        setPoolPairsData([...data]);
      })
      .catch(() => {
        setPoolPairsData([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getLiquidityPools();
  }, []);

  if (isLoading) {
    return <div />;
  }

  return (
    <Section title={t("LiquidityPools.title")} testId="LiquidityPoolsSection">
      <div className="w-full flex flex-wrap -m-2">
        {(() =>
          poolPairsData.map((item, index) => {
            if (index > 11 && !showMore) {
              return <></>;
            }
            const IconA = getAssetIcon(item.tokenA.symbol);
            const IconB = getAssetIcon(item.tokenB.symbol);

            return (
              <div
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
                key={index}
              >
                <div className="flex flex-wrap p-5 rounded bg-gray-50 justify-center">
                  <div className="flex items-center w-16 mr-4">
                    <IconA className="absolute z-10 h-10 w-10" />
                    <IconB className="absolute ml-5 h-10 w-10" />
                  </div>
                  <div className="text-gray-900">
                    <h3 className="text-xl font-semibold">
                      {`${item.tokenA.displaySymbol}-${item.tokenB.displaySymbol}`}
                    </h3>
                    {(() => {
                      if (item.apr === undefined) {
                        return "N/A";
                      }

                      return (
                        <>
                          <NumericFormat
                            value={item.apr.total * 100}
                            displayType="text"
                            thousandSeparator
                            decimalScale={2}
                            fixedDecimalScale
                            suffix="%"
                            className="font-light text-3xl"
                          />
                          <span className="ml-1 relative -top-3 font-medium text-sm text-gray-500">
                            APR
                          </span>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            );
          }))()}
      </div>
      <div
        className="flex w-full justify-center mt-8"
        onClick={() => setShowMore(!showMore)}
      >
        <button
          type="button"
          className="w-full md:w-1/3 py-2.5 text-primary-300 hover:text-primary-500 border border-primary-200 hover:border-primary-500 rounded"
          data-testid="LiquidityPools.showAllBtn"
        >
          {showMore ? t("LiquidityPools.hide") : t("LiquidityPools.showAll")}
        </button>
      </div>
    </Section>
  );
}
