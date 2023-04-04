import DeFiChainLogo from "@components/icons/DeFiChainLogo";
import { Container } from "@components/commons/Container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { LanguageDropdownV2 } from "./LanguageDropdownV2";
import FooterInternalBottomLink from "./FooterInternalBottomLink";
import FooterColumn from "./FooterColumn";
import SocialsRow from "./SocialsRow";

export const MenuItems = [
  {
    category: "EXPLORE",
    childLink: [
      {
        label: "$DFI",
        pathname: "/explore/dfi",
        testId: "DFI",
        altLabel: "dfi",
        isExternaLink: false,
      },
      {
        label: "Decentralized Exchange",
        pathname: "/explore/dex",
        testId: "decentralizedExchange",
        altLabel: "decentralizedExchange",
        isExternaLink: false,
      },
      {
        label: "Wallets",
        pathname: "/explore/wallets",
        testId: "wallets",
        altLabel: "wallets",
        isExternaLink: false,
      },
      {
        label: "Masternodes",
        pathname: "/explore/masternodes",
        testId: "masternodes",
        altLabel: "masternodes",
        isExternaLink: false,
      },
    ],
  },
  {
    category: "RESOURCES",
    childLink: [
      {
        label: "DeFiScan",
        pathname: "/defiscan",
        testId: "defiscan",
        altLabel: "defiscan",
        isExternaLink: true,
        url: "https://defiscan.live/",
        hasUpArrowIcon: true,
      },
      {
        label: "White paper",
        pathname: "/white-paper",
        testId: "defichainwhitepaper",
        altLabel: "defichainwhitepaper",
      },
    ],
  },
  // {
  //   category: "ECOSYSTEM",
  //   childLink: [
  //     {
  //       label: "DeFiChain Apps",
  //       pathname: "/defichainapps",
  //       testId: "defichainapps",
  //       altLabel: "defichainapps",
  //       isExternaLink: false,
  //     },
  //     {
  //       label: "DeFi Meta Chain",
  //       pathname: "/defimetachain",
  //       testId: "defimetachain",
  //       altLabel: "defimetachain",
  //       isExternaLink: true,
  //       url: "https://meta.defichain.com/",
  //     },
  //     {
  //       label: "DeFiScan",
  //       pathname: "/defiscan",
  //       testId: "defiscan",
  //       altLabel: "defiscan",
  //       isExternaLink: true,
  //       url: "https://defiscan.live/",
  //     },
  //     {
  //       label: "Governance",
  //       pathname: "/governance",
  //       testId: "governance",
  //       altLabel: "governance",
  //       isExternaLink: true,
  //       url: "https://defiscan.live/governance",
  //     },
  //     {
  //       label: "Bug Bounty",
  //       pathname: "/bugbounty",
  //       testId: "bugbounty",
  //       altLabel: "bugbounty",
  //       isExternaLink: false,
  //     },
  //     {
  //       label: "$100M Accelerator Program",
  //       pathname: "/100macceleratorprogram",
  //       testId: "100macceleratorprogram",
  //       altLabel: "100macceleratorprogram",
  //       isExternaLink: false,
  //     },
  //   ],
  // },
  // {
  //   category: "BUILD",
  //   childLink: [
  //     {
  //       label: "Jellyfish SDK",
  //       pathname: "/jellyfishsdk",
  //       testId: "jellyfishsdk",
  //       altLabel: "jellyfishsdk",
  //       isExternaLink: true,
  //       url: "https://jellyfishsdk.com/",
  //     },
  //     {
  //       label: "DeFiChain White Paper",
  //       pathname: "/defichainwhitepaper",
  //       testId: "defichainwhitepaper",
  //       altLabel: "defichainwhitepaper",
  //       isExternaLink: false,
  //     },
  //     {
  //       label: "GitHub",
  //       pathname: "/github",
  //       testId: "github",
  //       altLabel: "github",
  //       isExternaLink: true,
  //       url: "https://github.com/DeFiCh/ain",
  //       hasUpArrowIcon: true,
  //     },
  //     {
  //       label: "Developer Resource",
  //       pathname: "/developerResource",
  //       testId: "developerResource",
  //       altLabel: "developerResource",
  //       isExternaLink: false,
  //     },
  //     {
  //       label: "Media Assets",
  //       pathname: "/mediaAssets",
  //       testId: "mediaAssets",
  //       altLabel: "mediaAssets",
  //       isExternaLink: false,
  //     },
  //     {
  //       label: "Security",
  //       pathname: "/security",
  //       testId: "security",
  //       altLabel: "security",
  //       isExternaLink: false,
  //     },
  //   ],
  // },
  {
    category: "COMMUNITY",
    childLink: [
      {
        label: "DeFiChain Blog",
        pathname: "/blog",
        testId: "blog",
        altLabel: "blog",
        isExternaLink: true,
        url: "https://blog.defichain.com/",
        hasUpArrowIcon: true,
      },
      // {
      //   label: "Newsletter",
      //   pathname: "/newsletter",
      //   testId: "newsletter",
      //   altLabel: "newsletter",
      //   isExternaLink: true,
      //   url: "https://bit.ly/3yQxtmW",
      // },
    ],
  },
];

