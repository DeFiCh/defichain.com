import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HeroBanner, HeroBannerBG } from "@components/commons/HeroBanner";

export default function ExploreWallets() {
  return (
    <HeroBanner
      title="CHOOSE A WALLET THAT SUITS YOU"
      subtitle="DeFiChain Wallets"
      desc="Gain access to the DeFi landscape through non-custodial wallets
      designed for a multitude of requirements."
      heroBG={HeroBannerBG.COIN_ARROW}
      startExploring
    />
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
