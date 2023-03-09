import { IoChevronDown } from "react-icons/io5";
import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";

export function StartExploring() {
  const { t } = useTranslation("page-index");
  return (
    <Container className="justify-center md:mt-0 mt-9 hidden md:flex">
      <a href="#statistics_display">
        <button
          type="button"
          className="group flex flex-col items-center gap-y-[17px]"
        >
          <div className="text-sm text-dark-700 group-hover:text-brand-100">
            {t("HeroBannerSection.Start exploring")}
          </div>
          <IoChevronDown className="group-hover:text-brand-100" />
        </button>
      </a>
    </Container>
  );
}
