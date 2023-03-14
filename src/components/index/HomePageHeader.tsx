import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";
import { Video } from "@components/commons/Video";
import classNames from "classnames";

export function HomePageHeader(): JSX.Element {
  const { t } = useTranslation("page-index");
  const separatedTitle = t("Header.title").split(" ");
  const firstWord = separatedTitle[0];
  separatedTitle.shift();

  return (
    <div className="flex flex-col items-center md:mt-0">
      <Container
        className={classNames(
          "relative z-0 flex flex-col-reverse md:flex-row items-start md:justify-between",
          "pr-6 md:pr-0 lg:pr-0 xl:pr-[59px] 2xl:pr-[39px]",
          "2xl:max-w-[1920px] max-w-full "
        )}
      >
        <div className="mt-[-41px] md:w-[316px] md:mt-[92px] lg:max-w-none lg:w-[479px] xl:mt-[120px] 2xl:mt-[148px]">
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
              className="w-full tracking-[0.03em] text-dark-700 font-desc lg:tracking-normal lg:text-xl "
              data-testid="Header.desc.main"
            >
              {t("Header.desc")}
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "w-full mt-[-31px] md:mt-[-49px] lg:mt-[-49px] xl:mt-[-57px] 2xl:mt-[-80px]",
            "min-w-[364px] md:min-w-[382px] md:max-w-[584px] max-w-[379px] lg:max-w-[722px] xl:max-w-[758px] 2xl:max-w-[929px]",
            "md:ml-0 ml-auto mr-[-16px] md:mr-[-32.18px]"
          )}
        >
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
