import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageError } from "@components/commons/error/PageError";

export default function InternalError(): JSX.Element {
  return (
    <PageError
      title="Something Went Wrong - DeFiChain"
      subtitle="Error 500"
      errorDesc="500 - Internal Server Error"
      text="BACK HOME"
    />
  );
}

export async function getStaticProps({
  locale,
}): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en-US", [
        "common",
        "layout",
        "page-error",
      ])),
    },
  };
}
