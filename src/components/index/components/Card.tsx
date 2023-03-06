import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface CardProps {
  id: string;
  href: string;
  img: string;
  // title: string;
  // subTitle: string;
  customStyle?: string;
  mobileImg?: string;
}

export function Card({
  content,
  setHoverState,
  hoverState,
  title,
  subTitle,
}: {
  content: CardProps;
  setHoverState: Dispatch<SetStateAction<string | undefined>>;
  hoverState?: string;
  title: string;
  subTitle: string;
}): JSX.Element {
  return (
    <div>
      <div
        key={content.id}
        onMouseEnter={() => {
          setHoverState(content.id);
        }}
        onMouseLeave={() => {
          setHoverState(undefined);
        }}
        className={classNames(
          "p-[0.5px] rounded-[15px] h-[215px] w-full xs:w-[327px] lg:w-[487px] xl:h-[215]",
          "md:block md:mb-[24px]",
          "card-outline-2 hover:accent-gradient-1"
        )}
      >
        <a
          href={content.href}
          className={classNames(
            "w-full h-full p-6 rounded-[15px] border-[0.5px] flex flex-col",
            "border-dark-200 bg-dark-00 bg-cover bg-no-repeat bg-right-top",
            "duration-1000 hover:transition hover:ease-in delay-250"
          )}
          style={{
            backgroundImage:
              hoverState !== undefined && hoverState === content.id
                ? `url(/assets/img/ecosystem/${content.img}-hover.png)`
                : `url(/assets/img/ecosystem/${content.img}.png)`,
          }}
        >
          <div className={classNames(content.customStyle)}>
            <span
              className={classNames("md:w-full text-2xl tracking-[-2%]", {
                "accent-dfc-gradient-text":
                  hoverState !== undefined && hoverState === content.id,
              })}
            >
              {title}
            </span>
            <div
              className={classNames(
                "text-base text-dark-500 pt-[22px] flex flex-row items-center font-semibold"
              )}
            >
              {subTitle}
              <FiArrowUpRight size={20} className="ml-[13px]" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
