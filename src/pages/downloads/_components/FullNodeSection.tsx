import { useTranslation } from "next-i18next";
import { ExternalLink } from "@components/commons/link/ExternalLink";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { DynamicDownloadCard } from "./DynamicDownloadCard";
import { DownloadCard } from "./DownloadCard";

export function FullNodeSection(): JSX.Element {
  const { t } = useTranslation(["page-downloads"]);

  return (
    <>
      <h2
        className="text-xl lg:text-2xl font-medium mb-3 mt-10"
        data-testid="FullNodeSection.Title"
      >
        {t("FullNodeWallets.title")}
      </h2>
      <p
        className="text-lg lg:text-xl mb-4"
        data-testid="FullNodeSection.Subtitle"
      >
        {t("FullNodeWallets.subtitle")}
      </p>
      <div className="flex flex-wrap pb-10 -m-1">
        <DynamicDownloadCard
          title={t("FullNodeWallets.entries.DFC.title")}
          desc={t("FullNodeWallets.entries.DFC.desc")}
          imageSrc="/assets/img/downloads/dfiwallet.png"
          testid="FullNodeWallets.Dfc"
          repoName="defiCh/app"
          keywords={{
            mac: ".dmg",
            win: ".exe",
            linux: ".appimage",
          }}
        />

        <DownloadCard
          title={t("FullNodeWallets.entries.RPI.title")}
          desc={t("FullNodeWallets.entries.RPI.desc")}
          imageSrc="/assets/img/downloads/dfinode.png"
          testid="FullNodeWallets.Rpi"
        >
          <div className="flex items-center text-lg font-medium">
            <ExternalLink
              text="Github"
              url="https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi"
            />
          </div>
        </DownloadCard>

        <DynamicDownloadCard
          title={t("FullNodeWallets.entries.CLI.title")}
          desc={t("FullNodeWallets.entries.CLI.desc")}
          imageSrc={
            <BsFillTerminalFill fontSize={50} className="fill-primary-500" />
          }
          testid="FullNodeWallets.Cli"
          repoName="defiCh/ain"
          keywords={{
            mac: "apple",
            win: "w64",
            linux: "linux",
          }}
        />

        <DynamicDownloadCard
          title={t("FullNodeWallets.entries.DFIElectrum.title")}
          desc={t("FullNodeWallets.entries.DFIElectrum.desc")}
          imageSrc={<FaReact fontSize={50} className="fill-primary-500" />}
          testid="FullNodeWallets.DFIElectrum"
          repoName="BirthdayResearch/defichain-electrum"
          keywords={{
            win: ".exe",
            linux: ".appimage",
          }}
        />

        <DownloadCard
          title={t("FullNodeWallets.entries.QUANTUM.title")}
          desc={t("FullNodeWallets.entries.QUANTUM.desc")}
          imageSrc="/assets/img/downloads/quantum.png"
          testid="FullNodeWallets.Quantum"
        >
          <div className="flex items-center text-lg font-medium">
            <ExternalLink text="Quantum" url="https://quantumbridge.app/" />
          </div>
        </DownloadCard>
      </div>
    </>
  );
}
