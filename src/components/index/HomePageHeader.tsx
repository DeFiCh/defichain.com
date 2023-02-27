import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";
import { Video } from "@components/commons/Video";

export function HomePageHeader(): JSX.Element {
  const { t } = useTranslation("page-index");
  const separatedTitle = t("Header.title").split(" ");
  const firstWord = separatedTitle[0];
  separatedTitle.shift();

  return (
    <div className="flex flex-col items-center pb-24 md:mt-0">
      <Container className="flex flex-col-reverse md:flex-row md:justify-between px-6 items-start md:pl-10 md:pr-0 lg:pl-12 lg:pr-0 xl:pl-[120px] xl:pr-[59px] 2xl:pl-[300px] 2xl:pr-[39px] max-w-full">
        <div className="md:max-w-[403px] md:mt-[92px] lg:max-w-none lg:w-[479px] xl:mt-[120px] 2xl:mt-[148px]">
          <h1
            className="w-full text-5xl leading-[52px] lg:text-[80px] lg:leading-[84px]"
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
        <div className="w-full min-w-[364px] max-w-[379px] mt-[-32px] mr-[-41px] md:ml-0 md:min-w-[382px] md:max-w-[584px] md:mt-[-28px] lg:max-w-[722px] lg:mt-[-49px] xl:max-w-[758px] xl:mt-[-57px] 2xl:max-w-[929px] 2xl:mt-[-80px] ml-auto lg:ml-auto">
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
