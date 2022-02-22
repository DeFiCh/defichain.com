import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { SSRConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function LearnPage (): JSX.Element {
  const { t } = useTranslation(['learn'])

  return (
    <>
      <Header title={t('Header.title')}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            {t('Header.desc')}
          </div>
        </div>
      </Header>
      <Container />
    </>
  )
}

// function VideoSection (props: PropsWithChildren<{ title: string, testId: string }>): JSX.Element {
//   return (
//     <section className='my-16'>
//       <h1 className='text-2xl lg:text-3xl font-semibold' data-testid={props.testId}>{props.title}</h1>
//       <div className='flex flex-wrap -mx-1.5 my-10 pb-10'>
//         {props.children}
//       </div>
//     </section>
//   )
// }

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'ecosystem']))
    }
  }
}
