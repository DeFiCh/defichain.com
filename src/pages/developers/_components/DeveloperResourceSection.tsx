import { PropsWithChildren } from 'react'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import NextLink from 'next/link'
import { BsFillTerminalFill, BsGithub, BsReddit, BsSticky } from 'react-icons/bs'
import { DeFiChainLogoNoText } from '@components/icons/DeFiChainLogoNoText'
import { useTranslation } from 'next-i18next'

export function DeveloperResourceSection (): JSX.Element {
  const { t } = useTranslation('developers')

  return (
    <section className='flex flex-wrap -m-3 pb-10'>
      <ResourceCard
        text={t('DeveloperResourcesSection.GitHub.title')}
        buttonText={t('DeveloperResourcesSection.GitHub.button')}
        url='https://github.com/defich/ain'
        testid='ResourceSection.Github'
        external
      >
        <BsGithub fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text={t('DeveloperResourcesSection.Cli.title')}
        buttonText={t('DeveloperResourcesSection.Cli.button')}
        url='/downloads'
        testid='ResourceSection.Cli'
      >
        <BsFillTerminalFill fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text={t('DeveloperResourcesSection.Scan.title')}
        buttonText={t('DeveloperResourcesSection.Scan.button')}
        url='https://defiscan.live'
        testid='ResourceSection.Explore'
        external
      >
        <DeFiChainLogoNoText fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text={t('DeveloperResourcesSection.WhitePaper.title')}
        buttonText={t('DeveloperResourcesSection.WhitePaper.button')}
        testid='ResourceSection.Whitepaper'
        url='/white-paper'
      >
        <BsSticky fontSize={50} className='fill-primary-500' />
      </ResourceCard>
      <ResourceCard
        text={t('DeveloperResourcesSection.Reddit.title')}
        buttonText={t('DeveloperResourcesSection.Reddit.button')}
        testid='ResourceSection.Reddit'
        url='https://www.reddit.com/r/defiblockchain/'
        external
      >
        <BsReddit fontSize={50} className='fill-primary-500' />
      </ResourceCard>
    </section>
  )
}

export function ResourceCard (props: PropsWithChildren<{ external?: boolean, text: string, buttonText: string, url: string, testid: string }>): JSX.Element {
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
          <span className='text-lg md:text-xl'>{props.text}</span>
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
