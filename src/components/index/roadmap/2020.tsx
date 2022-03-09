import { RoadmapCard, TimeLineContainer } from '@components/index/roadmap/RoadmapSection'
import { NextArrow, PrevArrow } from '@components/index/CardSection'
import Slider from 'react-slick'
import { useTranslation } from 'next-i18next'

export function TimeLine2020 (): JSX.Element {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 14,
    centerMode: true,
    centerPadding: '0px',
    lazyload: 'progressive',
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
          dots: false
        }
      }
    ]
  }

  const { t } = useTranslation('page-index')
  const cards: any[] = t('RoadmapSection.2020.cards', { returnObjects: true })

  return (
    <TimeLineContainer label={t('RoadmapSection.2020.status')} testid='RoadmapSection.2020' timeline={t('RoadmapSection.2020.title')}>
      <Slider {...settings}>
        {
          cards.map(card => {
            return (
              <RoadmapCard
                month={card.title}
                desc={card.desc}
                url={card.url}
                image={card.image.url}
                alt={card.image.alt}
                key={card.desc}
              />
            )
          })
        }
      </Slider>
    </TimeLineContainer>
  )
}
