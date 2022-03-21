import {PageHeader} from '@components/commons/PageHeader'
import {Container} from '@components/commons/Container'
import {SSRConfig, useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {Head} from '@components/commons/Head'
import {Section} from '@components/commons/Section'
import {ExternalLink} from "@components/commons/link/ExternalLink";

export default function EcosystemPage(): JSX.Element {
  const {t} = useTranslation(['page-media'])

  return (
    <>
      <Head
        title={t('Head.title')}
        description={t('Head.desc')}
      />
      <PageHeader title={t('Header.title')}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            {t('Header.desc')}
          </div>
        </div>
      </PageHeader>

      <Container>
        <MediaSection/>
      </Container>
    </>
  )
}

function MediaSection(): JSX.Element {
  const {t} = useTranslation(['page-media'])
  const mediaList: any[] = t('MediaSection.entries', {returnObjects: true})

  return (
    <Section title={t('MediaSection.title')} testId=''>
      <div className='flex flex-wrap -mx-1.5'>
        {
          mediaList.map(media => {
            return (
              <div className='p-1.5 w-1/4 flex flex-col'>
                <ExternalLink url={media.url} className='flex flex-col flex-1 text-gray-900'>
                  <div className='p-6 flex flex-wrap bg-gray-50 rounded-lg justify-start flex flex-col flex-1 hover:shadow-lg'>
                    <div className='text-sm font-medium text-gray-500'>
                      {media.source.name}
                    </div>
                    <div className='font-medium text-xl mt-4 mb-8 flex-1 text-gray-900'>
                      {media.title}
                    </div>
                    {
                      media.source.image !== undefined ? (
                        <div>
                          <img
                            src={media.source.image}
                            alt={media.source.name}
                            title={media.source.name}
                            className='max-w-[140px] max-h-10'
                          />
                        </div>
                      ) : <></>
                    }
                  </div>
                </ExternalLink>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}


export async function getStaticProps({locale}): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'page-media']))
    }
  }
}
