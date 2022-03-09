import { RoadmapCard, TimeLineContainer } from '@components/index/roadmap/RoadmapSection'
import { NextArrow, PrevArrow } from '@components/index/CardSection'
import Slider from 'react-slick'
import { useTranslation } from 'next-i18next'

export function TimeLineFuture (): JSX.Element {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '0px',
    lazyload: 'progressive',
    dots: true,
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
  const cards: any[] = t('RoadmapSection.future.cards', { returnObjects: true })

  return (
    <TimeLineContainer testid='RoadmapSection.Future' timeline={t('RoadmapSection.future.title')}>
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
