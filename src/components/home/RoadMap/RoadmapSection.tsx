import { PropsWithChildren } from 'react'
import NextImage from 'next/image'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '@components/home/CardSection'
import { Container } from '@components/commons/Container'
import { TimeLine2019 } from '@components/home/RoadMap/2019'
import { TimeLineFuture } from '@components/home/RoadMap/Future'
import { TimeLine2021 } from '@components/home/RoadMap/2021'
import { TimeLine2020 } from '@components/home/RoadMap/2020'

export function RoadmapSection (): JSX.Element {
  return (
    <section className='bg-gray-50 py-20'>
      <Container>
        <TimeLine2021 />
        <TimeLineFuture />
        <TimeLine2020 />
        <TimeLine2019 />
      </Container>
    </section>
  )
}

export function TimeLineContainer (props: PropsWithChildren<{testid: string, timeline: string, achieved?: boolean}>): JSX.Element {
  const settings = {
    infinite: false,
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
          slidesToScroll: 1
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
          className: 'center',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
          dots: true
        }
      }
    ]
  }
  return (
    <div data-testid={props.testid} className='py-28'>
      <div className='my-12'>
        <span className='mr-4 font-medium text-xl'>{props.timeline}</span>
        {props.achieved !== undefined && <span>Achieved</span>}
      </div>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </div>
  )
}

export function RoadmapCard (props: PropsWithChildren<{image: StaticImageData, month: string, testId: string}>): JSX.Element {
  return (
    <div className='w-[320px] shadow-sm' data-testid={props.testId}>
      <div className='bg-white p-4 space-y-4 flex flex-col min-h-[160px]'>
        <h1 className='font-medium text-xl'>{props.month}</h1>
        <div className='flex-1'>
          {props.children}
        </div>
      </div>
      <div className='w-full overflow-hidden'>
        <NextImage className='h-full' src={props.image} alt='DeFiChain roadmap' title='DeFiChain roadmap' />
      </div>
    </div>
  )
}
