import {SSRConfig, useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {Header} from "@components/commons/Header";
import {Container} from '@components/commons/Container'
import {PropsWithChildren} from "react";
import {ExternalLink} from "@components/commons/link/ExternalLink";
import {BiLinkExternal} from "react-icons/bi"

export default function HomePage(): JSX.Element {
  const {t} = useTranslation('bug-bounty')

  return (
    <>
      <Header title={t('Header.title')}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            {t('Header.desc')}
          </div>
          <div className='flex flex-wrap mt-14 items-center'>
            <div className='rounded border border-primary-500  bg-primary-500 px-4 py-2 text-white cursor-pointer'>
              {t('Header.submit')}
            </div>
            <div className='rounded border border-primary-500 text-primary-500 px-4 py-2 ml-1.5 cursor-pointer'>
              {t('Header.howTo')}
            </div>
          </div>
        </div>
      </Header>
      <Container>
        <LeaderboardSection/>
        <Section title={t('HowToSection.title')} testId='HowToSection'>
          <div>
            {t('HowToSection.desc')}
            <ExternalLink url='https://github.com/defich/ain' className='ml-1'>
              GitHub
            </ExternalLink>
          </div>
        </Section>
      </Container>
    </>
  )
}

function LeaderboardSection(): JSX.Element {
  const {t} = useTranslation('bug-bounty')
  const hunters: Array<any> = t('LeaderboardSection.hunters', {returnObjects: true})

  return (
    <Section title={t('LeaderboardSection.title')} testId='LeaderboardSection'>
      <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
        {t('LeaderboardSection.desc')}
      </div>
      <div>
        {
          hunters.map((hunter, index) => {
            return (
              <Hunter hunter={hunter} index={index}/>
            )
          })
        }
      </div>
    </Section>
  )

  function Hunter(props: { index: number, hunter: any }): JSX.Element {
    return (
      <div className='flex flex-wrap bg-gray-50 rounded-lg px-8 py-6'>
        <div className='w-1/6 font-medium'>{props.index + 1}</div>
        <div className='w-2/6 flex flex-wrap items-start'>
          <div className='w-full'>
            <span className='text-xl font-medium'>{props.hunter['name']}</span><br/>
            <ExternalLink url={`https://github.com/${props.hunter['github']}`}>
              {props.hunter['github']}
            </ExternalLink>
          </div>
        </div>
        <div className='w-3/6 flex flex-wrap -my-1 justify-end'>
          {props.hunter['bounties'].map(bounty => {
            return (
              <div className='w-full flex text-base py-1.5 border-b'>
                <div className='w-2/3'>{bounty['name']}</div>
                <div className='w-1/3 flex justify-end'>
                  <div className='flex items-center'>
                    {bounty['payout']} DFI
                    <ExternalLink url={`https://defiscan.live/transactions/${bounty['txid']}`}>
                      <BiLinkExternal size={20} className='ml-2 text-primary-500 cursor-pointer'/>
                    </ExternalLink>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function Section(props: PropsWithChildren<{ title: string, testId: string }>): JSX.Element {
  return (
    <section className='my-16'>
      <h1 className='text-2xl lg:text-3xl font-semibold' data-testid={props.testId}>{props.title}</h1>
      <div className='flex flex-wrap my-10 pb-10'>
        {props.children}
      </div>
    </section>
  )
}

export async function getStaticProps({locale}): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'bug-bounty']))
    }
  }
}
