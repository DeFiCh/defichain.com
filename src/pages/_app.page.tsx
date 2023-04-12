import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Default } from "../layouts/Default";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Default {...pageProps}>
      <NextNProgress
        color="#FF66CF"
        height={4}
        options={{ showSpinner: false }}
      />
      <Script
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            // @ts-ignore
            // eslint-disable-next-line prefer-rest-params
            window.dataLayer.push(arguments);
          }
          // @ts-ignore
          gtag("js", new Date());
          // @ts-ignore
          gtag("config", "G-HP6YZTCLBS");
        }}
        src="https://www.googletagmanager.com/gtag/js?id=G-HP6YZTCLBS"
      />
      <Component {...pageProps} />
    </Default>
  );
}

export default appWithTranslation(MyApp);
