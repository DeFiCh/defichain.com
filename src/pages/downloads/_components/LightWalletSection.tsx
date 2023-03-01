import { useTranslation } from "next-i18next";
import { ExternalLink } from "components/commons/link/ExternalLink";
import { DownloadCard } from "./DownloadCard";
import { AppStoreDownload } from "./AppStoreDownload";
import { PlaystoreDownload } from "./PlaystoreDownload";

export function LightWalletSection(): JSX.Element {
  const { t } = useTranslation(["page-downloads"]);

  return (
    <>
      <h2
        className="text-xl lg:text-2xl font-medium mb-3 mt-10"
        data-testid="LightWalletSection.Title"
      >
        {t("LightWallets.title")}
      </h2>
      <p
        className="text-lg lg:text-xl mb-4"
        data-testid="LightWalletSection.Subtitle"
      >
        {t("LightWallets.subtitle")}
      </p>
      <div className="flex flex-wrap pb-10 -m-1">
        <DownloadCard
          title={t("LightWallets.entries.DFC.title")}
          desc={t("LightWallets.entries.DFC.desc")}
          imageSrc="/assets/img/downloads/dfi.png"
          testid="LightWallets.Dfc"
        >
          <div className="grid gap-2 md:flex md:items-center md:space-x-4">
            <AppStoreDownload url="https://apps.apple.com/us/app/defichain-wallet/id1572472820" />
            <PlaystoreDownload url="https://play.google.com/store/apps/details?id=com.defichain.app" />
          </div>
        </DownloadCard>

        <DownloadCard
          title={t("LightWallets.entries.DFX.title")}
          desc={t("LightWallets.entries.DFX.desc")}
          imageSrc="/assets/img/downloads/dfxpng.png"
          testid="LightWallets.Dfx"
        >
          <div className="grid gap-2 md:flex md:items-center md:space-x-4">
            <AppStoreDownload url="https://apps.apple.com/app/id1582633093" />
            <PlaystoreDownload url="https://play.google.com/store/apps/details?id=com.defichain.app.dfx" />
          </div>
        </DownloadCard>

        <DownloadCard
          title={t("LightWallets.entries.JLY.title")}
          desc={t("LightWallets.entries.JLY.desc")}
          imageSrc="/assets/img/downloads/jly.svg"
          testid="LightWallets.Jly"
        >
          <div className="flex items-center space-x-4 text-lg font-medium">
            <ExternalLink
              text="Chrome"
              url="https://chrome.google.com/webstore/detail/jellywallet/eegcfalgkkhehkhbjbggbhhlcnckadih"
            />
            <ExternalLink
              text="Firefox"
              url="https://addons.mozilla.org/en-US/firefox/addon/jellywallet/"
            />
            <ExternalLink
              text="Brave"
              url="https://chrome.google.com/webstore/detail/jellywallet/eegcfalgkkhehkhbjbggbhhlcnckadih"
            />
          </div>
        </DownloadCard>
      </div>
    </>
  );
}
