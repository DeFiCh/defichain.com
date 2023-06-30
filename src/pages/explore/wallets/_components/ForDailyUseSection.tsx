import { SectionTitle } from "@components/commons/SectionTitle";
import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { DownloadCard } from "./DownloadCard";
import { CardLink, IconType } from "./CardLink";

export function ForDailyUseSection() {
  const { t } = useTranslation(["page-explore-wallets"]);
  return (
    <Container className="lg:mt-[129px] md:mt-[57px] mt-0">
      <article
        id="explore-wallets-daily-use-section"
        className="flex flex-col gap-y-5 lg:scroll-mt-[200px] scroll-mt-[150px]"
      >
        <div className="flex md:justify-center justify-start">
          <SectionTitle
            text={t("dailyUseSection.sectionTitle")}
            testID="for-daily-use"
          />
        </div>

        <h2
          className={classNames(
            "lg:text-[60px] lg:leading-[72px] md:text-[40px] md:leading-[44px] text-[32px] leading-[36px]",
            "text-dark-1000 md:text-center text-left"
          )}
          data-testid="for-daily-use-section-title"
        >
          {t("dailyUseSection.title")}
        </h2>
        <p
          className={classNames(
            "lg:text-xl text-base font-desc",
            "lg:tracking-normal tracking-[0.03em]",
            "text-dark-700 md:text-center text-left"
          )}
          data-testid="for-daily-use-section-subtitle"
        >
          {t("dailyUseSection.subtitle")}
        </p>
      </article>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-5 md:mt-16 mt-8">
        <DownloadCard
          title={t("dailyUseSection.entries.DFC.title")}
          desc={t("dailyUseSection.entries.DFC.desc")}
          imageSrc="/assets/img/explore/explore-wallet-dfi.png"
          testid="daily-use-section-dfc"
        >
          <div className="flex flex-row lg:gap-x-4 gap-x-3">
            <CardLink
              url="https://apps.apple.com/us/app/defichain-wallet/id1572472820"
              descText="Get It On"
              text={IconType.APPSTORE}
              testId="appstore-link-dfc"
            />
            <CardLink
              url="https://play.google.com/store/apps/details?id=com.defichain.app"
              descText="Get It On"
              text={IconType.GOOGLE_PLAY}
              testId="google-play-link-dfc"
            />
          </div>
        </DownloadCard>

        <DownloadCard
          title={t("dailyUseSection.entries.DFX.title")}
          desc={t("dailyUseSection.entries.DFX.desc")}
          imageSrc="/assets/img/explore/explore-wallet-dfx.png"
          testid="daily-use-section-dfx"
        >
          <div className="flex flex-row lg:gap-x-4 gap-x-3">
            <CardLink
              url="https://apps.apple.com/app/id1582633093"
              descText="Get It On"
              text={IconType.APPSTORE}
              testId="appstore-link-dfx"
            />
            <CardLink
              url="https://play.google.com/store/apps/details?id=com.defichain.app.dfx"
              descText="Get It On"
              text={IconType.GOOGLE_PLAY}
              testId="google-play-link-dfx"
            />
          </div>
        </DownloadCard>

        <DownloadCard
          title={t("dailyUseSection.entries.JLY.title")}
          desc={t("dailyUseSection.entries.JLY.desc")}
          imageSrc="/assets/img/explore/explore-wallet-jellywallet.png"
          testid="daily-use-section-jly"
        >
          <div className="flex items-center lg:space-x-4 space-x-3 text-lg font-medium">
            <CardLink
              url="https://chrome.google.com/webstore/detail/jellywallet/eegcfalgkkhehkhbjbggbhhlcnckadih"
              descText="Download For"
              text={IconType.CHROME}
              testId="chrome-link-jly"
            />
            <CardLink
              url="https://addons.mozilla.org/en-US/firefox/addon/jellywallet/"
              descText="Download For"
              text={IconType.FIREFOX}
              testId="firefox-link-jly"
            />
            <CardLink
              url="https://chrome.google.com/webstore/detail/jellywallet/eegcfalgkkhehkhbjbggbhhlcnckadih"
              descText="Download For"
              text={IconType.BRAVE}
              testId="brave-link-jly"
            />
          </div>
        </DownloadCard>
      </div>
    </Container>
  );
}
