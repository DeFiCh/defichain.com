import { SSRConfig, Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import Link from 'next/link'
import { Section } from '@components/commons/Section'
import { Button } from '@components/commons/Buttons'
import { Hunter } from './_components/Hunter'
import { Head } from '@components/commons/Head'
import React from 'react'

export default function HomePage (): JSX.Element {
  const { t } = useTranslation('page-bugbounty')
  const submissionList: any[] = t('SubmissionSection.list.entries', { returnObjects: true })

  return (
    <>
      <Head
        title={t('Head.title')}
        description={t('Head.desc')}
      />
      <Header title={t('Header.title')}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            {t('Header.desc')}
          </div>
          <div className='flex flex-wrap mt-14 items-center'>
            <a className='contents' href='#submission'>
              <Button text={t('Header.submit')} />
            </a>
          </div>
        </div>
      </Header>
      <Container>
        <LeaderboardSection />
        <Section title={t('HowToSection.title')} testId='HowToSection'>
          <div>
            <Trans
              t={t}
              i18nKey='HowToSection.desc'
              components={[
                <pre key='0' className='inline'>defid -testnet</pre>,
                <ExternalLink key='1' className='text-primary-500' url='https://github.com/defich/ain' />
              ]}
            />
            <span className='block font-semibold mt-2.5'>{t('HowToSection.bolded')}</span>
          </div>
        </Section>
        <Section title={t('SubmissionSection.title')} testId='SubmissionSection'>
          <div id='submission'>
            <Trans
              t={t}
              i18nKey='SubmissionSection.desc'
              components={[
                <ExternalLink key='0' className='text-primary-500' url='https://github.com/defich/ain' />,
                <ExternalLink key='1' className='text-primary-500' url='mailto:security@defichain.com' />
              ]}
            />
            <div className='text-sm mt-1'>
              [GPG:
              <Link href={{ pathname: '/keys/security@defichain.com.public.key' }} passHref>
                <a className='contents'>
                  <span className='text-primary-500 hover:underline cursor-pointer ml-1'>F7CE 1F52 D5ED 7EE3 FC37 4614 E2C1 1358 5F01 B88B</span>
                </a>
              </Link>
              ]
            </div>
          </div>
          <div className='mt-5'>
            {t('SubmissionSection.list.title')}
            <ul className='list-disc pl-4'>
              {
                submissionList.map((item, index) => {
                  return (
                    <li key={`list-item-${index}`}>{item}</li>
                  )
                })
              }
            </ul>
          </div>
        </Section>
      </Container>
    </>
  )
}

function LeaderboardSection (): JSX.Element {
  const { t } = useTranslation('page-bugbounty')
  const hunters: any[] = t('LeaderboardSection.hunters', { returnObjects: true })

  return (
    <Section title={t('LeaderboardSection.title')} testId='LeaderboardSection'>
      <div className='w-full text-xl text-gray-900 mb-6' data-testid='Header.desc.main'>
        {t('LeaderboardSection.desc')}
      </div>
      <div>
        {
          hunters.map((hunter, index) => {
            return (
              <Hunter hunter={hunter} index={index} key={`hunter-${index}`} />
            )
          })
        }
      </div>
    </Section>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'page-bugbounty']))
    }
  }
}
