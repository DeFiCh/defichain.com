import { PageHeader } from "@components/commons/PageHeader";
import { Container } from "@components/commons/Container";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Head } from "@components/commons/Head";
import { LightWalletSection } from "./_components/LightWalletSection";
import { FullNodeSection } from "./_components/FullNodeSection";
import { DownloadSection } from "./_components/DownloadSection";

export default function DownloadsPage(): JSX.Element {
  const { t } = useTranslation(["page-downloads"]);

  return (
    <>
      <Head title={t("Head.title")} description={t("Head.desc")} />
      <PageHeader title={t("Header.title")}>
        <div className="mt-10 flex flex-wrap">
          <div
            className="w-full text-2xl text-gray-900"
            data-testid="Header.desc.main"
          >
            {t("Header.desc")}
          </div>
        </div>
      </PageHeader>

      <Container>
        <LightWalletSection />
        <FullNodeSection />
        <DownloadSection />
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
        "page-downloads",
      ])),
    },
  };
}
