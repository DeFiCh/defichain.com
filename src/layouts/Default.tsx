/* eslint-disable no-restricted-imports */
import Head from "next/head";
import { PropsWithChildren, useEffect, useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useDeviceDetect, ViewPort } from "@hooks/useDeviceDetect";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { WhaleProvider } from "./context/WhaleContext";

const title = "DeFiChain";
const description =
  "A blockchain dedicated to fast, intelligent and transparent decentralized financial services, accessible by everyone, and enabled on Bitcoin.";

/**
 * Default Layout with <Head> providing default Metadata for SEO
 */
export function Default(props: PropsWithChildren<any>): JSX.Element | null {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const isHome = router.pathname === "/";
  const bgPicture = isHome
    ? "bg-[url(/assets/img/background/background-320.png)] sm:bg-[url(/assets/img/background/background-768.png)] md:bg-[url(/assets/img/background/background-1024.png)] lg:bg-[url(/assets/img/background/background-1440.png)] 2xl:bg-[url(/assets/img/background/background-1920.png)]"
    : "";
  const device = useDeviceDetect();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Head>
        <meta charSet="UTF-8" />

        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
        <meta key="robots" name="robots" content="follow,index" />
        <meta
          key="viewport"
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1"
        />
        <meta
          key="apple-mobile-web-app-capable"
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        {/* Open Graph */}
        <meta property="og:title" name="og:title" content={title} />
        <meta property="og:site_name" name="og:site_name" content={title} />
        <meta property="og:type" name="og:type" content="website" />
        <meta
          property="og:url"
          name="og:url"
          content="https://defichain.com/"
        />
        <meta
          property="og:description"
          name="og:description"
          content={description}
        />
        <meta property="og:locale" name="og:locale" content={router.locale} />
        <meta
          property="og:image"
          name="og:image"
          content="https://defichain.com/img/og/share.png"
        />
        <meta
          property="og:image:type"
          name="og:image:type"
          content="image/png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@defichain" />
        <meta name="twitter:creator" content="@defichain" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://defichain.com/img/og/share.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
      </Head>

      {mounted && (
        <WhaleProvider>
          <div className="bg-dark-00 relative z-0">
            <Header />
            <div
              className={classNames(
                // responsive mode not counted as DESKTOP
                device === ViewPort.DESKTOP
                  ? "overflow-x-clip"
                  : "overflow-x-hidden"
              )}
            >
              <main className="flex-grow text-dark-1000">{props.children}</main>
              <div
                className={classNames(
                  "absolute z-[-1] bg-top bg-no-repeat inset-0",
                  bgPicture
                )}
              />
              <Footer />
            </div>
          </div>
        </WhaleProvider>
      )}
    </div>
  );
}
