import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classNames from "classnames";
import {
  DexPrice,
  DexPricesResult,
} from "@defichain/whale-api-client/dist/api/poolpairs";
import { SecondaryButton } from "@components/commons/Buttons";
import { useTranslation } from "next-i18next";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { ExploreDTokensGrid } from "./ExploreDTokensGrid";
import { useWhaleApiClient } from "../../../../layouts/context/WhaleContext";
import { ExploreDTokensTabs, TokenLabels } from "./ExploreDTokensTabs";

export function ExploreDTokensSection() {
  const { t } = useTranslation("page-explore-dex");
  const api = useWhaleApiClient();
  const [tokenSectionChoice, setTokenSectionChoice] = useState(
    TokenLabels.CRYPTO
  );

  const [selectedTabTokens, setSelectedTabTokens] = useState<{
    [symbol: string]: DexPrice;
  }>();

  const [cryptoTokens, setCryptoTokens] = useState<{
    [symbol: string]: DexPrice;
  }>();
  const [dstocksTokens, setDstocksTokens] = useState<{
    [symbol: string]: DexPrice;
  }>();
  const [etfsTokens, setEtfsTokens] = useState<{
    [symbol: string]: DexPrice;
  }>();

  const tokenNameMap = {
    DUSD: t("exploreDTokensSection.tokenNames.DUSD"),
    BTC: t("exploreDTokensSection.tokenNames.BTC"),
    ETH: t("exploreDTokensSection.tokenNames.ETH"),
    USDC: t("exploreDTokensSection.tokenNames.USDC"),
    EUROC: t("exploreDTokensSection.tokenNames.EUROC"),
    USDT: t("exploreDTokensSection.tokenNames.USDT"),
    LTC: t("exploreDTokensSection.tokenNames.LTC"),
    BCH: t("exploreDTokensSection.tokenNames.BCH"),
    TSLA: t("exploreDTokensSection.tokenNames.TSLA"),
    BABA: t("exploreDTokensSection.tokenNames.BABA"),
    GOOGL: t("exploreDTokensSection.tokenNames.GOOGL"),
    AAPL: t("exploreDTokensSection.tokenNames.AAPL"),
    NVDA: t("exploreDTokensSection.tokenNames.NVDA"),
    MSFT: t("exploreDTokensSection.tokenNames.MFST"),
    PYPL: t("exploreDTokensSection.tokenNames.PYPL"),
    ARKK: t("exploreDTokensSection.tokenNames.ARKK"),
    SPY: t("exploreDTokensSection.tokenNames.SPY"),
    GLD: t("exploreDTokensSection.tokenNames.GLD"),
    VNQ: t("exploreDTokensSection.tokenNames.VNQ"),
    SLV: t("exploreDTokensSection.tokenNames.SLV"),
    URTH: t("exploreDTokensSection.tokenNames.URTH"),
    QQQ: t("exploreDTokensSection.tokenNames.QQQ"),
  };

  useEffect(() => {
    api.poolpairs.listDexPrices("USDT").then((res) => {
      setTokens(
        tokenNameMap,
        res,
        setCryptoTokens,
        setDstocksTokens,
        setEtfsTokens,
        setSelectedTabTokens
      );
    });
  }, [api.poolpairs]);

  useEffect(() => {
    switch (tokenSectionChoice) {
      case TokenLabels.ETFS:
        setSelectedTabTokens(etfsTokens);
        break;
      case TokenLabels.DSTOCKS:
        setSelectedTabTokens(dstocksTokens);
        break;
      case TokenLabels.CRYPTO:
      default:
        setSelectedTabTokens(cryptoTokens);
    }
  }, [tokenSectionChoice]);

  const dimension = useWindowDimensions();

  return (
    <Container className="mb-[240px]">
      <div className="flex flex-col md:items-center items-start">
        <SectionTitle text={t("exploreDTokensSection.title")} />
        <div
          className={classNames(
            "lg:text-[60px] lg:leading-[72px] mt-5 lg:tracking-normal",
            "text-[40px] leading-[44px] tracking-[-0.02em]"
          )}
        >
          {t("exploreDTokensSection.subtitle")}
        </div>

        <ExploreDTokensTabs
          tokenSectionChoice={tokenSectionChoice}
          setTokenSectionChoice={setTokenSectionChoice}
        />
        <ExploreDTokensGrid selectionTokens={selectedTabTokens} />

        <SecondaryButton
          className="place-self-center md:mt-16 mt-14 lg:py-4 py-3 md:px-[56px] px-[43px] w-fit lg:text-base text-sm lg::font-bold font-semibold"
          text={t("exploreDTokensSection.secondaryButtonText")}
          hasDiagonalArrow
          arrowSize={dimension.width >= 1024 ? 24 : 20}
        />

        <div className="text-dark-700 md:text-base text-sm place-self-center mt-4 text-center font-desc">
          {t("exploreDTokensSection.pricesDesc")}
        </div>
      </div>
    </Container>
  );
}

const crypto = ["DUSD", "BTC", "ETH", "USDC", "EUROC", "USDT", "LTC", "BCH"];
const dStocks = [
  "TSLA",
  "BABA",
  "GOOGL",
  "AAPL",
  "AMZN",
  "NVDA",
  "MSFT",
  "PYPL",
];
const etfs = ["ARKK", "SPY", "GLD", "VNQ", "VOO", "SLV", "URTH", "QQQ"];

function reorderObject(obj, order) {
  const newObj = {};
  order.forEach((key) => {
    if (Object.hasOwn(obj, key)) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

function setTokens(
  tokenNameMap: { [symbol: string]: string },
  allUncleanTokens: DexPricesResult,
  setCryptoTokens: Dispatch<
    SetStateAction<{
      [symbol: string]: DexPrice;
    }>
  >,
  setDstocksTokens: Dispatch<
    SetStateAction<{
      [symbol: string]: DexPrice;
    }>
  >,
  setEtfsTokens: Dispatch<
    SetStateAction<{
      [symbol: string]: DexPrice;
    }>
  >,
  setSelectedTabTokens: Dispatch<
    SetStateAction<{
      [symbol: string]: DexPrice;
    }>
  >
) {
  // eslint-disable-next-line no-param-reassign
  allUncleanTokens.dexPrices.USDT = {
    token: {
      id: "1",
      name: "Tether USD",
      symbol: "USDT",
      displaySymbol: "dUSDT",
    },
    denominationPrice: "1.00",
  };

  const allTokensWithUpdatedName = {};

  // eslint-disable-next-line array-callback-return
  Object.entries(allUncleanTokens.dexPrices).map(([key, value]) => {
    allTokensWithUpdatedName[key] = value;
    allTokensWithUpdatedName[key].token.name =
      tokenNameMap[value.token.symbol] ?? value.token.name;
  });

  const initialSelectedTabTokens = {};
  // eslint-disable-next-line array-callback-return
  Object.entries(allUncleanTokens.dexPrices).map(([key, value]) => {
    if (crypto.includes(key)) {
      initialSelectedTabTokens[key] = value;
    }
  });

  const reorderedInitialSelectedTabTokens = reorderObject(
    initialSelectedTabTokens,
    crypto
  );

  setCryptoTokens(reorderedInitialSelectedTabTokens);
  setSelectedTabTokens(reorderedInitialSelectedTabTokens);

  // set etfs and dstocks tokens
  const reorderedEtfs = reorderObject(allTokensWithUpdatedName, etfs);
  setEtfsTokens(reorderedEtfs);

  const reorderedDstocks = reorderObject(allTokensWithUpdatedName, dStocks);
  setDstocksTokens(reorderedDstocks);
}
