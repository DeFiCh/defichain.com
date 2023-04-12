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
          customStyle="w-fit"
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
    dots: false,
    dotsClass: "roadmap-dots",
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerPadding: "0px",
    lazyload: "progressive",
    variableWidth: true,
    swipeToSlide: false,
    draggable: false,
    // prevArrow: <PrevArrow />, // TODO: uncomment when more than 3 cards in road map
    // nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          draggable: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          centerMode: true,
          arrows: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <section className="roadmap-section lg:mb-60 mb-24 relative">
      <Slider {...settings}>
        {cards.map((card) => (
          <RoadMapCard key={card.title} {...card} />
        ))}
      </Slider>
      <div
        className={classNames(
          "bg-[url('/assets/img/index/accent.png')] absolute w-[772px] h-[386px] bg-contain bg-no-repeat z-[-1]",
          "2xl:left-0 lg:top-[66px] lg:left-[-326px] hidden lg:block"
        )}
      />
    </section>
  );
}

function RoadMapCard(props: RoadMap): JSX.Element {
  return (
    <article
      data-bg-image={`url(${props.image})`}
      className="card-outline-2 hover:accent-gradient-1 rounded-[15px] md:h-[202px] md:w-[384px] h-[202px] w-[272px] p-[0.5px]"
    >
      <div
        className="p-6 group-hover:bg-dark-00/90 rounded-[15px] h-full bg-[75%]"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="text-dark-1000 group-hover:text-brand-100 text-2xl transition-colors w-2/4 md:w-full">
          {props.title}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-colors text-dark-1000 font-desc line-clamp-4">
          {props.description}
        </div>
      </div>
    </article>
  );
}

// eslint-disable-next-line
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

// eslint-disable-next-line
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
