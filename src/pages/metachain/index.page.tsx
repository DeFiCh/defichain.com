import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import classNames from "classnames";
import { Head } from "@components/commons/Head";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import * as prismic from "@prismicio/client";
import { useTranslation } from "../../hooks/useTranslation";
import { MetaChainKeyFeatures } from "./_components/MetaChainKeyFeatures";
import { MetaChainRoadmap } from "./_components/MetaChainRoadmap";
import { MetaChainFAQ } from "./_components/MetaChainFAQ";

export default function MetaChainPage(): JSX.Element {
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
            "top-[3%] md:top-[16%] lg:top-[13%] left-[-30%] md:right-[35%] lg:right-[31%]",
            { "right-[40%]": dimension.width <= 750 },
          )}
        />
      </div>
      <MetaChainKeyFeatures />
      <MetaChainRoadmap />
      <MetaChainFAQ />
    </>
  );
}

async function getLatestRoadMapUrl(): Promise<string> {
  try {
    const endpoint = prismic.createClient("defichain");
    const metachainData = await endpoint.getByType("metachain");
    const metachainArr =
      metachainData.results[metachainData.results.length - 1].data;
    return metachainArr.metachain_roadmap.url;
  } catch (e) {
    console.error(e);
    return "";
  }
}

export async function getStaticProps() {
  const roadMapImg = await getLatestRoadMapUrl();
  return {
    props: {
      roadMapImg,
    },
  };
}
