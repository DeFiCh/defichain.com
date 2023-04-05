import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { CSSProperties, ReactEventHandler } from "react";
import Slider from "react-slick";

export function YearAheadRoadMapSection(): JSX.Element {
  const { t } = useTranslation("page-index");

  return (
    <>
      <Container>
        <SectionTitle
          text={t("YearAheadRoadMapSection.label")}
          customStyle="lg:w-fit md:w-[409px] w-[272px]"
        />
        <div className="lg:text-[52px] text-[32px] text-dark-1000 mt-5 mb-6">
          {t("YearAheadRoadMapSection.title")}
        </div>
      </Container>
      <RoadMapSlider />
    </>
  );
}

interface RoadMap {
  title: string;
  timeline: string;
  description: string;
  image: string;
}

function RoadMapSlider(): JSX.Element {
  const { t } = useTranslation("page-index");
  const cards: RoadMap[] = t("YearAheadRoadMapSection.cards", {
    returnObjects: true,
  });
  console.log(cards);
  const settings = {
    customPaging: () => (
      <a>
        <div className="w-full h-0.5" />
      </a>
    ),
    dots: true,
    dotsClass: "roadmap-dots",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    centerPadding: "0px",
    lazyload: "progressive",
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          swipeToSlide: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <RoadMapCard key={card.title} {...card} />
      ))}
    </Slider>
  );
}

function RoadMapCard(props: RoadMap): JSX.Element {
  return (
    <div
      data-bg-image={`url(${props.image})`}
      className="group card-outline-2 hover:accent-gradient-1 rounded-[15px] h-[202px] w-[384px] p-6 bg-[attr(data-bg-image)] hover:bg-dark-1000/90"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-dark-1000 group-hover:text-brand-100 text-2xl">
          {props.title}
        </div>
        <div className="bg-dark-100 rounded-[5px] py-1 px-3 text-dark-1000 text-sm font-semibold">
          {props.timeline}
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 text-dark-1000 font-desc">
        {props.description}
      </div>
    </div>
  );
}
function PrevArrow(props: {
  className?: string;
  onClick?: ReactEventHandler;
  style?: CSSProperties;
}): JSX.Element {
  return (
    <button
      className={classNames(props.className)}
      style={props.style}
      onClick={props.onClick}
    >
      {/* <BsChevronLeft fontSize={40} fill="fill-black" /> */}
    </button>
  );
}
