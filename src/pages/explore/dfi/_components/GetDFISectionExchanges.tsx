import Link from "next/link";
import { getExchangeLogo } from "@components/icons/assets/exchanges";
import { useTranslation } from "next-i18next";

interface ExchangeItem {
  id: string;
  name: string;
  url: string;
}

export default function GetDFISectionExchanges() {
  const { t } = useTranslation("page-explore-dfi");
  const exchanges: ExchangeItem[] = [
    {
      id: "GetDFISection.Exchange.Bittrex",
      name: "Bittrex",
      url: "https://global.bittrex.com/Market/Index?MarketName=BTC-DFI",
    },
    {
      id: "GetDFISection.Exchange.Bitrue",
      name: "Bitrue",
      url: "https://www.bitrue.com/trade/dfi_btc",
    },
    {
      id: "GetDFISection.Exchange.Kucoin",
      name: "Kucoin",
      url: "https://trade.kucoin.com/DFI-BTC",
    },
    {
      id: "GetDFISection.Exchange.Huobi",
      name: "Huobi",
      url: "https://www.huobi.com/en-us/exchange/dfi_usdt",
    },
    {
      id: "GetDFISection.Exchange.Gateio",
      name: "Gateio",
      url: "https://www.gate.io/trade/DFI_USDT",
    },
    {
      id: "GetDFISection.Exchange.Transak",
      name: "Transak",
      url: "https://global.transak.com",
    },
    {
      id: "GetDFISection.Exchange.Bybit",
      name: "Bybit",
      url: "https://www.bybit.com/en-US/trade/spot/DFI/USDT",
    },
    {
      id: "GetDFISection.Exchange.Swyftx",
      name: "Swyftx",
      url: "https://swyftx.com/au/buy/defichain",
    },
    {
      id: "GetDFISection.Exchange.Bitdotcom",
      name: "Bitdotcom",
      url: "https://www.bit.com/legacy/spot?pair=DFI-USDT",
    },
    {
      id: "GetDFISection.Exchange.Latoken",
      name: "Latoken",
      url: "https://latoken.com/exchange/DFI_BTC",
    },
    {
      id: "GetDFISection.Exchange.Bitmart",
      name: "Bitmart",
      url: "https://www.bitmart.com/trade/en?symbol=%24DFI_USDT&layout=basic",
    },
    {
      id: "GetDFISection.Exchange.EasyAu",
      name: "EasycryptoAu",
      url: "https://easycrypto.com/au/buy-sell/dfi-defichain",
    },
    {
      id: "GetDFISection.Exchange.EasyNz",
      name: "EasycryptoNz",
      url: "https://easycrypto.com/nz/buy-sell/dfi-defichain",
    },
  ];

  const staking: ExchangeItem[] = [
    {
      id: "GetDFISection.Staking.Dfx",
      name: "Dfx",
      url: "https://dfx.swiss/en/",
    },
    {
      id: "GetDFISection.Staking.Cakedefi",
      name: "Cakedefi",
      url: "https://cakedefi.com/",
    },
    {
      id: "GetDFISection.Staking.Kucoin",
      name: "Kucoin",
      url: "https://www.kucoin.com/earn/finance/list",
    },
  ];

  return (
    <div className="w-full">
      <ExchangeGrid items={exchanges} />

      <div className="mt-14">
        <span className="font-desc text-dark-700 mb-4">
          {t("getDfiSection.staking.title")}
        </span>
        <ExchangeGrid items={staking} />
      </div>
    </div>
  );
}

function ExchangeGrid({ items }: { items: ExchangeItem[] }): JSX.Element {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => {
        const Logo = getExchangeLogo(item.name);
        return (
          <Link
            key={item.id}
            data-testid={item.id}
            href={item.url}
            className=""
            target="_blank"
          >
            <div className="w-full h-[115px] rounded-[5px] border-[0.5px] border-dark-200 flex justify-center items-center">
              <Logo />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
