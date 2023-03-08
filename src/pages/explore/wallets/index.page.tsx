import { Container } from "@components/commons/Container";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ExploreCards, ExploreCardsImage } from "../_components/ExploreCards";

export default function ExploreWallets() {
  return (
    <Container className="mb-10">
      <ExploreCards
        title="EXPLORE DEFICHAIN"
        desc="Get $DFI"
        bgImage={ExploreCardsImage.METALCOIN}
        href=""
      />
      <ExploreCards
        title="EXPLORE DEFICHAIN"
        desc="Trade with DEX"
        bgImage={ExploreCardsImage.DIAMONDCOIN}
        href=""
      />
      <ExploreCards
        title="EXPLORE DEFICHAIN"
        desc="Running Masternodes"
        bgImage={ExploreCardsImage.CUBE}
        href=""
      />
      <div className="flex flex-row overflow-x-scroll gap-x-5">
        <ExploreCards
          title="EXPLORE DEFICHAIN"
          desc="Choose your wallet"
          bgImage={ExploreCardsImage.PHONE}
          href=""
        />
        <ExploreCards
          title="EXPLORE DEFICHAIN"
          desc="Invest, Trade & Earn"
          bgImage={ExploreCardsImage.ARROW}
          href=""
        />
      </div>
    </Container>
  );
}

export async function getStaticProps({
  locale,
}): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "layout",
        "page-explore",
      ])),
    },
  };
}
