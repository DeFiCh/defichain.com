import { Container } from "@components/commons/Container";
import { Video } from "@components/commons/Video";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useTranslation } from "../../hooks/useTranslation";

export function HomePageHeader(): JSX.Element {
  const { t } = useTranslation("page-index");
  const router = useRouter();

  const separatedTitle = t("Header.title").split(" ");

  function displayColorToLanguage(index: number): boolean {
    if (router.locale === "de") {
      return index === 1;
    }
    if (router.locale === "en-US") {
      return index === 0;
    }
    return false;
  }

  return (
    <div className="flex flex-col items-center md:mt-0 relative z-[-1]">
      <Container
        className={classNames(
          "relative z-0 flex flex-col-reverse md:flex-row items-start md:justify-between",
          "pr-6 md:pr-0 lg:pr-0 xl:pr-[59px] 2xl:pr-[39px]",
          "2xl:max-w-[1920px] max-w-full",
        )}
      >
        <div className="mt-[-41px] md:w-[316px] md:mt-[92px] lg:max-w-none lg:w-[479px] xl:mt-[120px] 2xl:mt-[148px] relative z-[1]">
          <h1
            className="w-full text-5xl leading-[52px] lg:text-[80px] lg:leading-[84px]"
            data-testid="header-title"
          >
            {separatedTitle.map((word, index) =>
              displayColorToLanguage(index) ? (
                <span key={`${word}`}>
                  <span
                    className="text-brand-100"
                    key={`${word}`}
                  >{`${word} `}</span>
                </span>
              ) : (
                <span key={`${word}`}>{`${word} `}</span>
              ),
            )}
          </h1>

          <div className="mt-5">
            <div
              className="w-full tracking-[0.03em] text-dark-700 font-desc lg:tracking-normal lg:text-xl "
              data-testid="header-desc"
            >
              {t("Header.desc")}
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "w-full mt-[-31px] md:mt-[-49px] lg:mt-[-49px] xl:mt-[-57px] 2xl:mt-[-80px]",
            "min-w-[364px] md:min-w-[382px] md:max-w-[584px] max-w-[379px] lg:max-w-[722px] xl:max-w-[758px] 2xl:max-w-[929px]",
            "md:ml-0 ml-auto mr-[-16px] md:mr-[-32.18px]",
          )}
        >
          <Video
            poster="/assets/img/index/dficoin.png"
            src="/assets/svg/hero/dfi-coin-video.mp4"
            width={595}
            height={595}
            loop
          />
        </div>
      </Container>
    </div>
  );
}
