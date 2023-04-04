import { Dispatch, SetStateAction } from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useWindowDimensions } from "@hooks/useWindowDimensions";

export function ExploreDTokensTabs({
  tokenSectionChoice,
  setTokenSectionChoice,
}: {
  tokenSectionChoice: TokenLabels;
  setTokenSectionChoice: Dispatch<SetStateAction<TokenLabels>>;
}) {
  const { t } = useTranslation("page-explore-dex");
  const dimension = useWindowDimensions();
  return (
    <div className="md:card-outline-2 p-[0.5px] rounded-[40px] w-fit mt-8">
      <div className="flex flex-row md:gap-x-3 gap-x-2 rounded-[40px] md:bg-dark-100 p-1 w-fit">
        <div className="card-outline-2 md:bg-none p-[0.5px] rounded-[52px]">
          <button
            type="button"
            onClick={() => setTokenSectionChoice(TokenLabels.CRYPTO)}
            className={classNames(
              "px-5 md:py-3 py-[10px] text-dark-1000 md:font-medium font-semibold rounded-[52px] md:bg-none bg-dark-100",
              "md:text-[16px] md:leading-5 text-sm",
              {
                "bg-dark-1000 !text-dark-00":
                  tokenSectionChoice === TokenLabels.CRYPTO,
              },
              {
                "!px-4": dimension.width <= 320,
              }
            )}
          >
            {t("exploreDTokensSection.buttonSelectionTabs.crypto")}
          </button>
        </div>

        <div className="card-outline-2 md:bg-none p-[0.5px] rounded-[52px]">
          <button
            type="button"
            onClick={() => setTokenSectionChoice(TokenLabels.DSTOCKS)}
            className={classNames(
              "px-5 md:py-3 py-[10px] text-dark-1000 md:font-medium font-semibold rounded-[52px] md:bg-none bg-dark-100",
              "md:text-[16px] md:leading-5 text-sm",
              {
                "bg-dark-1000 !text-dark-00":
                  tokenSectionChoice === TokenLabels.DSTOCKS,
              },
              {
                "!px-4": dimension.width <= 320,
              }
            )}
          >
            {t("exploreDTokensSection.buttonSelectionTabs.dstocks")}
          </button>
        </div>

        <div className="card-outline-2 md:bg-none p-[0.5px] rounded-[52px]">
          <button
            type="button"
            onClick={() => setTokenSectionChoice(TokenLabels.ETFS)}
            className={classNames(
              "px-5 md:py-3 py-[10px] text-dark-1000 md:font-medium font-semibold rounded-[52px] md:bg-none bg-dark-100",
              "md:text-[16px] md:leading-5 text-sm",
              {
                "bg-dark-1000 !text-dark-00":
                  tokenSectionChoice === TokenLabels.ETFS,
              },
              {
                "!px-4": dimension.width <= 320,
              }
            )}
          >
            {t("exploreDTokensSection.buttonSelectionTabs.etfs")}
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
