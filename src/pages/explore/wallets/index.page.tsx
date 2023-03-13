import { Container } from "@components/commons/Container";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ExploreCards, ExploreCardsImage } from "../_components/ExploreCards";

export default function ExploreWallets() {
  const { t } = useTranslation("page-explore");
  const entries: Array<{ title: string; subtitle: string }> = t(
    "WalletsFooterCards.cards",
    { returnObjects: true }
  );
  return (
    <Container className="lg:mb-8 md:mb-6 mb-4">
      <div className="flex flex-row overflow-x-scroll lg:gap-x-[32.97px] md:gap-x-[24.97px] gap-x-[16.97px]">
        <ExploreCards
          title={t("WalletsFooterCards.cardTitle")}
          desc={entries[0].title}
          bgImage={ExploreCardsImage.DIAMONDCOIN}
          href=""
        />
        <ExploreCards
          title={t("WalletsFooterCards.cardTitle")}
          desc={entries[1].title}
          bgImage={ExploreCardsImage.METALCOIN}
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
