import Link from "next/link";
import { getExchangeLogo } from "@components/icons/assets/exchanges";
import { useTranslation } from "../../../../hooks/useTranslation";

interface ExchangeItem {
  id: string;
  name: string;
  url: string;
}

export default function GetDFISectionExchanges() {
  const { t } = useTranslation("page-explore-dfi");
  const exchanges: ExchangeItem[] = [
    {
      id: "GetDFISection.Exchange.Bitrue",
      name: "Bitrue",
      url: "https://www.bitrue.com/trade/dfi_usdt",
    },
    {
      id: "GetDFISection.Exchange.Kucoin",
      name: "Kucoin",
      url: "https://trade.kucoin.com/DFI-USDT",
    },
    {
      id: "GetDFISection.Exchange.Htx",
      name: "Htx",
      url: "https://www.htx.com/trade/dfi_usdt",
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
      id: "GetDFISection.Exchange.Bitdotcom",
      name: "Bitdotcom",
      url: "https://www.bit.com/legacy/spot?pair=DFI-USDT",
    },
    {
      id: "GetDFISection.Exchange.Latoken",
      name: "Latoken",
      url: "https://latoken.com/exchange/DFI_USDT",
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
    {
      id: "GetDFISection.Exchange.ChangeNow",
      name: "ChangeNow",
      url: "https://changenow.io/?_branch_match_id=1164181675870671265&_branch_referrer=H4sIAAAAAAAAAxXHWQqAIBAA0Nv46YK0EEhHiSHHlNyYRrp%2B9P5eZO7PptQZoV5Y2yuhd5lTvRVhQCLI%2B78jeWfXBXAGAxa0mQSUNio7o7UI1IrDQYKb8yF9nHrl9FUAAAA%3D&amount=100&from=eur&to=dfi",
    },
    {
      id: "GetDFISection.Exchange.Bake",
      name: "Bake",
      url: "https://bake.io/",
    },
    {
      id: "GetDFISection.Exchange.CoinEx",
      name: "CoinEx",
      url: "https://coinex.com/en/exchange/DFI-USDT",
    },
  ];

  const staking: ExchangeItem[] = [
    {
      id: "GetDFISection.Staking.Bake",
      name: "Bake",
      url: "https://bake.io/",
    },
  ];

  return (
    <section className="w-full">
      <ExchangeGrid items={exchanges} />

      <div className="mt-14">
        <div className="font-desc text-dark-700 mb-4">
          {t("getDfiSection.stakingText")}
        </div>
        <ExchangeGrid items={staking} />
      </div>
    </section>
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
            data-testid={item.id.replaceAll(".", "-").toLowerCase()}
            href={item.url}
            className="rounded-[5px] p-[0.5px] bg-dark-200 hover:accent-gradient-1 active:opacity-70"
            target="_blank"
          >
            <article className="w-full h-[115px] rounded-[5px] flex justify-center items-center bg-dark-00">
              <Logo />
            </article>
          </Link>
        );
      })}
    </div>
  );
}
