import classNames from "classnames";
import { useEffect, useState } from "react";
import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { useTranslation } from "next-i18next";
import BigNumber from "bignumber.js";
import { NumericFormat } from "react-number-format";
import { useWhaleApiClient } from "../../../../layouts/context/WhaleContext";
import GetDFISectionExchanges from "./GetDFISectionExchanges";

export default function GetDFISection() {
  const api = useWhaleApiClient();
  const [dfiPrice, setDfiPrice] = useState<string>("0");
  const { t } = useTranslation("page-explore-dfi");

  useEffect(() => {
    // TODO: Replace price with CoinGecko and CoinMarketCap prices
    api.prices.get("DFI", "USD").then((priceTicker) => {
      setDfiPrice(priceTicker.price.aggregated.amount);
    });
  }, [api.prices]);

  return (
    <Container
      className={classNames(
        "mb-24 flex flex-col gap-[72px]",
        "md:mb-28",
        "lg:mb-60 lg:flex-row lg:gap-[69px]"
      )}
    >
      <div className="lg:w-[45%] flex flex-col gap-5 shrink-0">
        <SectionTitle text={t("getDfiSection.title")} />
        <div
          className={classNames(
            "text-[40px] leading-[44px] tracking-[-0.02em]",
            "lg:text-6xl lg:leading-[72px] lg:tracking-normal"
          )}
        >
          {t("getDfiSection.subtitle")}
        </div>
        <div
          className={classNames(
            "font-desc text-dark-700 tracking-[0.03em] text-base",
            "lg:text-xl lg:tracking-normal"
          )}
        >
          <p>{t("getDfiSection.desc1")}</p>
          <br />
          <p>{t("getDfiSection.desc2")}</p>
        </div>

        {/* TODO: Update average price display and add CoinGecko and CoinMarketCap icons */}
        {/* Average DFI price */}
        <div className="border-[0.5px] border-dark-200 rounded-[30px] bg-dark-00 backdrop-blur bg-opacity-90 w-full flex flex-col flex-1 gap-y-2 p-6 text-center mt-9 lg:mt-3 grow-0">
          <span className="bg-clip-text text-transparent accent-gradient-2 font-bold leading-5">
            {t("getDfiSection.exchange.avgDfiPrice")}
          </span>
          <NumericFormat
            value={BigNumber(dfiPrice).toFixed(2)}
            displayType="text"
            prefix="$"
            className={classNames(
              "text-dark-1000 text-[32px] leading-9",
              "lg:text-[52px] lg:leading-none"
            )}
          />
        </div>
      </div>

      {/* Exchanges */}
      <GetDFISectionExchanges />
    </Container>
  );
}
