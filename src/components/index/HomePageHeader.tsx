import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";

export function HomePageHeader(): JSX.Element {
  const { t } = useTranslation("page-index");

  return (
    <div
      className="flex flex-col items-center pb-24"
      style={{
        backgroundImage: "url('/assets/svg/hero/fortcanning.svg')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      <Container className="flex w-full min-h-[35rem] lg:min-h-[45rem] items-center justify-center">
        <div className="w-full md:w-3/4 -mt-48">
          <h1
            className="w-full text-3xl lg:text-6xl text-center mb-6 font-medium"
            data-testid="Header.title"
          >
            {t("Header.title")}
          </h1>
          <div className="mt-10">
            <div
              className="w-full text-lg md:text-xl text-center"
              data-testid="Header.desc.main"
            >
              {t("Header.desc")}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
