import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageError } from "@components/commons/error/PageError";

export default function NotFound(): JSX.Element {
  return (
    <PageError
      title="Page Not Found"
      subtitle="Error 404"
      errorDesc="The page you’re looking may have been moved, deleted or possibly never existed."
      text="Back to homepage"
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
