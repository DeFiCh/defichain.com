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
      id: "GetDFISection.Exchange.Latoken",
      name: "Latoken",
      url: "https://latoken.com/exchange/DFI_USDT",
    },
    {
      id: "GetDFISection.Exchange.Bake",
      name: "Bake",
      url: "https://bake.io/",
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
