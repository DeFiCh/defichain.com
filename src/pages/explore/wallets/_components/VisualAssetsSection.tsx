import { useTranslation } from "next-i18next";
import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import classNames from "classnames";
import DeFiChainLogo from "@components/icons/DeFiChainLogo";
import PoweredByDeFiChainLogo from "@components/icons/assets/downloadAssets/PoweredByDeFiChainLogo";
import DeFiChainAsset from "@components/icons/assets/downloadAssets/DeFiChainAsset";
import BTCDFILogo from "@components/icons/assets/downloadAssets/BTCDFILogo";
import DFI3D from "@components/icons/assets/downloadAssets/DFI3D";
import { SecondaryButton } from "@components/commons/Buttons";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { DownloadAssetsCard } from "./DownloadAssetsCard";

export function VisualAssetsSection() {
  const { t } = useTranslation(["page-explore-wallets"]);

  const dimension = useWindowDimensions();
  const mobileView = dimension.width <= 800;

  return (
    <Container className="mt-[120px] md:mt-[96px] lg:mt-[240px] lg:mb-[240px] md:mb-[112px] mb-[72px] relative">
      <div className="flex flex-col gap-y-5">
        <div className="flex md:justify-center justify-start">
          <SectionTitle
            text={t("visualAssetsSection.sectionTitle")}
            testID="advance-usage"
          />
        </div>

        <h2
          className={classNames(
            "lg:text-[60px] lg:leading-[72px] md:text-[40px] md:leading-[44px] text-[32px] leading-9",
            "text-dark-1000 md:text-center text-left",
          )}
          data-testid="visualAssetsSection.Title"
        >
          {t("visualAssetsSection.title")}
        </h2>
        <p
          className={classNames(
            "lg:text-xl text-base font-desc",
            "lg:tracking-normal tracking-[0.03em]",
            "text-dark-700 md:text-center text-left",
          )}
          data-testid="visualAssetsSection.Subtitle"
        >
          {t("visualAssetsSection.subtitle")}
        </p>
      </div>

      <div className="w-full flex-col flex items-center gap-y-16">
        {/* Download cards */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-5 md:mt-16 mt-8 items-center w-full">
          <DownloadAssetsCard
            title={t("visualAssetsSection.entries.DFC.title")}
            desc={t("visualAssetsSection.entries.DFC.desc")}
            testid="visualAssetsSection.Dfc"
            svgAssetPath="/downloads/visualAssets/dfi.svg"
            pngAssetPath="/downloads/visualAssets/dfi.png"
          >
            <DeFiChainLogo
              fill="#FFFFFF"
              className="w-[159px] h-9 md:w-[194.33px] lg:block lg:w-40 lg:h-full md:h-[44px]"
            />
          </DownloadAssetsCard>

          <DownloadAssetsCard
            title={t("visualAssetsSection.entries.PowerDFC.title")}
            desc={t("visualAssetsSection.entries.PowerDFC.desc")}
            testid="visualAssetsSection.Dfc"
            svgAssetPath="/downloads/visualAssets/dfi-powered-by.svg"
            pngAssetPath="/downloads/visualAssets/dfi-powered-by.png"
          >
            <PoweredByDeFiChainLogo
              fill="#FFFFFF"
              className="w-[159px] h-9 md:w-[194.33px] lg:block lg:w-40 lg:h-full md:h-[44px]"
            />
          </DownloadAssetsCard>

          <DownloadAssetsCard
            title={t("visualAssetsSection.entries.Jellyfish.title")}
            desc={t("visualAssetsSection.entries.Jellyfish.desc")}
            testid="visualAssetsSection.Dfc"
            svgAssetPath="/downloads/visualAssets/dfi-logo.svg"
            pngAssetPath="/downloads/visualAssets/dfi-logo.png"
          >
            <DeFiChainAsset className="w-[159px] h-9 md:w-[194.33px] lg:block lg:w-[48.75px] lg:h-full md:h-[44px]" />
          </DownloadAssetsCard>

          <DownloadAssetsCard
            title={t("visualAssetsSection.entries.Built.title")}
            desc={t("visualAssetsSection.entries.Built.desc")}
            testid="visualAssetsSection.Dfc"
            svgAssetPath="/downloads/visualAssets/dfi-btc-logo.svg"
            pngAssetPath="/downloads/visualAssets/dfi-btc-logo.png"
          >
            <BTCDFILogo />
          </DownloadAssetsCard>

          <DownloadAssetsCard
            title={t("visualAssetsSection.entries.DFI3D.title")}
            desc={t("visualAssetsSection.entries.DFI3D.desc")}
            testid="visualAssetsSection.Dfc"
            svgAssetPath="/downloads/visualAssets/dfi-3d-logo.svg"
            pngAssetPath="/downloads/visualAssets/dfi-3d-logo.png"
          >
            <DFI3D />
          </DownloadAssetsCard>
        </div>

        <SecondaryButton
          text={t("visualAssetsSection.button")}
          className="text-sm mt-9 lg:py-4 py-3 px-[62px] md:px-[56px] lg:text-base"
          href="/downloads/visualAssets/visualAssets.zip"
          customSize={mobileView ? 20 : 24}
          customClass="ml-[8px]"
          testID="metachain-roadmap-documentation"
          hasIcon={false}
          download
        />
      </div>

      <div
        className={classNames(
          "z-[-1] absolute bg-contain bg-no-repeat md:rotate-0",
          "bg-[url(/assets/img/background/explore/wallet/grids-accent.png)]",
          "lg:h-[300.18px] lg:w-[479.8px] lg:-right-[15em] lg:-bottom-[7.75em]",
          "md:h-[281.94px] md:w-[450.65px] md:-right-[10.7em] md:-bottom-[5em]",
          "h-[183.04px] w-[292.57px] rotate-90 -right-[11em] -bottom-[6.5em]",
        )}
      />
      <div
        className={classNames(
          "hidden md:block absolute bg-contain bg-no-repeat mix-blend-screen bg-[url(/assets/img/background/explore/wallet/union.png)]",
          "lg:h-[45px] lg:w-[45px] lg:-right-[1.5em] lg:-bottom-[1.5em]",
          "md:h-8 md:w-8 -right-[1.2em] -bottom-[4.75em]",
        )}
      />
    </Container>
  );
}
