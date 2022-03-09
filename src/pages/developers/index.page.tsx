import { SSRConfig, Trans, useTranslation } from 'next-i18next'
import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DeveloperResourceSection } from './_components/DeveloperResourceSection'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import { Head } from '@components/commons/Head'
import { Section } from '@components/commons/Section'

export default function DevelopersPage (): JSX.Element {
  const { t } = useTranslation(['page-developers', 'common'])

  return (
    <>
      <Head
        title={t('Head.title')}
        description={t('Head.desc')}
      />
      <Header title={t('Header.title')}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>{t('Header.desc')}
          </div>
        </div>
      </Header>

      <Container>
        <Section title={t('DeveloperResourcesSection.title')} testId='DevelopersPage'>
          <div className='mb-5'>
            {t('DeveloperResourcesSection.title')}
          </div>
          <DeveloperResourceSection />
        </Section>
      </Container>

      <Container bgClassName='bg-gray-50'>
        <Section title={t('CoreContributors.title')} testId='CoreContributors'>
          <p className='text-lg' data-testid='DevelopersPage.Contributors.Text'>
            <Trans
              t={t}
              i18nKey='CoreContributors.desc'
              components={[
                <ExternalLink key='0' className='text-primary-500' url='https://github.com/defich/' />
              ]}
            />
          </p>
        </Section>
      </Container>
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'page-developers']))
    }
  }
}
