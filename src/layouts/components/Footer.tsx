import DeFiChainLogo from "@components/icons/DeFiChainLogo";
import Link from "next/link";
import { Container } from "@components/commons/Container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LanguageDropdownV2 from "./LanguageDropdownV2";
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
      <Container className="relative z-10 py-10 px-6">
        <div className="py-10 h-full w-full footer-background rounded-[30px] px-[24px] lg:px-[96px]">
          <div className="flex-col md:hidden pt-10">
            <Link
              href={{ pathname: "/" }}
              passHref
              className="flex items-center cursor-pointer hover:accent-dfc-gradient-text"
              data-testid="Footer.Logo"
            >
              <DeFiChainLogo className="w-40 lg:w-52" />
            </Link>
            <SocialsRow
              customStyle="text-dark-500 gap-4 flex flex-row pt-6 md:hidden"
              language={language}
            />
          </div>
          <div className="text-sm mt-[24px] md:flex md:flex-row md:justify-between md:pb-[86px]">
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
            <FooterColumn
              category={MenuItems[3].category}
              childLinks={MenuItems[3].childLink}
            />
          </div>
          {/* Bottom section of footer */}
          <div className="md:flex md:flex-row md:space-x-2 text-dark-500 md:items-center md:justify-between">
            <DeFiChainLogo className="w-[156.07px] hidden md:block" />
            <div className="flex flex-col-reverse md:flex-row">
              <div className="flex flex-row items-center">
                <FooterInternalBottomLink
                  text="Privacy Policy"
                  pathname="/privacy-policy"
                  testId="Footer.Privacy"
                />
                <span className="px-2">•</span>
                <FooterInternalBottomLink
                  text="Terms of use"
                  pathname="/privacy-policy"
                  testId="Footer.Privacy"
                />
              </div>
              <div className="pt-[54px] pb-[18px] md:pt-0 md:pb-0 md:pl-[31px]">
                <LanguageDropdownV2 />
              </div>
            </div>
            {/* SOCIALS */}
            <SocialsRow
              customStyle="md:grid grid-flow-col hidden absolute right-[40px] bottom-[178px] md:gap-2 lg:gap-5 lg:right-[106px]"
              language={language}
            />
          </div>
        </div>
      </Container>
      <div className="absolute bottom-[150px] left-0 bg-contain bg-no-repeat bg-clip-border bg-origin-padding mix-blend-screen h-full w-full bg-[url('/assets/img/footer/transparent_coin_2.png')]" />
      <div className="absolute bottom-[65px] right-0 bg-contain bg-no-repeat mix-blend-screen bg-right h-[25%] w-[25%] bg-[url('/assets/img/footer/arrow_1.png')]" />
    </footer>
  );
}
