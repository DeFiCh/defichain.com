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
          customStyle="mb-[72px] md:mb-[26px] lg:!mb-[226px]"
          title={t("heroBanner.title")}
          subtitle={t("heroBanner.subtitle")}
          subtitleCustomStyle="lg:w-[629px]"
          desc={t("heroBanner.desc")}
          heroBg={HeroBannerBg.META_CHAIN}
          customBgPosStyle="!bg-auto lg:!right-[-12em] lg:!top-[-12em] lg:!h-[1395px] md:!right-[-15em] md:!top-[-15em] md:!h-[976px] !h-auto !top-[-22em] !right-[-21em] !left-[-2em]"
          hasStartExploringButton
          // TODO: update start exploring link to accurate section
          startExploringJumpLink="#metachain-key-features"
          testID="meta-chain"
        />

        <div
          className={classNames(
            "jellyfish-item bg-[url(/assets/img/index/metachain-jellyfish.png)]",
            "h-[300.93px] absolute mix-blend-lighten inset-0 bg-contain bg-no-repeat md:bg-right",
            "top-[10%] md:top-[16%] lg:top-[13%] left-[-35%] md:right-[35%] lg:right-[31%]",
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
