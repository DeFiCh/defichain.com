import { Container } from "@components/commons/Container";
import { DeFiChainLogo } from "@components/icons/DeFiChainLogo";
import Link from "next/link";
import { PropsWithChildren } from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Script from "next/script";

export function Footer(): JSX.Element {
  const { t } = useTranslation("layout");

  return (
    <footer className="mt-20 mb-12">
      <Container>
        <div className="flex flex-col">
          <Link
            href={{ pathname: "/" }}
            passHref
            className="flex items-center cursor-pointer hover:text-primary-500"
            data-testid="Footer.Logo"
          >
            <DeFiChainLogo className="w-40 lg:w-52 mb-2" />
          </Link>
          <h2
            className="text-xl lg:text-2xl font-semibold"
            data-testid="Footer.Heading"
          >
            {t("footer.title")}
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap space-y-8 xl:space-y-0">
          <div className="flex flex-wrap max-w-sm lg:max-w-max w-full lg:w-2/3 xl:w-1/2 space-y-8 lg:space-y-0">
            <div className="lg:w-1/2">
              <FooterSectionSitemap />
            </div>
            <div className="lg:w-1/2">
              <FooterSectionSocial />
            </div>
          </div>
          <div className="flex flex-wrap w-full lg:w-1/2 xl:w-1/3 mx-auto lg:mx-0 xl:ml-auto space-y-6">
            <div className="w-full">
              <Script src="https://files.coinmarketcap.com/static/widget/currency.js" />
              <div
                className="coinmarketcap-currency-widget"
                data-currencyid="5804"
                data-base="USD"
                data-ticker="true"
                data-rank="true"
                data-marketcap="true"
                data-volume="true"
                data-statsticker="false"
              />
            </div>
            <Script src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js" />
            <div className="w-full">
              {/* @ts-expect-error */}
              <coingecko-coin-ticker-widget
                coin-id="defichain"
                currency="usd"
                locale={t("footer.sitemap.language")}
                width="0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4 mt-16">
          <span className="font-semibold">&#169; DeFiChain</span>
          <FooterInternalLink
            text="Privacy Policy"
            pathname="/privacy-policy"
            testId="Footer.Privacy"
          />
        </div>
      </Container>
    </footer>
  );
}

function FooterSectionSitemap(): JSX.Element {
  const { t } = useTranslation("layout");

  return (
    <FooterSection heading="DeFiChain">
      <FooterInternalLink
        text={t("footer.sitemap.dfi")}
        pathname="/dfi"
        testId="FooterSectionSitemap.DFI"
      />
      <FooterInternalLink
        text={t("footer.sitemap.dex")}
        pathname="/dex"
        testId="FooterSectionSitemap.DEX"
      />
      <FooterInternalLink
        text={t("footer.sitemap.developers")}
        pathname="/developers"
        testId="FooterSectionSitemap.Developers"
      />
      <FooterInternalLink
        text={t("footer.sitemap.ecosystem")}
        pathname="/ecosystem"
        testId="FooterSectionSitemap.Ecosystem"
      />
      <FooterInternalLink
        text={t("footer.sitemap.downloads")}
        pathname="/downloads"
        testId="FooterSectionSitemap.Downloads"
      />
      <FooterInternalLink
        text={t("footer.sitemap.media")}
        pathname="/media"
        testId="FooterSectionSitemap.Media"
      />
      <FooterInternalLink
        text={t("footer.sitemap.learn")}
        pathname="/learn"
        testId="FooterSectionSitemap.Learn"
      />
      <FooterInternalLink
        text={t("footer.sitemap.security")}
        pathname="/security"
        testId="FooterSectionSitemap.Security"
      />
      <FooterInternalLink
        text={t("footer.sitemap.bugbounty")}
        pathname="/bug-bounty"
        testId="FooterSectionSitemap.BugBounty"
      />
      <FooterInternalLink
        text={t("footer.sitemap.whitepaper")}
        pathname="/white-paper"
        testId="FooterSectionSitemap.WhitePaper"
      />
      <FooterExternalLink
        text={t("footer.sitemap.dfcblog")}
        url="https://blog.defichain.com/"
        testId="FooterSectionSitemap.DFCBlog"
      />
      <FooterExternalLink
        text={t("footer.sitemap.newsletter")}
        url="https://bit.ly/3yQxtmW"
        testId="FooterSectionSitemap.Newsletter"
      />
    </FooterSection>
  );
}

