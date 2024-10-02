import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
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
      {/* Meta Pixel Code */}
      <Script id="facebook-pixel">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '222017136964976');
        fbq('track', 'PageView');
      `}
      </Script>
      <noscript>
        <img
          alt="facebook-pixel"
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=222017136964976&ev=PageView&noscript=1"
        />
      </noscript>
      {/* End Meta Pixel Code */}

      <Component {...pageProps} />
    </Default>
  );
}

export default MyApp;
