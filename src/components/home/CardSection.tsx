import classNames from 'classnames'
import Slider from 'react-slick'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { ExternalLink } from '../../components/commons/link/ExternalLink'
import Link from 'next/link'
import {
  CSSProperties,
  ReactEventHandler
} from 'react'

export function CardSection (): JSX.Element {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyload: 'ondemand',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
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
          subtitle='DefiChain Wallet'
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
          buttonText='Learn more'
          external
        />
      </Slider>
    </section>
  )
}

interface Cardprops {
  title: string
  desc: string
  url: string
  subtitle: string
  testId: string
  buttonText: string
  external?: boolean
}

function Card (props: Cardprops): JSX.Element {
  return (
    <div className='min-h-[320px] w-[318px] shadow p-4 flex flex-col mx-10 bg-white border-2 border-white' data-testid={props.testId}>
      <div>
        <div className='uppercase text-sm text-gray-400'>{props.title}</div>
        <div className='text-2xl font-medium'>{props.subtitle}</div>
      </div>
      <div className='mt-10 text-xl font-light'>
        {props.desc}
      </div>
      {props.external !== undefined ? (
        <ExternalLink className='text-primary-500 border-2 border-primary-500 inline-flex shadow rounded justify-center mt-auto max-w-fit py-3 px-5 rounded' url={props.url} text={props.buttonText} />
      ) : (
        <Link href={{ pathname: props.url }} passHref>
          <a className='text-primary-500 border-2 border-primary-500 inline-flex shadow rounded justify-center mt-auto max-w-fit py-3 px-5 rounded'>
            {props.buttonText}
          </a>
        </Link>
      )}
    </div>
  )
}

/**
 * Note: Custom Arrow for Slick Slider
 * All the defined props are required by slick slider  custom arrows to work.
 */

export function PrevArrow (props: {className?: string, onClick?: ReactEventHandler, style?: CSSProperties}): JSX.Element {
  return (
    <button className={classNames(props.className, '-top-[60px] sm:-top-[100px] left-[50%] md:left-[70%]')} style={props.style} onClick={props.onClick}>
      <BsChevronLeft fontSize={40} fill='fill-black' />
    </button>
  )
}

export function NextArrow (props: {className?: string, onClick?: ReactEventHandler, style?: CSSProperties}): JSX.Element {
  return (
    <button className={classNames(props.className, '-top-[60px] sm:-top-[100px] right-[20%]')} style={props.style} onClick={props.onClick}>
      <BsChevronRight fontSize={40} fill='fill-black' />
    </button>
  )
}
