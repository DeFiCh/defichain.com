import { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

export function ExploreDTokensSelection({
  tokenSectionChoice,
  setTokenSectionChoice,
}: {
  tokenSectionChoice: TokenLabels;
  setTokenSectionChoice: Dispatch<SetStateAction<TokenLabels>>;
}) {
  return (
    <div className="md:card-outline-2 p-[0.5px] rounded-[40px] w-fit">
      <div className="flex flex-row gap-x-3 rounded-[40px] md:bg-dark-100 p-1 w-fit">
        <div className="card-outline-2 md:bg-none p-[0.5px] rounded-[52px]">
          <button
            type="button"
            onClick={() => setTokenSectionChoice(TokenLabels.CRYPTO)}
            className={classNames(
              "px-5 py-3 text-dark-1000 font-medium rounded-[52px] md:bg-none bg-dark-100",
              {
                "bg-dark-1000 !text-dark-00":
                  tokenSectionChoice === TokenLabels.CRYPTO,
              }
            )}
          >
            {TokenLabels.CRYPTO}
          </button>
        </div>

        <div className="card-outline-2 md:bg-none p-[0.5px] rounded-[52px]">
          <button
            type="button"
            onClick={() => setTokenSectionChoice(TokenLabels.DSTOCKS)}
            className={classNames(
              "px-5 py-3 text-dark-1000 font-medium rounded-[52px] md:bg-none bg-dark-100",
              {
                "bg-dark-1000 !text-dark-00":
                  tokenSectionChoice === TokenLabels.DSTOCKS,
              }
            )}
          >
            {TokenLabels.DSTOCKS}
          </button>
        </div>

        <div className="card-outline-2 md:bg-none p-[0.5px] rounded-[52px]">
          <button
            type="button"
            onClick={() => setTokenSectionChoice(TokenLabels.ETFS)}
            className={classNames(
              "px-5 py-3 text-dark-1000 font-medium rounded-[52px] md:bg-none bg-dark-100",
              {
                "bg-dark-1000 !text-dark-00":
                  tokenSectionChoice === TokenLabels.ETFS,
              }
            )}
          >
            {TokenLabels.ETFS}
          </button>
        </div>
      </div>
    </div>
  );
}

export enum TokenLabels {
  CRYPTO = "Crypto",
  DSTOCKS = "dStocks",
  ETFS = "ETFs",
}
