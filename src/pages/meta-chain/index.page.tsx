import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames";
import { Head } from "@components/commons/Head";
import { useWindowDimensions } from "@hooks/useWindowDimensions";

export default function MetaChainPage() {
  const { t } = useTranslation("page-meta-chain");
  const dimension = useWindowDimensions();
  return (
    <>
      <Head title={t("heroBanner.subtitle")} />
      <div className="w-full">
        <HeroBanner
          title={t("heroBanner.title")}
          subtitle={t("heroBanner.subtitle")}
          subtitleCustomStyle="lg:w-[629px]"
          desc={t("heroBanner.desc")}
          heroBg={HeroBannerBg.META_CHAIN}
          customBgPosStyle="lg:right-[-8em] md:right-[-5em] right-[-4em]"
          hasStartExploringButton
          // TODO: update start exploring link to accurate section
          startExploringJumpLink="#statistics-display-dfi"
          testID="meta-chain-section"
        />
      </div>

      <div
        className={classNames(
          "jellyfish-item bg-[url(/assets/img/index/metachain-jellyfish.png)]",
          "h-[300.93px] absolute inset-0 bg-contain bg-no-repeat md:bg-right",
          "top-[10%] md:top-[16%] lg:top-[25%] left-[-35%] md:right-[35%] lg:right-[25%]",
          { "right-[40%]": dimension.width <= 750 }
        )}
      />
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
        "page-meta-chain",
      ])),
    },
  };
}
