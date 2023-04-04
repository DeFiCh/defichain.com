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
  return (
    <div className="md:card-outline-2 p-[0.5px] rounded-[40px] w-fit mt-8">
      <div className="flex flex-row md:gap-x-3 gap-x-2 rounded-[40px] md:bg-dark-100 p-1 w-fit">
        <TabButton
          buttonText={t("exploreDTokensSection.buttonSelectionTabs.crypto")}
          tokenSectionChoice={tokenSectionChoice}
          tokenLabels={TokenLabels.CRYPTO}
          setTokenSectionChoice={setTokenSectionChoice}
        />

        <TabButton
          buttonText={t("exploreDTokensSection.buttonSelectionTabs.dstocks")}
          tokenSectionChoice={tokenSectionChoice}
          tokenLabels={TokenLabels.DSTOCKS}
          setTokenSectionChoice={setTokenSectionChoice}
        />

        <TabButton
          buttonText={t("exploreDTokensSection.buttonSelectionTabs.etfs")}
          tokenSectionChoice={tokenSectionChoice}
          tokenLabels={TokenLabels.ETFS}
          setTokenSectionChoice={setTokenSectionChoice}
        />
      </div>
    </div>
  );
}

function TabButton({
  tokenSectionChoice,
  setTokenSectionChoice,
  buttonText,
  tokenLabels,
}: {
  tokenSectionChoice: TokenLabels;
  setTokenSectionChoice: Dispatch<SetStateAction<TokenLabels>>;
  buttonText: string;
  tokenLabels: TokenLabels;
}) {
  const dimension = useWindowDimensions();
  return (
    <div className="card-outline-2 md:bg-none p-[0.5px] rounded-[52px]">
      <button
        type="button"
        onClick={() => setTokenSectionChoice(tokenLabels)}
        className={classNames(
          "px-5 md:py-3 py-[10px] text-dark-1000 md:font-medium font-semibold rounded-[52px] md:bg-none bg-dark-100",
          "md:text-[16px] md:leading-5 text-sm",
          {
            "bg-dark-1000 !text-dark-00": tokenSectionChoice === tokenLabels,
          },
          {
            "!px-4": dimension.width <= 320,
          }
        )}
      >
        {buttonText}
      </button>
    </div>
  );
}

export enum TokenLabels {
  CRYPTO = "Crypto",
  DSTOCKS = "dStocks",
  ETFS = "ETFs",
}
