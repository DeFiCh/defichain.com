import classNames from "classnames";
import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import { Popover } from "@headlessui/react";
import { ExternalLink } from "@components/commons/link/ExternalLink";
import Image from "next/legacy/image";

export function BuyDFIButton({
  classname,
  price,
}: {
  classname?: string;
  price: string;
}): JSX.Element {
  const { t } = useTranslation("layout");

  const exchanges = [
    {
      name: "KuCoin",
      image: "/assets/svg/exchanges/logo-kucoin.svg",
      url: "https://trade.kucoin.com/DFI-BTC",
    },
    {
      name: "Huobi",
      image: "/assets/img/exchanges/logo-huobi.png",
      url: "https://www.huobi.com/en-us/exchange/dfi_usdt",
    },
    {
      name: "Gate.io",
      image: "/assets/svg/exchanges/logo-gateio.svg",
      url: "https://www.gate.io/trade/DFI_USDT",
    },
    {
      name: "LATOKEN",
      image: "/assets/svg/exchanges/logo-latoken.svg",
      url: "https://go.latoken.com/1gd",
    },
    {
      name: "Bittrue",
      image: "/assets/svg/exchanges/logo-bittrue.svg",
      url: "https://www.bitrue.com/trade/dfi_btc",
    },
    {
      name: "EasyCrypto (AU)",
      image: "/assets/img/exchanges/logo-easycrypto-au.png",
      url: "https://easycrypto.ai/au/buy-sell/dfi-defichain",
    },
    {
      name: "EasyCrypto (NZ)",
      image: "/assets/img/exchanges/logo-easycrypto-nz.png",
      url: "https://easycrypto.ai/nz/buy-sell/dfi-defichain",
    },
    {
      name: "Transak",
      image: "/assets/img/exchanges/logo-transak.png",
      url: "https://global.transak.com",
    },
    {
      name: "Bybit",
      image: "/assets/svg/exchanges/logo-bybit.svg",
      url: "https://www.bybit.com/en-US/trade/spot/DFI/USDT",
    },
    {
      name: "Swyftx",
      image: "/assets/svg/exchanges/logo-swyftx.svg",
      url: "https://swyftx.com/au/buy/defichain/",
    },
    {
      name: "Bit.com",
      image: "/assets/img/exchanges/bit.png",
      url: "https://www.bit.com/legacy/spot?pair=DFI-USDT",
    },
    {
      name: "Bitmart.com",
      image: "/assets/svg/exchanges/logo-bitmart.svg",
      url: "https://www.bitmart.com/trade/en?symbol=%24DFI_USDT&layout=basic",
    },
  ];

  return (
    <Popover className="relative">
      <Popover.Button as={Fragment}>
        <div
          className={classNames(
            "flex justify-center items-center text-white bg-primary-500 hover:bg-primary-600 p-2.5 lg:px-4 lg:rounded md:mb-0 cursor-pointer",
            classname,
          )}
        >
          <span>{t("header.navbar.buy")}</span>
          <span className="font-medium ml-1">$DFI</span>
          {price !== "0" && (
            <span className="ml-1.5 text-gray-100 font-medium text-sm">
              ${Number(price).toFixed(2)}
            </span>
          )}
        </div>
      </Popover.Button>

      <Popover.Panel className="flex flex-wrap lg:mt-1 bg-white w-full lg:w-48 rounded absolute z-50 text-center text-gray-700 text-lg border shadow-lg border-gray-200">
        {exchanges.map((exchange) => (
          <div key={exchange.name} className="w-1/2 lg:w-full">
            <ExternalLink url={exchange.url}>
              <div className="flex justify-center p-3 hover:bg-gray-100 border-b border-r">
                <Image
                  src={exchange.image ?? ""}
                  width={140}
                  height={32}
                  layout="fixed"
                  objectFit="contain"
                  alt={exchange.name}
                  unoptimized
                />
              </div>
            </ExternalLink>
          </div>
        ))}
      </Popover.Panel>
    </Popover>
  );
}
