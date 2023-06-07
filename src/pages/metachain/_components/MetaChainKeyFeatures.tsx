import { SectionGridLayout } from "@components/commons/SectionGridLayout";
import { useTranslation } from "next-i18next";
import {
  IconTypes,
  SvgIconsColumn,
} from "pages/explore/masternodes/SvgIconsColumn";

export function MetaChainKeyFeatures(): JSX.Element {
  const { t } = useTranslation("page-meta-chain");

  const MetachainKeyFeaturesItems = [
    {
      title: t("keyFeatures.evmIntegration.title"),
      desc: t("keyFeatures.evmIntegration.desc"),
      icon: IconTypes.EVM_INTEGRATION,
    },
    {
      title: t("keyFeatures.ecosystem.title"),
      desc: t("keyFeatures.ecosystem.desc"),
      icon: IconTypes.SCALABLE_ECOSYSTEM,
    },
    {
      title: t("keyFeatures.transactionFee.title"),
      desc: t("keyFeatures.transactionFee.desc"),
      icon: IconTypes.LOW_TRANSACTION_FEES,
    },
    {
      title: t("keyFeatures.switchingCosts.title"),
      desc: t("keyFeatures.switchingCosts.desc"),
      icon: IconTypes.LOW_SWITCHING_COSTS,
    },
  ];
  return (
    <div className="md:mt-[120px] lg:mt-[168px]">
      <SectionGridLayout
        displayId="metachain-key-features"
        sectionTitle={t("keyFeatures.subtitle")}
        title={t("keyFeatures.title")}
        description={t("keyFeatures.desc")}
        testID="metachain-key-features"
        isCenterAligned
      >
        <div className="relative">
          <SvgIconsColumn
            items={MetachainKeyFeaturesItems}
            id="tablet-desktop-screen"
            customClassStyle="flex-col"
            customParagraphStyle="mt-[25px]"
            isCenterAligned
          />
        </div>
      </SectionGridLayout>
    </div>
  );
}
