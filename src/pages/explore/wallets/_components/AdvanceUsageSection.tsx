import { useTranslation } from "next-i18next";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import classNames from "classnames";
import { DynamicDownloadCard } from "./DynamicDownloadCard";
import { DownloadCard } from "./DownloadCard";
import { CardLink, IconType } from "./CardLink";

export function AdvanceUsageSection() {
  const { t } = useTranslation(["page-explore-wallets"]);

  return (
    <Container className="mt-[120px] md:mt-[96px] lg:mt-[240px] lg:mb-[240px] md:mb-[112px] mb-[72px]">
      <div className="flex flex-col gap-y-5">
        <div className="flex md:justify-center justify-start">
          <SectionTitle text="SUITABLE FOR ADVANCE USAGE" />
        </div>

        <h2
          className={classNames(
            "lg:text-[60px] lg:leading-[72px] md:text-[40px] md:leading-[44px] text-[32px] leading-[36px]",
            "text-dark-1000 md:text-center text-left"
          )}
          data-testid="AdvanceUseSection.Title"
        >
          {t("advanceUseSection.title")}
        </h2>
        <p
          className={classNames(
            "lg:text-xl text-base font-desc",
            "lg:tracking-normal tracking-[0.03em]",
            "text-dark-700 md:text-center text-left"
          )}
          data-testid="AdvanceUseSection.Subtitle"
        >
          {t("advanceUseSection.subtitle")}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-5 md:mt-16 mt-8">
        <DynamicDownloadCard
          title={t("advanceUseSection.entries.DFC.title")}
          desc={t("advanceUseSection.entries.DFC.desc")}
          imageSrc="/assets/img/downloads/dfiwallet.png"
          testid="AdvanceUseSection.Dfc"
          repoName="defiCh/app"
          keywords={{
            mac: ".dmg",
            win: ".exe",
            linux: ".appimage",
          }}
        />

        <DownloadCard
          title={t("advanceUseSection.entries.RPI.title")}
          desc={t("advanceUseSection.entries.RPI.desc")}
          imageSrc="/assets/img/downloads/dfinode.png"
          testid="AdvanceUseSection.Rpi"
        >
          <CardLink
            url="https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi"
            descText="View on"
            text={IconType.GITHUB}
          />
        </DownloadCard>

        <DynamicDownloadCard
          title={t("advanceUseSection.entries.CLI.title")}
          desc={t("advanceUseSection.entries.CLI.desc")}
          imageSrc={
            <BsFillTerminalFill fontSize={50} className="fill-brand-100" />
          }
          testid="AdvanceUseSection.Cli"
          repoName="defiCh/ain"
          keywords={{
            mac: "apple",
            win: "w64",
            linux: "linux",
          }}
        />

        <DynamicDownloadCard
          title={t("advanceUseSection.entries.DFIElectrum.title")}
          desc={t("advanceUseSection.entries.DFIElectrum.desc")}
          imageSrc={<FaReact fontSize={50} className="fill-brand-100" />}
          testid="AdvanceUseSection.DFIElectrum"
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
