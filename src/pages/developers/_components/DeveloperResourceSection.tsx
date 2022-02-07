import { PropsWithChildren } from 'react'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import NextLink from 'next/link'
import { BsGithub, BsReddit, BsFillTerminalFill, BsSticky } from 'react-icons/bs'
import { DeFiChainLogoNoText } from '@components/icons/DeFiChainLogoNoText'

export function ResourceSection (): JSX.Element {
  return (
    <section className='flex flex-wrap -m-3 pb-10'>
      <ResourceCard
        text='Get developer resources and getting started guides.'
        buttonText='GitHub'
        url='https://github.com/defich/ain'
        testid='ResourceSection.Github'
        external
      >
        <BsGithub fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text='Get the CLI and desktop app.'
        subtext='The latest releases for Mac, Windows and Linux.'
        buttonText='Go to downloads'
        url='/downloads'
        testid='ResourceSection.Cli'
      >
        <BsFillTerminalFill fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text='Explore the blockchain in Block Explorer.'
        buttonText='Explore'
        url='https://defiscan.live'
        testid='ResourceSection.Explore'
        external
      >
        <DeFiChainLogoNoText fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text='Read the DeFiChain technical paper.'
        buttonText='Read the whitepaper'
        testid='ResourceSection.Whitepaper'
        url='/white-paper'
      >
        <BsSticky fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text='Participate in our Reddit developer community.'
        buttonText='Discuss'
        testid='ResourceSection.Reddit'
        url='https://www.reddit.com/r/defiblockchain/'
        external
      >
        <BsReddit fontSize={50} className='fill-primary-500' />
      </ResourceCard>
    </section>
  )
}

function ResourceCard (props: PropsWithChildren<{ external?: boolean, text: string, buttonText: string, subtext?: string, url: string, testid: string }>): JSX.Element {
  return (
    <div className='p-1.5 w-full lg:w-1/2'>
      <div
        className='rounded bg-gray-50 py-10 px-16 space-y-10'
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

        <div>
          {(() => {
            if (props.external !== undefined) {
              return (
                <ExternalLink url={props.url}>
                  <button
                    className='button rounded py-2 px-6 font-medium text-white bg-primary-500 hover:bg-primary-900'
                  >
                    {props.buttonText}
                  </button>
                </ExternalLink>
              )
            }

            return (
              <NextLink href={props.url}>
                <button className='button rounded py-2 px-6 font-medium text-white bg-primary-500 hover:bg-primary-900'>
                  {props.buttonText}
                </button>
              </NextLink>
            )
          })()}
        </div>
      </div>
    </div>
  )
}
