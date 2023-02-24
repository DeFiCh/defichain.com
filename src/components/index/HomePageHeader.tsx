import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";
import { Video } from "@components/commons/Video";

export function HomePageHeader(): JSX.Element {
  const { t } = useTranslation("page-index");
  const separatedTitle = t("Header.title").split(" ");
  const firstWord = separatedTitle[0];
  separatedTitle.shift();

  return (
    <div className="flex flex-col items-center pb-24 mt-[15.87px] lg:mt-9">
      <Container className="flex flex-col-reverse lg:flex-row lg:justify-between px-6 items-start lg:pl-[120px] lg:pr-[77.24px] max-w-full">
        <div className="lg:w-[479px] lg:mt-16 mt-[25.44px]">
          <h1
            className="w-full text-4xl lg:text-[80px] lg:leading-[84px]"
            data-testid="Header.title"
          >
            <span className="text-brand-100">
              {firstWord} <br />
            </span>
            {separatedTitle.join(" ")}
          </h1>
          <div className="mt-5">
            <div
              className="w-full tracking-[0.03em] lg:tracking-normal lg:text-xl text-dark-700 font-desc"
              data-testid="Header.desc.main"
            >
              {t("Header.desc")}
            </div>
          </div>
        </div>
        <div className="w-[252.82px] lg:w-[595px] ml-[83px] lg:ml-auto">
          <Video
            src="/assets/svg/hero/dfi-coin-video.mp4"
            width={595}
            height={595}
          />
        </div>
      </Container>
    </div>
  );
}
