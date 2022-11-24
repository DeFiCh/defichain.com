import { PageHeader } from "@components/commons/PageHeader";
import { Container } from "@components/commons/Container";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LightWalletSection } from "./_components/LightWalletSection";
import { FullNodeSection } from "./_components/FullNodeSection";
import { Head } from "@components/commons/Head";
import Image from "next/image";
import { Section } from "@components/commons/Section";

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

function DownloadSection(): JSX.Element {
  const { t } = useTranslation(["page-downloads"]);
  const downloadList: any[] = t("DownloadSection.entries", {
    returnObjects: true,
  });

  return (
    <div className="w-full">
      <Section title={t("DownloadSection.title")} testId="DownloadSection">
        <div className="w-full flex flex-wrap -mx-1.5">
          {downloadList.map((download) => {
            return (
              <div
                className="p-1.5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col"
                key={download.name}
                data-testid="DownloadSection.Card"
              >
                <div className="p-6 flex flex-wrap bg-gray-50 rounded-lg justify-start flex flex-col flex-1">
                  <div className="relative w-[170px] h-[40px]">
                    <Image
                      fill
                      style={{ objectFit: "contain", objectPosition: "left" }}
                      src={download.image.svg}
                      alt={download.name}
                      title={download.name}
                    />
                  </div>
                  <div className="font-medium text-xl mt-4 flex-1 text-gray-900">
                    {download.name}
                  </div>
                  <div className="text-lg text-gray-900">{download.desc}</div>
                  <div className="space-x-3 mt-8">
                    <a
                      href={download.image.svg}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="text-primary-500 cursor-pointer">
                        SVG
                      </span>
                    </a>
                    <a
                      href={download.image.png}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="text-primary-500 cursor-pointer">
                        PNG
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
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
