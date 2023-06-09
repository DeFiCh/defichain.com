import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames";
import { Head } from "@components/commons/Head";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import * as prismic from "@prismicio/client";
import { MetaChainKeyFeatures } from "./_components/MetaChainKeyFeatures";
import { MetaChainRoadmap } from "./_components/MetaChainRoadmap";
import { MetaChainAgenda } from "./_components/MetaChainAgenda";

export default function MetaChainPage({ roadMapImg }): JSX.Element {
  const { t } = useTranslation("page-meta-chain");
  const dimension = useWindowDimensions();
  // console.log(roadMapImg[0].metachain_roadmap.url);
  return (
    <>
      <div className="relative">
        <Head title={t("heroBanner.subtitle")} />
        <HeroBanner
          customStyle="md:mb-[22px] lg:mb-[226px]"
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
      <MetaChainRoadmap roadMapImg={roadMapImg} />
      <MetaChainAgenda />
    </>
  );
}
async function getRoadMapFromPrismic(): Promise<any> {
  const endpoint = prismic.createClient("defichain");
  return endpoint.getByType("metachain");
}

export async function getStaticProps({ locale }) {
  const roadMapImg = await getRoadMapFromPrismic();
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "layout",
        "page-meta-chain",
      ])),
      roadMapImg: roadMapImg.results.map((r) => ({
        ...r.data,
      })),
    },
  };
}
