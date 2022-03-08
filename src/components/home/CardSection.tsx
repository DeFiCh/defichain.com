import classNames from 'classnames'
import Slider from 'react-slick'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import Link from 'next/link'
import { CSSProperties, ReactEventHandler } from 'react'

export function CardSection (): JSX.Element {
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

  return (
    <section className='-mt-80' data-testid='CardSection'>
      <Slider {...settings}>
        <Card
          title='Latest feature'
          subtitle='Decentralized Assets'
          desc='Access decentralized assets with collateral in your vault.'
          testId='CardSection.LatestFeature'
          url='https://blog.defichain.com/what-are-decentralised-stock-tokens-and-how-do-they-work/'
          buttonText='Learn more'
          external
        />
        <Card
          title='featured download'
          subtitle='DeFiChain Wallet'
          desc='Experience DeFiChain with wallet apps built for both desktop and mobile.'
          testId='CardSection.Downloads'
          url='/downloads'
          buttonText='Go to downloads'
        />
        <Card
          title='how-to guide'
          subtitle='Buy $DFI'
          desc='Learn about and acquire the $DFI coin from various crypto exchanges.'
          testId='CardSection.Dfi'
          url='https://blog.defichain.com/where-and-how-to-buy-dfi-defichain/'
          buttonText='Learn more'
          external
        />
        <Card
          title='Ecosystem'
          subtitle='Explore community projects'
          desc='Comprehensive list of all things DeFiChain'
          testId='CardSection.Ecosystem'
          url='https://defilinks.io/'
          buttonText='Explore'
          external
        />
      </Slider>
    </section>
  )
}

interface CardProps {
  title: string
  desc: string
  url: string
  subtitle: string
  testId: string
  buttonText: string
  external?: boolean
}

function Card (props: CardProps): JSX.Element {
  return (
    <div className='min-h-[320px] w-[320px] shadow-lg p-5 flex flex-col bg-white' data-testid={props.testId}>
      <div>
        <div className='uppercase text-xs text-gray-500 font-medium'>{props.title}</div>
        <div className='text-2xl font-medium mt-0.5'>{props.subtitle}</div>
      </div>
      <div className='mt-10 text-lg text-gray-500'>
        {props.desc}
      </div>
      {props.external !== undefined ? (
        <ExternalLink
          className='text-primary-500 border-2 border-primary-500 inline-flex shadow rounded justify-center mt-auto max-w-fit py-3 px-5 rounded'
          url={props.url} text={props.buttonText}
        />
      ) : (
        <Link href={{ pathname: props.url }} passHref>
          <a
            className='text-primary-500 border-2 border-primary-500 inline-flex shadow rounded justify-center mt-auto max-w-fit py-3 px-5 rounded'
          >
            {props.buttonText}
          </a>
        </Link>
      )}
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
