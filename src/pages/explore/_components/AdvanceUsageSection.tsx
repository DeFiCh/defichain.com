import { useTranslation } from "next-i18next";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { DynamicDownloadCard } from "./DynamicDownloadCard";
import { DownloadCard } from "./DownloadCard";
import { CardLink, IconType } from "./CardLink";

export function AdvanceUsageSection() {
  const { t } = useTranslation(["page-downloads"]);

  return (
    <Container className="mt-[120px] md:mt-[96px] lg:mt-[240px]">
      <div className="flex flex-col gap-y-5">
        <div className="flex md:justify-center justify-start">
          <SectionTitle text="SUITABLE FOR ADVANCE USAGE" />
        </div>

        <h2
          className="text-[60px] leading-[72px] text-dark-1000 md:text-center text-left"
          data-testid="FullNodeSection.Title"
        >
          {t("FullNodeWallets.title")}
        </h2>
        <p
          className="text-lg lg:text-xl font-desc text-dark-700 md:text-center text-left"
          data-testid="FullNodeSection.Subtitle"
        >
          {t("FullNodeWallets.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:mt-16 mt-8">
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
          <CardLink
            url="https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi"
            descText="View on"
            text={IconType.GITHUB}
          />
        </DownloadCard>

        <DynamicDownloadCard
          title={t("FullNodeWallets.entries.CLI.title")}
          desc={t("FullNodeWallets.entries.CLI.desc")}
          imageSrc={
            <BsFillTerminalFill fontSize={50} className="fill-brand-100" />
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
          imageSrc={<FaReact fontSize={50} className="fill-brand-100" />}
          testid="FullNodeWallets.DFIElectrum"
          repoName="BirthdayResearch/defichain-electrum"
          keywords={{
            win: ".exe",
            linux: ".appimage",
          }}
        />
      </div>
    </Container>
  );
}
