import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { useTranslation } from "next-i18next";
import BigNumber from "bignumber.js";
import { NumericFormat } from "react-number-format";
import CoinGeckoIcon from "@components/icons/assets/exploreGetDFI/CoinGeckoIcon";
import CoinMarketCapIcon from "@components/icons/assets/exploreGetDFI/CoinMarketCapIcon";
import GetDFISectionExchanges from "./GetDFISectionExchanges";

export default function GetDFISection() {
  const [coinMarketCapPrice, setCoinMarketCapPrice] = useState<string>("0");
  const [coinGeckoPrice, setCoinGeckoPrice] = useState<string>("0");
  const { t } = useTranslation("page-explore-dfi");

  const getDFIPriceFromCoinMarketCap = () => {
    fetch(
      "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=5804&convert_id=1,2781,2781"
    ).then((resp) =>
      resp.json().then((data) => {
        const dfiId = 5804;
        const usdFiatId = 2781;
        const price = data?.data?.[dfiId]?.quote[usdFiatId]?.price ?? "0";
        setCoinMarketCapPrice(price);
      })
    );
  };

  const getDFIPriceFromCoinGecko = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/defichain?developer_data=false&community_data=false&tickers=false"
    ).then((resp) =>
      resp.json().then((data) => {
        const price = data?.market_data?.current_price.usd ?? "0";
        setCoinGeckoPrice(price);
      })
    );
  };

  useEffect(() => {
    getDFIPriceFromCoinMarketCap();
    getDFIPriceFromCoinGecko();
  }, []);

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
        {/* DFI price from CoinMarketCap and CoinGecko */}
        <div className="w-full md:w-fit lg:w-full border-[0.5px] border-dark-200 rounded-[15px] bg-dark-00 backdrop-blur bg-opacity-90 py-6 text-center mt-9 lg:mt-3">
          <div className="grid grid-cols-2 items-center divide-x divide-dark-200">
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
  price: string;
  url: string;
}) {
  const priceMarketIcon = {
    gecko: CoinGeckoIcon,
    marketCap: CoinMarketCapIcon,
  };
  const MarketLogo = priceMarketIcon[name];
  return (
    <div className="flex items-center justify-center px-6">
      <Link className="group flex items-center" href={url} target="_blank">
        <MarketLogo />
        <NumericFormat
          value={BigNumber(price).toFixed(2)}
          displayType="text"
          prefix="$"
          className={classNames(
            "text-dark-1000 text-xl leading-6 ml-2",
            "lg:text-[32px] lg:leading-10"
          )}
        />
      </Link>
    </div>
  );
}
