import classNames from 'classnames'
import Slider from 'react-slick'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Link from 'next/link'
import { CSSProperties, ReactEventHandler } from 'react'
import { useTranslation } from 'next-i18next'
import { Button, ButtonUnfilled } from '@components/commons/Buttons'

export function CardSection (): JSX.Element {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 1,
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
  const cards: any[] = t('CardsSection.cards', { returnObjects: true })

  return (
    <section className='-mt-80 bg-none' data-testid='CardSection'>
      <Slider {...settings}>
        {
          cards.map(card => {
            return (
              <Card
                label={card.label}
                title={card.title}
                desc={card.desc}
                buttonText={card.buttonText}
                buttonType={card.buttonType}
                url={card.url}
                key={card.title}
              />
            )
          })
        }
      </Slider>
    </section>
  )
}

interface CardProps {
  label: string
  title: string
  desc: string
  url: string
  buttonText: string
  buttonType: 'full' | 'outline'
}

function Card (props: CardProps): JSX.Element {
  return (
    <div className='min-h-[320px] w-[320px] shadow-lg p-5 flex flex-col bg-white'>
      <div>
        <div className='uppercase text-xs text-gray-500 font-medium'>{props.label}</div>
        <div className='text-2xl font-medium mt-0.5'>{props.title}</div>
      </div>
      <div className='mt-10 text-lg text-gray-500'>
        {props.desc}
      </div>
      <div className='mt-auto'>
        <Link href={{ pathname: props.url }} passHref>
          <a className='contents'>
            {props.buttonType === 'outline' ? (
              <ButtonUnfilled text={props.buttonText} />
            ) : (
              <Button text={props.buttonText} />
            )}
          </a>
        </Link>
      </div>
    </div>
  )
}

export function PrevArrow (props: { className?: string, onClick?: ReactEventHandler, style?: CSSProperties }): JSX.Element {
  return (
    <button
      className={classNames(props.className, '-top-[60px] left-[65%] md:left-[70%] lg:left-[75%]')}
      style={props.style} onClick={props.onClick}
    >
      <BsChevronLeft fontSize={40} fill='fill-black' />
    </button>
  )
}

export function NextArrow (props: { className?: string, onClick?: ReactEventHandler, style?: CSSProperties }): JSX.Element {
  return (
    <button
      className={classNames(props.className, '-top-[60px] right-[20%]')} style={props.style}
      onClick={props.onClick}
    >
      <BsChevronRight fontSize={40} fill='fill-black' />
    </button>
  )
}
