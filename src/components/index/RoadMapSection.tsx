import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { LeftArrow } from "@components/icons/assets/roadmap/LeftArrow";
import { RightArrow } from "@components/icons/assets/roadmap/RightArrow";
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
        <div className="lg:text-[52px] lg:leading-[52px] text-[32px] leading-[36px] text-dark-1000 pt-5 pb-6">
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
  const settings = {
    customPaging: () => (
      <a>
        <div className="w-full h-0.5" />
      </a>
    ),
    dots: true,
    dotsClass: "roadmap-dots",
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerPadding: "0px",
    lazyload: "progressive",
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          arrows: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="roadmap-section">
      <Slider {...settings}>
        {cards.map((card) => (
          <RoadMapCard key={card.title} {...card} />
        ))}
      </Slider>
    </div>
  );
}

function RoadMapCard(props: RoadMap): JSX.Element {
  return (
    <div
      data-bg-image={`url(${props.image})`}
      className="group card-outline-2 hover:accent-gradient-1 rounded-[15px] md:h-[202px] md:w-[384px] h-[184px] w-[272px] p-px"
    >
      <div
        className="p-6 group-hover:bg-dark-00/90 rounded-[15px] h-full"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="text-dark-1000 group-hover:text-brand-100 text-2xl transition-colors">
            {props.title}
          </div>
          <div className="bg-dark-100 rounded-[5px] py-1 px-3 text-dark-1000 text-sm font-semibold">
            {props.timeline}
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-colors text-dark-1000 font-desc line-clamp-4">
          {props.description}
        </div>
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
      className={classNames(
        props.className,
        "p-3 rounded-full bg-dark-100 mr-2 flex! w-12 h-12"
      )}
      style={props.style}
      onClick={props.onClick}
    >
      <LeftArrow />
    </button>
  );
}
function NextArrow(props: {
  className?: string;
  onClick?: ReactEventHandler;
  style?: CSSProperties;
}): JSX.Element {
  return (
    <button
      className={classNames(
        props.className,
        "p-3 rounded-full bg-dark-100 flex! w-12 h-12"
      )}
      style={props.style}
      onClick={props.onClick}
    >
      <RightArrow />
    </button>
  );
}
