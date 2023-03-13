import { PropsWithChildren } from "react";
import classNames from "classnames";
import { FcLinux } from "react-icons/fc";
import { AiFillApple, AiFillGithub } from "react-icons/ai";
import { ChromeIcon } from "./icons/ChromeIcon";
import { PlayStoreIcon } from "./icons/PlayStoreIcon";
import { BraveIcon } from "./icons/BraveIcon";
import { FirefoxIcon } from "./icons/FirefoxIcon";
import { WindowsIcon } from "./icons/WindowsIcon";

export function CardLink(
  props: PropsWithChildren<{
    url: string;
    testId?: string;
    className?: string;
    descText: string;
    text: IconType;
  }>
): JSX.Element {
  const Icon = iconMap[props.text.toLowerCase().replace(" ", "")];
  return (
    <div
      className={classNames(
        "p-[0.5px] rounded-[5px]",
        "bg-dark-200 hover:accent-gradient-1 active:opacity-70"
      )}
    >
      <a
        href={props.url}
        className={classNames("rounded-[5px]", props.className)}
        target="_blank"
        rel="noreferrer"
        data-testid={props.testId}
      >
        <div className="flex gap-x-[7.09px] bg-dark-00 h-full p-2 items-center rounded-[5px]">
          <Icon size={20} />
          <div className="lg:flex flex-col hidden">
            <div className="text-[7.2px] leading-[9px] text-light-00 font-desc">
              {props.descText}
            </div>
            <div className="text-[10px] leading-[12px] text-light-00 font-bold font-desc">
              {props.text}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export enum IconType {
  LINUX = "Linux",
  MACOS = "Mac OS",
  WINDOWS = "Windows",
  GOOGLE_PLAY = "Google Play",
  GITHUB = "GitHub",
  CHROME = "Chrome",
  BRAVE = "Brave",
  FIREFOX = "Firefox",
}

const iconMap = {
  linux: FcLinux,
  macos: AiFillApple,
  windows: WindowsIcon,
  googleplay: PlayStoreIcon,
  github: AiFillGithub,
  chrome: ChromeIcon,
  brave: BraveIcon,
  firefox: FirefoxIcon,
};
