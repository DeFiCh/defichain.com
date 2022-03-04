import { PropsWithChildren } from 'react'
import NextImage from 'next/image'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '@components/home/CardSection'
import { Container } from '@components/commons/Container'
import { TimeLine2019 } from '@components/home/RoadMap/2019'
import { TimeLineFuture } from '@components/home/RoadMap/Future'
import { TimeLine2021 } from '@components/home/RoadMap/2021'
import { TimeLine2020 } from '@components/home/RoadMap/2020'
import { TimeLine2022 } from '@components/home/RoadMap/2022'

export function RoadmapSection (): JSX.Element {
  return (
    <section className='bg-gray-50 py-20' data-testid='RoadmapSection'>
      <Container>
        <h1 className='text-5xl font-semibold my-10' data-testid='RoadmapSection.Title'>Roadmap</h1>
        <TimeLine2022 />
        <TimeLine2021 />
        <TimeLineFuture />
        <TimeLine2020 />
        <TimeLine2019 />
      </Container>
    </section>
  )
}

export function TimeLineContainer (props: PropsWithChildren<{testid: string, timeline: string, label?: string}>): JSX.Element {
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
    <div data-testid={props.testid} className='py-5 md:py-10'>
      <div className='my-12'>
        <span className='mr-2 font-medium text-2xl'>{props.timeline}</span>
        <span className='text-gray-500 font-medium'>{props.label}</span>
      </div>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </div>
  )
}

export function RoadmapCard (props: PropsWithChildren<{image: StaticImageData, month: string, testId: string}>): JSX.Element {
  return (
    <div className=' flex flex-col w-[320px] h-[310px] shadow-sm' data-testid={props.testId}>
      <div className='bg-white p-4 space-y-4 flex flex-col rounded-t-md min-h-[160px]'>
        <h1 className='font-medium text-xl'>{props.month}</h1>
        <div className='flex-1'>
          {props.children}
        </div>
      </div>
      <div className='w-full flex-1 grow overflow-hidden'>
        <NextImage className='h-full' src={props.image} alt='DeFiChain roadmap' title='DeFiChain roadmap' />
      </div>
    </div>
  )
}
