import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { DexPrice } from "@defichain/whale-api-client/dist/api/poolpairs";
import { SecondaryButton } from "@components/commons/Buttons";
import { ExploreDTokensGrid } from "./ExploreDTokensGrid";
import { useWhaleApiClient } from "../../../../layouts/context/WhaleContext";
import {
  ExploreDTokensSelection,
  TokenLabels,
} from "./ExploreDTokensSelection";

export function ExploreDTokensSection() {
  const api = useWhaleApiClient();
  const [tokenSectionChoice, setTokenSectionChoice] = useState(
    TokenLabels.CRYPTO
  );

  const [selectedTabTokens, setSelectedTabTokens] = useState<{
    [symbol: string]: DexPrice;
  }>();
  const [allTokens, setAllTokens] = useState<{ [symbol: string]: DexPrice }>();

  useEffect(() => {
    api.poolpairs.listDexPrices("USDT").then((res) => {
      res.dexPrices.USDT = {
        token: {
          id: "1",
          name: "Tether USD",
          symbol: "USDT",
          displaySymbol: "dUSDT",
        },
        denominationPrice: "1.00",
      };

      const tokensWithUpdatedName = {};

      // eslint-disable-next-line array-callback-return
      Object.entries(res.dexPrices).map(([key, value]) => {
        tokensWithUpdatedName[key] = value;
        tokensWithUpdatedName[key].token.name =
          tokenNameMap[value.token.symbol] ?? value.token.name;
      });

      setAllTokens(tokensWithUpdatedName);

      const initialSelectedTabTokens = {};
      // eslint-disable-next-line array-callback-return
      Object.entries(res.dexPrices).map(([key, value]) => {
        if (crypto.includes(key)) {
          initialSelectedTabTokens[key] = value;
        }
      });

      setSelectedTabTokens(initialSelectedTabTokens);
    });
  }, [api.poolpairs]);

  useEffect(() => {
    switch (tokenSectionChoice) {
      case TokenLabels.ETFS:
        if (allTokens !== undefined) {
          const userSelectedTabTokens = {};
          // eslint-disable-next-line array-callback-return
          Object.entries(allTokens).map(([key, value]) => {
            if (etfs.includes(key)) {
              userSelectedTabTokens[key] = value;
            }
          });

          setSelectedTabTokens(userSelectedTabTokens);
        }

        break;
      case TokenLabels.DSTOCKS:
        if (allTokens !== undefined) {
          const userSelectedTabTokens = {};
          // eslint-disable-next-line array-callback-return
          Object.entries(allTokens).map(([key, value]) => {
            if (dStocks.includes(key)) {
              userSelectedTabTokens[key] = value;
            }
          });

          setSelectedTabTokens(userSelectedTabTokens);
        }
        break;
      case TokenLabels.CRYPTO:
      default:
        if (allTokens !== undefined) {
          const userSelectedTabTokens = {};
          // eslint-disable-next-line array-callback-return
          Object.entries(allTokens).map(([key, value]) => {
            if (crypto.includes(key)) {
              userSelectedTabTokens[key] = value;
            }
          });

          setSelectedTabTokens(userSelectedTabTokens);
        }
    }
  }, [tokenSectionChoice]);

  return (
    <Container className="mb-[240px]">
      <div className="flex flex-col">
        <SectionTitle
          customStyle="md:place-self-center"
          text="WIDE ARRAY OF TOKENS"
        />
        <div
          className={classNames(
            "md:text-center text-[60px] leading-[72px] mt-5"
          )}
        >
          Explore dTokens
        </div>
        <div className="flex md:justify-center mt-8">
          <ExploreDTokensSelection
            tokenSectionChoice={tokenSectionChoice}
            setTokenSectionChoice={setTokenSectionChoice}
          />
        </div>
        <div className="flex md:justify-center md:mt-16 mt-8">
          <ExploreDTokensGrid selectionTokens={selectedTabTokens} />
        </div>
        <div className="flex justify-center mt-16">
          <SecondaryButton
            className="lg:py-4 py-3 md:px-[56px] px-[43px] w-fit"
            text="View all dTokens"
            hasDiagonalArrow
          />
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

const tokenNameMap = {
  DUSD: "Decentralized USD Token",
  BTC: "Bitcoin Token",
  ETH: "Ether Token",
  USDC: "USD Coin Token",
  EUROC: "Euro Coin Token",
  USDT: "Tether Token",
  LTC: "Litecoin Token",
  BCH: "Bitcoin Cash Token",
  TSLA: "Tesla Token",
  BABA: "Alibaba Stock Token",
  GOOGL: "Google Stock Token",
  AAPL: "Apple Stock Token",
  NVDA: "Nvidia Tokenized Stock",
  MSFT: "Microsoft Stock Token",
  PYPL: "Paypal Token",
  ARKK: "ARK Innovation",
  SPY: "Smarty Pay Token",
  GLD: "Digital Gold Token",
  VNQ: "Vanguard Real Estate Token",
  SLV: "iShares Silver Trust Defichain",
  URTH: "iShares MSCI World ETF Tokenized",
  QQQ: "Invesco QQQ token",
};
