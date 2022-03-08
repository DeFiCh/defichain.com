import { PropsWithChildren } from 'react'
import NextImage from 'next/image'
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
      </Container>
      <TimeLine2022 />
      <TimeLine2021 />
      <TimeLineFuture />
      <TimeLine2020 />
      <TimeLine2019 />
    </section>
  )
}

export function TimeLineContainer (props: PropsWithChildren<{ testid: string, timeline: string, label?: string }>): JSX.Element {
  return (
    <div data-testid={props.testid} className='py-5 md:py-10'>
      <Container>
        <div className='my-12'>
          <span className='mr-2 font-medium text-2xl'>{props.timeline}</span>
          <span className='text-gray-500 font-medium'>{props.label}</span>
        </div>
      </Container>
      {props.children}
    </div>
  )
}

export function RoadmapCard (props: PropsWithChildren<{ image: StaticImageData, month: string, testId: string }>): JSX.Element {
  return (
    <div className='w-[320px] shadow-lg rounded overflow-hidden' data-testid={props.testId}>
      <div className='bg-white p-4 space-y-4 flex flex-col min-h-[160px]'>
        <h1 className='font-medium text-xl'>{props.month}</h1>
        {props.children}
      </div>
      <NextImage src={props.image} alt='DeFiChain roadmap' title='DeFiChain roadmap' layout='responsive' />
    </div>
  )
}
