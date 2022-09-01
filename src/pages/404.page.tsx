import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageError } from "@components/commons/error/PageError";

export default function NotFound(): JSX.Element {
  return (
    <PageError
      title="Page Not Found - DeFiChain"
      errorDesc="404 - Page Not Found"
      text="BACK HOME"
    />
  );
}

export async function getStaticProps({
  locale,
}): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "layout"])),
    },
  };
}
