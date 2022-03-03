import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LightWalletSection } from './_components/LightWalletSection'
import { FullNodeSection } from './_components/FullNodeSection'

export default function DownloadsPage (): JSX.Element {
  return (
    <>
      <Header title='Downloads'>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            Download applications for mobile, macOS, Windows and Linux.
          </div>
        </div>
      </Header>
      <Container>
        <div className='flex w-full my-16 '>
          <h1
            className='text-2xl lg:text-3xl font-medium'
            data-testid='DownloadsPage.Heading'
          >
            Choose your own wallet.
          </h1>
        </div>

        <LightWalletSection />
        <FullNodeSection />

      </Container>
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'downloads']))
    }
  }
}
