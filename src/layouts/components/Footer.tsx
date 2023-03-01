import DeFiChainLogo from "@components/icons/DeFiChainLogo";
import { Container } from "@components/commons/Container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
        pathname: "/DFI",
        testId: "dfi",
        altLabel: "dfi",
        isExternaLink: false,
      },
      {
        label: "Invest, Trade and Earn",
        pathname: "/investtradeearn",
        testId: "investTradeNEarn",
        altLabel: "investTradeNEarn",
        isExternaLink: false,
      },
      {
        label: "Decentralized Exchange",
        pathname: "/decentralizedExchange",
        testId: "decentralizedExchange",
        altLabel: "decentralizedExchange",
        isExternaLink: false,
      },
      {
        label: "Wallets",
        pathname: "/wallets",
        testId: "wallets",
        altLabel: "wallets",
        isExternaLink: false,
      },
      {
        label: "Masternodes",
        pathname: "/masternodes",
        testId: "masternodes",
        altLabel: "masternodes",
        isExternaLink: false,
      },
    ],
  },
  {
    category: "ECOSYSTEM",
    childLink: [
      {
        label: "DeFiChain Apps",
        pathname: "/defichainapps",
        testId: "defichainapps",
        altLabel: "defichainapps",
        isExternaLink: false,
      },
      {
        label: "DeFi Meta Chain",
        pathname: "/defimetachain",
        testId: "defimetachain",
        altLabel: "defimetachain",
        isExternaLink: false,
      },
      {
        label: "DeFiScan",
        pathname: "/defiscan",
        testId: "defiscan",
        altLabel: "defiscan",
        isExternaLink: false,
      },
      {
        label: "Governance",
        pathname: "/governance",
        testId: "governance",
        altLabel: "governance",
        isExternaLink: false,
      },
      {
        label: "Bug Bounty",
        pathname: "/bugbounty",
        testId: "bugbounty",
        altLabel: "bugbounty",
        isExternaLink: false,
      },
      {
        label: "$100M Accelerator Program",
        pathname: "/100macceleratorprogram",
        testId: "100macceleratorprogram",
        altLabel: "100macceleratorprogram",
        isExternaLink: false,
      },
    ],
  },
  {
    category: "BUILD",
    childLink: [
      {
        label: "Jellyfish SDK",
        pathname: "/jellyfishsdk",
        testId: "jellyfishsdk",
        altLabel: "jellyfishsdk",
        isExternaLink: false,
      },
      {
        label: "DeFiChain White Paper",
        pathname: "/defichainwhitepaper",
        testId: "defichainwhitepaper",
        altLabel: "defichainwhitepaper",
        isExternaLink: false,
      },
      {
        label: "GitHub",
        pathname: "/github",
        testId: "github",
        altLabel: "github",
        isExternaLink: true,
        url: "https://github.com/DeFiCh/ain",
        hasUpArrowIcon: true,
      },
      {
        label: "Developer Resource",
        pathname: "/developerResource",
        testId: "developerResource",
        altLabel: "developerResource",
        isExternaLink: false,
      },
      {
        label: "Media Assets",
        pathname: "/mediaAssets",
        testId: "mediaAssets",
        altLabel: "mediaAssets",
        isExternaLink: false,
      },
      {
        label: "Security",
        pathname: "/security",
        testId: "security",
        altLabel: "security",
        isExternaLink: false,
      },
    ],
  },
  {
    category: "COMMUNITY",
    childLink: [
      {
        label: "Blog",
        pathname: "/blog",
        testId: "blog",
        altLabel: "blog",
        isExternaLink: false,
      },
      {
        label: "Newsletter",
        pathname: "/newsletter",
        testId: "newsletter",
        altLabel: "newsletter",
        isExternaLink: false,
      },
    ],
  },
];

export default function Footer(): JSX.Element {
  const router = useRouter();

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
      <Container className="relative z-10 py-10">
        <div className="py-10 h-full w-full footer-background rounded-[30px] px-6 md:px-14 lg:px-24">
          <div className="text-sm md:grid md:grid-cols-2 md:grid-flow-row md:gap-[62px] lg:flex lg:flex-row md:justify-between md:pb-[86px]">
            {/* EXPLORE */}
            <FooterColumn
              category={MenuItems[0].category}
              childLinks={MenuItems[0].childLink}
            />
            {/* ECOSYSTEM */}
            <FooterColumn
              category={MenuItems[1].category}
              childLinks={MenuItems[1].childLink}
            />
            {/* BUILD */}
            <FooterColumn
              category={MenuItems[2].category}
              childLinks={MenuItems[2].childLink}
            />
            {/* COMMUNITY */}
            <div className="justify-between flex flex-col mt-[54px]">
              <FooterColumn
                category={MenuItems[3].category}
                childLinks={MenuItems[3].childLink}
              />
              <SocialsRow
                customStyle="text-dark-500 flex flex-row gap-5 sm:pb-[54px] sm:pt-[38px] md:pb-0"
                language={language}
              />
            </div>
          </div>
          {/* Bottom section of footer */}
          {/* Mobile View */}
          <div className="sm:block md:hidden">
            <div className="text-dark-500 items-center sm:items-center sm:grid sm:grid-rows-2 sm:grid-flow-col sm:gap-[9px]">
              <DeFiChainLogo className="w-[128px]" />
              <div className="flex flex-row items-center">
                <FooterInternalBottomLink
                  text="Privacy Policy"
                  pathname="/privacy-policy"
                  testId="Footer.Privacy"
                />
                <span className="px-2">•</span>
                <FooterInternalBottomLink
                  text="Terms of use"
                  pathname="/terms-of-use"
                  testId="Footer.Privacy"
                />
              </div>
              <div className="flex justify-end">
                <LanguageDropdownV2 />
              </div>
            </div>
          </div>
          {/* Web View */}
          <div className="md:block hidden">
            <div className="flex flex-row justify-between items-center">
              <DeFiChainLogo className="w-[176.67px]" />
              <div className="flex flex-row">
                <div className="flex flex-row items-center">
                  <FooterInternalBottomLink
                    text="Privacy Policy"
                    pathname="/privacy-policy"
                    testId="Footer.Privacy"
                  />
                  <span className="px-2 text-dark-500">•</span>
                  <FooterInternalBottomLink
                    text="Terms of use"
                    pathname="/terms-of-use"
                    testId="Footer.Privacy"
                  />
                </div>
                <div className="flex pl-[23px]">
                  <LanguageDropdownV2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-20 md:bottom-[150px] left-0 bg-contain bg-no-repeat bg-clip-border bg-origin-padding mix-blend-screen w-[150px] h-full md:w-2/5 bg-[url('/assets/img/footer/transparent_coin_2.png')]" />
      <div className="absolute bottom-0 md:bottom-[65px] right-0 bg-contain bg-no-repeat mix-blend-screen bg-bottom md:bg-right h-1/4 w-1/4 bg-[url('/assets/img/footer/arrow_1.png')]" />
    </footer>
  );
}
