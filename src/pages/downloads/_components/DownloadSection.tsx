import { useTranslation } from "next-i18next";
import Image from "next/image";

export function DownloadSection(): JSX.Element {
  const { t } = useTranslation(["page-downloads"]);
  const downloadList: any[] = t("DownloadSection.entries", {
    returnObjects: true,
  });

  return (
    <>
      <h2
        className="text-xl lg:text-2xl font-medium mb-3 mt-10"
        data-testid="DownloadSection.Title"
      >
        {t("DownloadSection.title")}
      </h2>
      <p
        className="text-lg lg:text-xl mb-4"
        data-testid="DownloadSection.Subtitle"
      >
        {t("DownloadSection.subtitle")}
      </p>

      <div className="w-full flex flex-wrap -mx-1.5">
        {downloadList.map((download) => {
          return (
            <div
              className="p-1.5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col"
              key={download.name}
              data-testid="DownloadSection.Card"
            >
              <div className="p-6 flex flex-wrap bg-gray-50 rounded-lg justify-start flex flex-col flex-1">
                <div className="relative w-[170px] h-[40px]">
                  <Image
                    fill
                    style={{ objectFit: "contain", objectPosition: "left" }}
                    src={download.image.svg}
                    alt={download.name}
                    title={download.name}
                  />
                </div>
                <div className="font-medium text-xl mt-4 flex-1 text-gray-900">
                  {download.name}
                </div>
                <div className="text-lg text-gray-900">{download.desc}</div>
                <div className="space-x-3 mt-8">
                  <a href={download.image.svg} target="_blank" rel="noreferrer">
                    <span className="text-primary-500 cursor-pointer">SVG</span>
                  </a>
                  <a href={download.image.png} target="_blank" rel="noreferrer">
                    <span className="text-primary-500 cursor-pointer">PNG</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
