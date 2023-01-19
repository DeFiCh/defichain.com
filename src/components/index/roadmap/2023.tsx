import {
  RoadmapCard,
  TimeLineContainer,
} from "@components/index/roadmap/RoadmapSection";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "@components/index/CardSection";
import { useTranslation } from "next-i18next";

export function TimeLine2023(): JSX.Element {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 2,
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
  const cards: any[] = t("RoadmapSection.2023.cards", { returnObjects: true });

  return (
    <TimeLineContainer
      testid="RoadmapSection.2023"
      timeline={t("RoadmapSection.2023.title")}
      label={t<string>("RoadmapSection.2023.status")}
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