export default function Footer(): JSX.Element {
  const router = useRouter();
  const { t } = useTranslation("layout");
  // default set language to be english to be directed to international telegram link
  const [language, setLanguage] = useState(router.locale ?? "");

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    switch (router.locale) {
      case "de":
        return setLanguage("_DE");
      case "fr":
        return setLanguage("_FR");
      default:
        setLanguage("");
    }
  }, [router]);
  return (
    <footer className="relative bg-dark-00">
      <Container className="relative z-20 mb-[41px] mx-0 md:mb-[64px] lg:mb-[82px]">
        <div className="py-8 h-full footer-background rounded-[30px] px-6 md:py-10 md:px-14 lg:px-24">
          <div className="text-sm md:grid md:grid-cols-2 md:grid-flow-row md:gap-[38px] lg:flex lg:flex-row md:justify-between md:pb-12">
            {/* EXPLORE */}
            <FooterColumn
              category={MenuItems[0].category}
              childLinks={MenuItems[0].childLink}
              customStyle="pt-0"
            />
            {/* ECOSYSTEM */}
            {/* <FooterColumn
              category={MenuItems[1].category}
              childLinks={MenuItems[1].childLink}
              customStyle="sm:pt-[54px]"
            />
            {/* BUILD */}
            {/* <FooterColumn
              category={MenuItems[2].category}
              childLinks={MenuItems[2].childLink}
              customStyle="sm:pt-[54px]"
            /> */}
            {/* RESOURCES */}
            <FooterColumn
              category={MenuItems[1].category}
              childLinks={MenuItems[1].childLink}
              customStyle="pt-[38px]"
            />
            {/* COMMUNITY */}
            <div className="flex flex-col md:flex-row md:items-end lg:flex-col">
              <FooterColumn
                category={MenuItems[2].category}
                childLinks={MenuItems[2].childLink}
                customStyle="pt-[38px]"
              />
              <div className="block md:hidden lg:block lg:w-full">
                <SocialsRow
                  customStyle="text-dark-500 flex flex-row gap-5 mt-[22px] mb-8 md:pb-0 md:m-0 md:items-end lg:mt-[26px]"
                  language={language}
                />
              </div>
            </div>
            <div className="hidden md:flex md:items-end lg:hidden">
              <SocialsRow
                customStyle="text-dark-500 flex flex-row gap-5 mt-[22px] mb-8 md:pb-0 md:m-0 md:items-end lg:mt-[26px]"
                language={language}
              />
            </div>
          </div>
          {/* Bottom section of footer */}
          {/* Mobile View */}
          <div className="block md:hidden">
            <div className="text-dark-500">
              <div className="flex flex-col items-start">
                <div className="mb-4" data-testid="Footer.Mobile.Logo">
                  <DeFiChainLogo className="w-[176.67px]" />
                </div>
                <div className="flex items-center space-x-4">
                  <LanguageDropdownV2 />
                  <FooterInternalBottomLink
                    text={t("footer.bottomlink.privacy")}
                    pathname="/privacy-policy"
                    testId="Footer.Mobile.Privacy"
                  />
                  {/* <span className="px-2">•</span>
                <FooterInternalBottomLink
                  text={t("footer.bottomlink.terms")}
                  pathname="/terms-of-use"
                  testId="Footer.Mobile.Terms"
                /> */}
                </div>
              </div>
            </div>
          </div>
          {/* Web View */}
          <div className="md:block hidden">
            <div className="md:grid md:grid-cols-2 md:grid-flow-row md:gap-[38px] lg:flex lg:flex-row md:justify-between">
              <div data-testid="Footer.Web.Logo">
                <DeFiChainLogo className="w-[176.67px]" />
              </div>
              <div className="flex flex-row items-center">
                <div className="flex flex-row items-center lg:pl-3">
                  <FooterInternalBottomLink
                    text={t("footer.bottomlink.privacy")}
                    pathname="/privacy-policy"
                    testId="Footer.Web.Privacy"
                  />
                  {/* <span className="px-2 text-dark-500">•</span>
                  <FooterInternalBottomLink
                    text={t("footer.bottomlink.terms")}
                    pathname="/terms-of-use"
                    testId="Footer.Web.Terms"
                  /> */}
                </div>
                <div className="flex pl-6">
                  <LanguageDropdownV2 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "absolute z-[-1] bg-contain bg-no-repeat bg-origin-padding h-full w-full bg-[url('/assets/img/footer/transparent_coin_2.png')] top-[-60px] -left-40 md:-top-10 lg:left-[-200px] lg:top-[-50px]",
            "lg:w-full lg:h-[400px] md:w-[280px] md:h-[280px] md:left-[-50px] lg:left-[-130px] w-[208px] h-[208px]"
          )}
        />
        <div
          className={classNames(
            "absolute z-[-1] bottom-0 right-[-200px] bg-contain bg-no-repeat bg-bottom md:bg-right bg-[url('/assets/img/footer/arrow_1.png')] md:-right-20",
            "w-full md:w-[580px] h-[210px] lg:h-[300px] lg:bottom-0 lg:-right-40"
          )}
        />
      </Container>
    </footer>
  );
}
