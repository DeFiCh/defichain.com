import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageError } from "@components/commons/error/PageError";

export default function NotFound(): JSX.Element {
  const { t } = useTranslation("layout");
  return (
    <PageError
      title={t("error.title")}
      subtitle={t("error.subtitle")}
      errorDesc={t("error.errorDesc")}
      text={t("error.text")}
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
