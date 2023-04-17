import classNames from "classnames";
import { SectionTitle } from "@components/commons/SectionTitle";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { IoArrowForward } from "react-icons/io5";
import { useState } from "react";

export function ExploreCards({
  title,
  desc,
  bgImage,
  customSize,
  href,
  testID,
}: {
  title: string;
  desc: string;
  bgImage: ExploreCardsImage;
  customSize?: string;
  href: string;
  testID: string;
}) {
  const dimension = useWindowDimensions();
  const mobileView = dimension.width <= 800;
  const [isHoverIn, setIsHoverIn] = useState(false);

  const bgMapping = {
    metalCoin: [
      "url(/assets/img/explore/metal-dfi-coin.png)",
      mobileView
        ? "bg-[right_-10em_top_-6em]"
        : "bg-[right_-6em_bottom_-1.8em]",
    ],
    arrow: [
      "url(/assets/img/explore/arrow.png)",
      mobileView ? "bg-[right_top_-6em]" : "bg-right-bottom",
    ],
    diamondCoin: [
      "url(/assets/img/explore/diamond-coin.png)",
      mobileView
        ? "bg-[right_-16em_top_-25em]"
        : "bg-[right_-12em_bottom_-18em]",
    ],
    phone: [
      "url(/assets/img/explore/phone.png)",
      mobileView ? "bg-[right_-2.5em_top_-10em]" : "bg-[right_bottom_-3.5em]",
    ],
    cube: [
      "url(/assets/img/explore/cube.png)",
      mobileView ? "bg-[right_10%_top_-2em]" : "bg-right-bottom",
    ],
    dapps: [
      "url(/assets/img/explore/dapps.png)",
      mobileView
        ? "bg-[right_-3em_bottom_3em]"
        : "bg-[right_-.2em_bottom_-0.2em]",
    ],
  };

  return (
    <div
      onMouseEnter={() => {
        setIsHoverIn(true);
      }}
      onMouseLeave={() => {
        setIsHoverIn(false);
      }}
      className={classNames(
        "rounded-[15px] h-[300px] z-10",
        mobileView ? "p-[0.5px]" : "p-[1px]",
        customSize ?? "md:w-full min-w-[272px]",
        "cursor-pointer",
        "card-outline-2 hover:accent-gradient-1 transition-all ease-in-out duration-300"
      )}
    >
      <a
        href={href}
        style={{
          backgroundImage: bgMapping[bgImage][0],
        }}
        className={classNames(
          "lg:p-10 p-6 rounded-[15px] h-full w-full flex",
          "bg-dark-00 bg-no-repeat",
          "transition-all duration-300",
          bgMapping[bgImage][1]
        )}
      >
        <div className="flex flex-col mt-auto">
          <SectionTitle text={title} testID={testID} />
          <div
            className={classNames(
              "text-light-00 inline mt-2",
              mobileView
                ? "text-xl leading-6"
                : "text-[32px] leading-10 max-w-[268px]"
            )}
          >
            {desc}
            {(mobileView || isHoverIn) && (
              <button
                type="button"
                className="md:ml-[18px] ml-[12.17px] align-middle"
              >
                <IoArrowForward size={20} />
              </button>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

export enum ExploreCardsImage {
  METALCOIN = "metalCoin",
  DIAMONDCOIN = "diamondCoin",
  PHONE = "phone",
  CUBE = "cube",
  ARROW = "arrow",
  DAPPS = "dapps",
}
