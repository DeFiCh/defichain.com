import { useTranslation } from "next-i18next";
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
    <Container className="mt-[120px] md:mt-[96px] lg:mt-[240px] lg:mb-[240px] md:mb-[112px] mb-[72px] relative">
      <div className="flex flex-col gap-y-5">
        <div className="flex md:justify-center justify-start">
          <SectionTitle
            text={t("advanceUseSection.sectionTitle")}
            testID="advance-usage"
          />
        </div>

        <h2
          className={classNames(
            "lg:text-[60px] lg:leading-[72px] md:text-[40px] md:leading-[44px] text-[32px] leading-[36px]",
            "text-dark-1000 md:text-center text-left"
          )}
          data-testid="advance-use-section-title"
        >
          {t("advanceUseSection.title")}
        </h2>
        <p
          className={classNames(
            "lg:text-xl text-base font-desc",
            "lg:tracking-normal tracking-[0.03em]",
            "text-dark-700 md:text-center text-left"
          )}
          data-testid="advance-use-section-subtitle"
        >
          {t("advanceUseSection.subtitle")}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-5 md:mt-16 mt-8">
        <DynamicDownloadCard
          title={t("advanceUseSection.entries.DFC.title")}
          desc={t("advanceUseSection.entries.DFC.desc")}
          imageSrc="/assets/img/explore/explore-wallet-dfiwallet.png"
          testid="advance-use-section-dfc"
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
          imageSrc="/assets/img/explore/explore-wallet-dfinode.png"
          testid="advance-use-section-rpi"
        >
          <CardLink
            testId="github-link-rasp-pi"
            url="https://github.com/Martin8617/Defi-Wallet-for-Raspberry-Pi"
            descText="View on"
            text={IconType.GITHUB}
          />
        </DownloadCard>

        <DynamicDownloadCard
          title={t("advanceUseSection.entries.CLI.title")}
          desc={t("advanceUseSection.entries.CLI.desc")}
          imageSrc="/assets/img/explore/explore-wallet-cli.png"
          testid="advance-use-section-cli"
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
          imageSrc={<FaReact className="fill-brand-100 w-[72px] h-[63px]" />}
          testid="advance-use-section-electrum"
          repoName="BirthdayResearch/defichain-electrum"
          keywords={{
            win: ".exe",
            linux: ".appimage",
          }}
        />
      </div>
      <div
        className={classNames(
          "z-[-1] absolute bg-contain bg-no-repeat md:rotate-0",
          "bg-[url(/assets/img/background/explore/wallet/grids-accent.png)]",
          "lg:h-[300.18px] lg:w-[479.8px] lg:-right-[15em] lg:-bottom-[7.75em]",
          "md:h-[281.94px] md:w-[450.65px] md:-right-[10.7em] md:-bottom-[5em]",
          "h-[183.04px] w-[292.57px] rotate-90 -right-[11em] -bottom-[6.5em]"
        )}
      />
      <div
        className={classNames(
          "hidden md:block absolute bg-contain bg-no-repeat mix-blend-screen bg-[url(/assets/img/background/explore/wallet/union.png)]",
          "lg:h-[45px] lg:w-[45px] lg:-right-[1.5em] lg:-bottom-[1.5em]",
          "md:h-8 md:w-8 -right-[1.2em] -bottom-[4.75em]"
        )}
      />
    </Container>
  );
}
