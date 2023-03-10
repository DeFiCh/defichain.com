import { PropsWithChildren } from "react";
import Image from "next/image";
import classNames from "classnames";

export function DownloadCard(
  props: PropsWithChildren<{
    testid: string;
    title: string;
    desc: string;
    imageSrc: string | JSX.Element;
    imgClassName?: string;
  }>
): JSX.Element {
  return (
    <div
      className="p-[0.5px] rounded-[15px] w-full flex flex-col bg-dark-200 hover:accent-gradient-1 hover:transition-all hover:duration-300"
      data-testid={props.testid}
    >
      <div className="rounded-[15px] bg-dark-00 bg-opacity-90 p-8 flex flex-col flex-1 gap-y-6">
        {typeof props.imageSrc === "string" ? (
          <div className="w-full overflow-hidden">
            <Image
              unoptimized
              src={props.imageSrc}
              width={64}
              height={64}
              className={classNames(props.imgClassName)}
              alt=""
            />
          </div>
        ) : (
          props.imageSrc
        )}
        <div className="flex flex-col gap-y-2">
          <h3 className="lg:text-2xl text-xl font-bold">{props.title}</h3>
          <div className="lg:text-base text-sm text-dark-700 font-desc">
            {props.desc}
          </div>
        </div>

        <div className="grow flex items-end">{props.children}</div>
      </div>
    </div>
  );
}
