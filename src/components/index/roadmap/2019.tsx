import {
  RoadmapCard,
  TimeLineContainer,
} from "@components/index/roadmap/RoadmapSection";
import { NextArrow, PrevArrow } from "@components/index/CardSection";
import Slider from "react-slick";
import { useTranslation } from "next-i18next";

export function TimeLine2019(): JSX.Element {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "0px",
    lazyload: "progressive",
    dots: false,
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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

  const { t } = useTranslation("page-index");
  const cards: any[] = t("RoadmapSection.2019.cards", { returnObjects: true });

  return (
    <TimeLineContainer
      label={t<string>("RoadmapSection.2019.status")}
      testid="RoadmapSection.2019"
      timeline={t("RoadmapSection.2019.title")}
    >
      <Slider {...settings}>
        {cards.map((card) => (
          <RoadmapCard
            month={card.title}
            desc={card.desc}
            url={card.url}
            image={card.image.url}
            alt={card.image.alt}
            key={card.desc}
          />
        ))}
      </Slider>
    </TimeLineContainer>
  );
}
