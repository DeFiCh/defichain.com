import { SSRConfig, useTranslation } from "next-i18next";
import { PageHeader } from "@components/commons/PageHeader";
import { Container } from "@components/commons/Container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Head } from "@components/commons/Head";
import { LiquidityPoolsSection } from "./_components/LiquidityPoolsSection";
import { WalletFeaturesSection } from "./_components/WalletFeaturesSection";

export default function DexPage(): JSX.Element {
  const { t } = useTranslation("page-dex");

  return (
    <>
      <Head title={t("Head.title")} description={t("Head.desc")} />
      <PageHeader title={t("Header.title")}>
        <div className="mt-10 flex flex-wrap">
          <div
            className="w-full text-2xl text-gray-900"
            data-testid="Header.desc.main"
          >
            {t("Header.desc.main")}
          </div>
          <br />
          <div
            className="w-full mt-1.5 text-gray-600"
            data-testid="Header.desc.secondary"
          >
            {t("Header.desc.secondary")}
          </div>
        </div>
      </PageHeader>
      <Container>
        <LiquidityPoolsSection />
        <WalletFeaturesSection />
      </Container>
    </>
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
        "page-dex",
      ])),
    },
  };
}
