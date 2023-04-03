import { getAssetIcon } from "@components/icons/assets/tokens";
import { DexPrice } from "@defichain/whale-api-client/dist/api/poolpairs";
import BigNumber from "bignumber.js";
import classNames from "classnames";
import Slider from "react-slick";
import { useUnitSuffix } from "@hooks/useUnitSuffix";

export function ExploreDTokensGrid({
  selectionTokens,
}: {
  selectionTokens: { [symbol: string]: DexPrice } | undefined;
}) {
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    dotsClass: "custom-dots",
  };
  return (
    <>
      <div
        className={classNames(
          "md:flex hidden flex-wrap justify-center md:mt-16",
          "lg:w-[1000px] w-auto",
          "lg:gap-8 md:gap-6 gap-5"
        )}
      >
        {selectionTokens &&
          Object.entries(selectionTokens).map(([, value]) => (
            <ExploreDTokenCard
              id={`desktop-${value.token.symbol}`}
              symbol={value.token.displaySymbol}
              name={value.token.name}
              price={value.denominationPrice}
            />
          ))}
      </div>

      <div className="md:hidden block w-full mt-8">
        <Slider className="" {...sliderSettings}>
          <div className="flex flex-col space-y-5">
            {selectionTokens &&
              Object.entries(selectionTokens)
                .slice(0, 3)
                .map(([, value]) => (
                  <ExploreDTokenCard
                    id={`mobile-${value.token.symbol}`}
                    symbol={value.token.displaySymbol}
                    name={value.token.name}
                    price={value.denominationPrice}
                  />
                ))}
          </div>
          <div className="flex flex-col space-y-5">
            {selectionTokens &&
              Object.entries(selectionTokens)
                .slice(3, 6)
                .map(([, value]) => (
                  <ExploreDTokenCard
                    id={`mobile-${value.token.symbol}`}
                    symbol={value.token.displaySymbol}
                    name={value.token.name}
                    price={value.denominationPrice}
                  />
                ))}
          </div>
          <div className="flex flex-col space-y-5">
            {selectionTokens &&
              Object.entries(selectionTokens)
                .slice(6)
                .map(([, value]) => (
                  <ExploreDTokenCard
                    id={`mobile-${value.token.symbol}`}
                    symbol={value.token.displaySymbol}
                    name={value.token.name}
                    price={value.denominationPrice}
                  />
                ))}
          </div>
        </Slider>
      </div>
    </>
  );
}

function ExploreDTokenCard({
  symbol,
  name,
  price,
  id,
}: {
  symbol: string;
  name: string;
  price: string;
  id: string;
}) {
  const Icon = getAssetIcon(symbol.replace("d", ""), true, id);
  // eslint-disable-next-line prefer-const
  let { suffix, value } = useUnitSuffix(price, 2);
  if (!suffix) {
    value = new BigNumber(value).toFixed(2);
  }
  return (
    <div className="card-outline-2 p-[0.5px] rounded-[15px]">
      <div className="rounded-[15px] bg-dark-00 py-6 px-[31.2px] md:w-[214.4px]">
        <div className="flex md:flex-col flex-row md:gap-x-0 gap-x-4">
          <Icon className="h-12 w-12 place-self-center md:mb-4" />
          <div className="flex flex-col">
            <div className="font-bold text-xl md:text-center">{symbol}</div>
            <div className="text-xs text-dark-800 md:text-center line-clamp-1">
              {name}
            </div>
            <div className="mt-3 text-[18px] leading-6 text-dark-1000 font-semibold md:text-center">
              ${value}
              {suffix}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
