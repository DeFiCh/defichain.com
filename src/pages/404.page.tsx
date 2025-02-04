import { PageError } from "@components/commons/error/PageError";
import { useTranslation } from "../hooks/useTranslation";

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
