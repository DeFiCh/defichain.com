import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames";
import { Head } from "@components/commons/Head";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { MetaChainKeyFeatures } from "./_components/MetaChainKeyFeatures";

export default function MetaChainPage() {
  const { t } = useTranslation("page-meta-chain");
  const dimension = useWindowDimensions();
  return (
    <>
      <div className="relative">
        <Head title={t("heroBanner.subtitle")} />
        <HeroBanner
          title={t("heroBanner.title")}
          subtitle={t("heroBanner.subtitle")}
          subtitleCustomStyle="lg:w-[629px]"
          desc={t("heroBanner.desc")}
          heroBg={HeroBannerBg.META_CHAIN}
          customBgPosStyle="lg:right-[-8em] md:right-[-5em] right-[-4em]"
          hasStartExploringButton
          // TODO: update start exploring link to accurate section
          startExploringJumpLink="#metachain-key-features"
          testID="meta-chain"
        />
        <div
          className={classNames(
            "jellyfish-item bg-[url(/assets/img/index/metachain-jellyfish.png)]",
            "h-[300.93px] absolute inset-0 bg-contain bg-no-repeat md:bg-right",
            "top-[10%] md:top-[16%] lg:top-[25%] left-[-35%] md:right-[35%] lg:right-[25%]",
            { "right-[40%]": dimension.width <= 750 }
          )}
        />
      </div>
      <MetaChainKeyFeatures />
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