function FooterSectionSocial(): JSX.Element {
  const { t } = useTranslation("layout");

  return (
    <FooterSection heading={t("footer.social.title")}>
      <FooterExternalLink
        text={t("footer.social.twitter")}
        url="https://twitter.com/defichain"
        testId="FooterExternalLink.Twitter"
      />
      <FooterExternalLink
        text={t("footer.social.youtube")}
        url="https://www.youtube.com/DeFiChain"
        testId="FooterExternalLink.Youtube"
      />
      <FooterExternalLink
        text={t("footer.social.reddit")}
        url="https://www.reddit.com/r/defiblockchain/"
        testId="FooterExternalLink.Reddit"
      />
      <FooterExternalLink
        text={t("footer.social.linkedin")}
        url="https://www.linkedin.com/company/defichain"
        testId="FooterExternalLink.Linkedin"
      />
      <FooterExternalLink
        text={t("footer.social.facebook")}
        url="https://www.facebook.com/defichain.official"
        testId="FooterExternalLink.Facebook"
      />
      <FooterExternalLink
        text={t("footer.social.discord")}
        url="https://discord.com/invite/py55egyaGy"
        testId="FooterExternalLink.Discord"
      />
      <FooterExternalLink
        text={t("footer.social.github")}
        url="https://github.com/DeFiCh/ain"
        testId="FooterExternalLink.Github"
      />
      <FooterExternalLink
        text={t("footer.social.coinMarketCap")}
        url="https://coinmarketcap.com/community/profile/DeFiChain"
        testId="FooterExternalLink.CoinMarketCap"
      />
      <FooterExternalLink
        text={`${t("footer.social.merch")} (US)`}
        url="https://defichain.myspreadshop.com/"
        testId="FooterExternalLink.MerchUS"
      />
      <FooterExternalLink
        text={`${t("footer.social.merch")} (UK)`}
        url="https://defichain.myspreadshop.co.uk/"
        testId="FooterExternalLink.MerchUK"
      />
      <FooterExternalLink
        text={`${t("footer.social.telegram")} (EN)`}
        url="https://t.me/defiblockchain"
        testId="FooterExternalLink.TelegramEN"
      />
      <FooterExternalLink
        text={`${t("footer.social.telegram")} (DE)`}
        url="https://t.me/defiblockchain_DE"
        testId="FooterExternalLink.TelegramDE"
      />
      <FooterExternalLink
        text={`${t("footer.social.telegram")} (IT)`}
        url="https://t.me/defiblockchain_IT"
        testId="FooterExternalLink.TelegramIT"
      />
      <FooterExternalLink
        text={`${t("footer.social.telegram")} (ES)`}
        url="https://t.me/official_defichain_es"
        testId="FooterExternalLink.TelegramES"
      />
      <FooterExternalLink
        text={`${t("footer.social.telegram")} (FR)`}
        url="https://t.me/defiblockchain_FR"
        testId="FooterExternalLink.TelegramFR"
      />
      <FooterExternalLink
        text={`${t("footer.social.telegram")} (ZH)`}
        url="https://t.me/defichain_ZH"
        testId="FooterExternalLink.TelegramZH"
      />
      <FooterExternalLink
        text={`${t("footer.social.telegram")} (TR)`}
        url="https://t.me/defiblockchain_TR"
        testId="FooterExternalLink.TelegramTR"
      />
      <FooterExternalLink
        text={`${t("footer.social.telegram")} (RU)`}
        url="https://t.me/defichain_ru"
        testId="FooterExternalLink.TelegramRU"
      />
      <FooterExternalLink
        text={`${t("footer.social.telegram")} (ID)`}
        url="https://t.me/defichain_indonesia"
        testId="FooterExternalLink.TelegramIndonesia"
      />
      <FooterExternalLink
        text={`${t("footer.social.telegram")} (PT)`}
        url="https://t.me/defiblockchain_PT"
        testId="FooterExternalLink.TelegramPT"
      />
    </FooterSection>
  );
}

function FooterSection({
  heading,
  children,
}: PropsWithChildren<{ heading: string }>): JSX.Element {
  return (
    <section>
      <h3 className="text-xl font-medium mb-2">{heading}</h3>
      <div className="flex flex-wrap">{children}</div>
    </section>
  );
}

function FooterExternalLink(props: {
  text: string;
  url: string;
  testId: string;
}): JSX.Element {
  return (
    <div className="space-x-2 py-1.5 w-1/2">
      <div className="text-lg text-gray-500 hover:text-primary-500 cursor-pointer">
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          data-testid={props.testId}
        >
          {props.text}
        </a>
      </div>
    </div>
  );
}

function FooterInternalLink(props: {
  text: string;
  pathname: string;
  testId: string;
  tiny?: boolean;
}): JSX.Element {
  return (
    <div className="space-x-2 py-1.5 w-1/2">
      <div
        className={classNames(
          "text-lg text-gray-500 hover:text-primary-500 cursor-pointer",
          { "text-sm": props.tiny }
        )}
      >
        <Link
          href={{ pathname: props.pathname }}
          passHref
          data-testid={props.testId}
        >
          {props.text}
        </Link>
      </div>
    </div>
  );
}
