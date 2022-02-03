import { PropsWithChildren } from 'react'
import { Github } from './Github'
import { Cli } from './Cli'
import { DefiChain } from './DefiChain'
import { Whitepaper } from './Whitepaper'
import { Reddit } from './Reddit'
import Link from 'next/link'

export function ResourceSection (): JSX.Element {
  return (
    <section className='flex flex-wrap py-10'>
      <ResourceCard
        text='Get developer resources and getting started guides.'
        buttonText='GitHub'
        url='https://github.com/defich/ain'
        testid='ResourceSection.Github'
        external
      >
        <Github fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text='Get the CLI and desktop app.'
        subtext='The latest releases for Mac, Windows and Linux.'
        buttonText='Go to downloads'
        url='/downloads'
        testid='ResourceSection.Cli'
        external={false}
      >
        <Cli fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text='Explore the blockchain in Block Explorer.'
        buttonText='Explore'
        url='https://defiscan.live'
        testid='ResourceSection.Explore'
        external
      >
        <DefiChain fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text='Read the DeFiChain technical paper.'
        buttonText='Read the whitepaper'
        testid='ResourceSection.Whitepaper'
        url='/white-paper'
        external={false}
      >
        <Whitepaper fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text='Participate in our Reddit developer community.'
        buttonText='Discuss'
        testid='ResourceSection.Reddit'
        url='https://www.reddit.com/r/defiblockchain/'
        external
      >
        <Reddit fontSize={50} className='fill-primary-500' />
      </ResourceCard>
    </section>
  )
}

function ResourceCard (props: PropsWithChildren<{external: boolean, text: string, buttonText: string, subtext?: string, url: string, testid: string}>): JSX.Element {
  return (
    <SectionLink url={props.url} external={props.external}>
      <div
        className='border border-gray-100 bg-white py-10 px-16 shadow hover:scale-x-105 ease-in duration-500 cursor-pointer space-y-10'
        data-testid={props.testid}
      >
        <div className='w-full'>
          {props.children}
        </div>
        <div className='flex flex-col space-y-2'>
          <h3 className='text-lg md:text-2xl lg:w-3/5 text-semibold'>{props.text}</h3>
          {(() => {
            if (props.subtext !== undefined) {
              return <span className='text-gray-500 font-light'>{props.subtext}</span>
            }
          })()}
        </div>
        <button className='bg-primary-500 text-white font-medium text-lg rounded py-2 px-6 hover:bg-primary-900'>{props.buttonText}</button>
      </div>
    </SectionLink>
  )
}

function SectionLink (props: PropsWithChildren<{url: string, external: boolean}>): JSX.Element {
  return (
    <div className='p-3 w-full md:w-1/2'>
      {(() => {
        if (props.external) {
          return (
            <a href={props.url} target='_blank' rel='noreferrer'>
              {props.children}
            </a>
          )
        }
        return (
          <Link href={props.url}>
            <a>{props.children}</a>
          </Link>
        )
      })()}
    </div>
  )
}
