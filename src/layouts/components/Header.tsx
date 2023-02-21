import classNames from "classnames";
import { Container } from "@components/commons/Container";
import { DeFiChainLogo } from "@components/icons/DeFiChainLogo";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import {
  Button,
  GradientButton,
  LinkButton,
} from "@components/commons/Buttons";
import { useWhaleApiClient } from "../context/WhaleContext";
import { BuyDFIButton } from "./BuyDFIButton";
import { LanguageDropdown } from "./LanguageDropdown";

export function Header(): JSX.Element {
  const [menu, setMenu] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [dfiPrice, setDfiPrice] = useState<string>("0");
  const router = useRouter();
  const api = useWhaleApiClient();

  useEffect(() => {
    function routeChangeStart(): void {
      setMenu(false);
    }

    void api.prices.get("DFI", "USD").then((priceTicker) => {
      setDfiPrice(priceTicker.price.aggregated.amount);
    });

    router.events.on("routeChangeStart", routeChangeStart);
    return () => router.events.off("routeChangeStart", routeChangeStart);
  }, []);

  useEffect(() => {
    function scrollHandler(): void {
      window.pageYOffset > 30 ? setAtTop(false) : setAtTop(true);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      className={classNames(
        "bg-white z-50 sticky top-0 md:shadow-none md:static",
        { "shadow-lg": !atTop }
      )}
    >
      <div className="border-b border-gray-100">
        <Container className="py-4 lg:py-6">
          <div className="flex items-center justify-between">
            <div className="flex w-full">
              <Link
                href={{ pathname: "/" }}
                passHref
                className="flex items-center cursor-pointer hover:text-primary-500"
                data-testid="Header.SiteLogo"
              >
                <DeFiChainLogo className="w-32 lg:block lg:w-40 h-full" />
              </Link>
              <DesktopNavbar price={dfiPrice} />
            </div>
            <div className="lg:hidden">
              {menu ? (
                <MdClose
                  className="h-8 w-8 text-primary-500"
                  onClick={() => setMenu(false)}
                  data-testid="Header.CloseMenu"
                />
              ) : (
                <MdMenu
                  className="h-8 w-8 text-primary-500"
                  onClick={() => setMenu(true)}
                  data-testid="Header.OpenMenu"
                />
              )}
            </div>
          </div>
        </Container>
      </div>

      <div>{menu && <MobileMenu price={dfiPrice} />}</div>
    </header>
  );
}

function DesktopNavbar({ price }: { price: string }): JSX.Element {
  const { t } = useTranslation("layout");

  return (
    <div
      className="hidden lg:flex ml-2 lg:ml-8 md:w-full md:justify-end xl:justify-between items-center text-gray-600"
      data-testid="DesktopNavbar"
    >
      <div className="hidden lg:flex">
        <HeaderLink
          text={t("header.navbar.dfi")}
          pathname="/dfi"
          testId="Desktop.HeaderLink.DFI"
        />
        <HeaderLink
          text={t("header.navbar.dex")}
          pathname="/dex"
          testId="Desktop.HeaderLink.DEX"
        />
        <HeaderLink
          text={t("header.navbar.developers")}
          pathname="/developers"
          testId="Desktop.HeaderLink.Developers"
        />
        <HeaderLink
          text={t("header.navbar.ecosystem")}
          pathname="/ecosystem"
          testId="Desktop.HeaderLink.Ecosystem"
        />
        <HeaderLink
          text={t("header.navbar.learn")}
          pathname="/learn"
          testId="Desktop.HeaderLink.Learn"
        />
        <HeaderLink
          text={t("header.navbar.dfcblog")}
          pathname={t("header.navbar.bloglink")}
          testId="Desktop.HeaderLink.DFCBlog"
          targetBlank
        />
        <HeaderLink
          text="DeFi Scan"
          pathname="https://defiscan.live/"
          testId="Desktop.HeaderLink.DeFiScan"
          targetBlank
        />
      </div>
      <div className="hidden lg:flex items-center">
        <LanguageDropdown />
        <HeaderLink
          text={t("header.navbar.downloads")}
          pathname="/downloads"
          className="hidden lg:block"
          testId="Desktop.HeaderLink.Downloads"
        />

        <GradientButton
          buttonText={`${t("header.navbar.buy")} DFI $${Number(price).toFixed(
            2
          )}`}
        />
        <Button
          buttonText={`${t("header.navbar.buy")} DFI $${Number(price).toFixed(
            2
          )}`}
        />
        <LinkButton
          className="text-xl text-dark-00"
          diagonalArrow
          buttonText="test"
          href="https://google.com"
        />
      </div>
    </div>
  );
}

function MobileMenu({ price }: { price: string }): JSX.Element {
  const { t } = useTranslation("layout");

  return (
    <div
      className="lg:hidden absolute z-50 w-full bg-white shadow-lg"
      data-testid="MobileMenu"
    >
      <BuyDFIButton price={price} />
      <Container className="border-b border-gray-100 shadow-sm text-gray-600">
        <div className="flex flex-col">
          <HeaderLink
            className="flex justify-center border-b border-gray-100"
            text={t("header.navbar.dfi")}
            pathname="/dfi"
            testId="Mobile.HeaderLink.DFI"
          />
          <HeaderLink
            className="flex justify-center border-b border-gray-100"
            text={t("header.navbar.dex")}
            pathname="/dex"
            testId="Mobile.HeaderLink.DEX"
          />
          <HeaderLink
            className="flex justify-center border-b border-gray-100"
            text={t("header.navbar.developers")}
            pathname="/developers"
            testId="Mobile.HeaderLink.Developers"
          />
          <HeaderLink
            className="flex justify-center border-b border-gray-100"
            text={t("header.navbar.ecosystem")}
            pathname="/ecosystem"
            testId="Mobile.HeaderLink.Ecosystem"
          />
          <HeaderLink
            className="flex justify-center border-b border-gray-100"
            text={t("header.navbar.learn")}
            pathname="/learn"
            testId="Mobile.HeaderLink.Learn"
          />
          <HeaderLink
            className="flex justify-center border-b border-gray-100"
            text={t("header.navbar.dfcblog")}
            pathname={t("header.navbar.bloglink")}
            testId="Mobile.HeaderLink.DFCBlog"
            targetBlank
          />
          <HeaderLink
            className="flex justify-center border-b border-gray-100"
            text="DeFi Scan"
            pathname="https://defiscan.live/"
            testId="Mobile.HeaderLink.DeFiScan"
            targetBlank
          />
          <div className="flex w-full justify-center">
            <LanguageDropdown />
          </div>
        </div>
      </Container>
    </div>
  );
}

function HeaderLink(props: {
  text: string;
  pathname: string;
  className?: string;
  testId?: string;
  targetBlank?: boolean;
}): JSX.Element {
  const router = useRouter();
  return (
    <Link
      href={{ pathname: props.pathname }}
      passHref
      className={classNames(props.className, {
        "text-primary-500": router.pathname === props.pathname,
      })}
      data-testid={props.testId}
      target={
        props.targetBlank !== undefined && props.targetBlank ? "_blank" : ""
      }
    >
      <div
        className={classNames(
          "p-2 lg:p-0 lg:pb-0.5 ml-1 lg:ml-6 inline text-lg hover:text-primary-500 cursor-pointer",
          {
            "lg:border-b-2 border-primary-500":
              router.pathname === props.pathname,
          }
        )}
      >
        {props.text}
      </div>
    </Link>
  );
}
