import classNames from 'classnames'
import Slider from 'react-slick'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export function CardSection (): JSX.Element {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
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
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <section className='-mt-80'>
      <Slider {...settings}>
        <Card
          title='Latest feature'
          subtitle='Decentralized Assets'
          desc='Access decentralized assets with collateral in your vault.'
          testId='CardSection.LatestFeature'
          url='/'
          buttonText='Learn more'
        />
        <Card
          title='featured download'
          subtitle='DefiChain Wallet'
          desc='Experience DeFiChain with wallet apps built for both desktop and mobile.'
          testId='CardSection.Downloads'
          url='/'
          buttonText='Go to downloads'
        />
        <Card
          title='how-to guide'
          subtitle='Buy $DFI'
          desc='Learn about and acquire the $DFI coin from various crypto exchanges.'
          testId='CardSection.HowTo'
          url='/'
          buttonText='Learn more'
          fill
        />
        <Card
          title='how-to guide'
          subtitle='Buy $DFI'
          desc='Learn about and acquire the $DFI coin from various crypto exchanges.'
          testId='CardSection.HowTo'
          url='/'
          buttonText='Learn more'
          fill
        />
        <Card
          title='how-to guide'
          subtitle='Buy $DFI'
          desc='Learn about and acquire the $DFI coin from various crypto exchanges.'
          testId='CardSection.HowTo'
          url='/'
          buttonText='Learn more'
          fill
        />
      </Slider>
    </section>
  )
}

interface Cardprops {
  title: string
  desc: string
  fill?: boolean
  url: string
  subtitle: string
  testId: string
  buttonText: string
}

function Card (props: Cardprops): JSX.Element {
  return (
    <div className='min-h-[320px] w-[318px] shadow p-4 flex flex-col mx-10 bg-white border-2 border-white' data-testid={props.testId}>
      <div>
        <div className='uppercase text-sm text-gray-400'>{props.title}</div>
        <div className='text-2xl font-medium'>{props.subtitle}</div>
      </div>
      <div className='mt-10'>
        {props.desc}
      </div>
      <a className={classNames('inline-flex shadow rounded justify-center mt-auto max-w-fit py-3 px-5 rounded', props.fill !== undefined ? 'text-primary-500 border-2 border-primary-500' : 'bg-primary-500 text-white')} href={props.url}>{props.buttonText}</a>
    </div>
  )
}

export function PrevArrow (props: any): JSX.Element {
  return (
    <button className={classNames(props.className, '-top-[60px] sm:-top-[100px] left-[50%] md:left-[70%]')} style={props.style} onClick={props.onClick}>
      <BsChevronLeft fontSize={40} fill='fill-black' />
    </button>
  )
}

export function NextArrow (props: any): JSX.Element {
  return (
    <button className={classNames(props.className, '-top-[60px] sm:-top-[100px] right-[20%]')} style={props.style} onClick={props.onClick}>
      <BsChevronRight fontSize={40} fill='fill-black' />
    </button>
  )
}
