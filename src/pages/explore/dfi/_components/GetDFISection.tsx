import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { useTranslation } from "next-i18next";
import BigNumber from "bignumber.js";
import CoinGeckoIcon from "@components/icons/assets/exploreGetDFI/CoinGeckoIcon";
import CoinMarketCapIcon from "@components/icons/assets/exploreGetDFI/CoinMarketCapIcon";
import GetDFISectionExchanges from "./GetDFISectionExchanges";

export default function GetDFISection() {
  const [coinMarketCapPrice, setCoinMarketCapPrice] = useState<string>();
  const [coinGeckoPrice, setCoinGeckoPrice] = useState<string>();
  const { t } = useTranslation("page-explore-dfi");

  const getDFIPriceFromCoinMarketCap = async () => {
    try {
      const response = await fetch(
        "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=5804&convert_id=1,2781,2781"
      );
      const data = await response.json();
      const dfiId = 5804;
      const usdFiatId = 2781;
      const price = data?.data?.[dfiId]?.quote[usdFiatId]?.price;
      setCoinMarketCapPrice(price);
    } catch (e) {
      setCoinMarketCapPrice(undefined);
    }
  };

  const getDFIPriceFromCoinGecko = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/defichain?developer_data=false&community_data=false&tickers=false"
      );
      const data = await response.json();
      const price = data?.market_data?.current_price.usd;
      setCoinGeckoPrice(price);
    } catch (e) {
      setCoinGeckoPrice(undefined);
    }
  };

  useEffect(() => {
    getDFIPriceFromCoinMarketCap();
    getDFIPriceFromCoinGecko();
  }, []);

  return (
    <Container
      className={classNames(
        "mb-[314px] flex flex-col gap-12",
        "md:mb-[326px]",
        "lg:mb-[458px] lg:flex-row lg:gap-[69px]"
      )}
    >
      <div className="lg:w-[45%] flex flex-col gap-5 shrink-0">
        <SectionTitle text={t("getDfiSection.title")} />
        <div
          className={classNames(
            "text-[40px] leading-[44px] tracking-[-0.02em]",
            "lg:text-6xl lg:leading-[72px] lg:tracking-normal lg:mt-4"
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
        {/* DFI price from CoinMarketCap and CoinGecko */}
        <div className="w-full md:w-fit lg:w-full text-center mt-3">
          <div className="grid grid-cols-2 items-center divide-x divide-dark-200 border-[0.5px] border-dark-200 rounded-[15px] bg-dark-00 backdrop-blur bg-opacity-90 py-6">
            <DfiPrice
              name="marketCap"
              price={coinMarketCapPrice}
              url="https://coinmarketcap.com/currencies/defichain/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=defichain.com&utm_content=defichain"
            />
            <DfiPrice
              name="gecko"
              price={coinGeckoPrice}
              url="https://www.coingecko.com/en/coins/defichain?utm_content=defichain&utm_medium=coin_ticker_widget&utm_source=defichain.com"
            />
          </div>
          <div className="text-dark-700 tracking-[0.03em] text-xs lg:text-sm mt-2">
            {t("getDfiSection.exhangePriceText")}
          </div>
        </div>
      </div>
      {/* Exchanges */}
      <GetDFISectionExchanges />
    </Container>
  );
}

function DfiPrice({
  name,
  price,
  url,
}: {
  name: "marketCap" | "gecko";
  price: string | undefined;
  url: string;
}) {
  const priceMarketIcon = {
    gecko: CoinGeckoIcon,
    marketCap: CoinMarketCapIcon,
  };
  const MarketLogo = priceMarketIcon[name];
  const value = price === undefined ? "N/A" : `$${BigNumber(price).toFixed(2)}`;
  return (
    <div className="flex items-center justify-center px-6">
      <Link
        className="group flex items-center active:opacity-70"
        href={url}
        target="_blank"
      >
        <MarketLogo />
        <span
          className={classNames(
            "text-dark-1000 text-xl leading-6 ml-2",
            "lg:text-[32px] lg:leading-10"
          )}
        >
          {value}
        </span>
      </Link>
    </div>
  );
}
