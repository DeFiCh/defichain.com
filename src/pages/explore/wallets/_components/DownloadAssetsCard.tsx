import { PropsWithChildren } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";

interface DynamicDownloadCardProps {
  testid: string;
  title: string;
  desc: string;
  customCardStyle?: string;
  svgAssetPath: string;
  pngAssetPath: string;
}

export function DownloadAssetsCard(
  props: PropsWithChildren<DynamicDownloadCardProps>,
): JSX.Element {
  const {
    title,
    desc,
    svgAssetPath,
    pngAssetPath,
    testid,
    customCardStyle,
    children,
  } = props;
  return (
    <div className="hover:accent-gradient-1 p-[0.5px] bg-dark-200 rounded-[15px]">
      <div
        data-testid={testid}
        className={`${customCardStyle} border-[0.5px] border-dark-300 rounded-[15px] bg-dark-00 lg:p-6 lg:py-8
      w-full flex lg:flex-row flex-col items-center gap-6`}
      >
        <div className="overflow-hidden py-[35px] w-full lg:w-fit rounded-t-[15px] bg-light-900 lg:bg-transparent">
          {/* Image */}
          <div className="grow flex lg:w-[203px] items-center justify-center w-full">
            {children}
          </div>
        </div>
        <div className="flex flex-col justify-between	items-start	self-stretch pb-6 px-6 gap-y-4 lg:p-0">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-base leading-5 lg:text-lg font-bold lg:leading-6">
              {title}
            </h3>
            <div className="text-sm lg:text-base text-dark-500 font-desc overflow-hidden">
              {desc}
            </div>
          </div>
          <div className="flex flex-row gap-x-6">
            <Link
              href={svgAssetPath ?? ""}
              download
              className="flex flex-row items-center gap-x-1"
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
            >
              <MdOutlineFileDownload />
              <span className="text-sm">SVG</span>
            </Link>
            <Link
              href={pngAssetPath ?? ""}
              download
              className="flex flex-row items-center gap-x-1"
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
            >
              <MdOutlineFileDownload />
              <span className="text-sm">PNG</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
