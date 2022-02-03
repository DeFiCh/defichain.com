import { SSRConfig } from 'next-i18next'
import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ResourceSection } from './_components/DeveloperResourceSection'

export default function DevelopersPage (): JSX.Element {
  return (
    <div className='bg-gray-50'>
      <Header title='Developers'>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-3xl text-gray-900' data-testid='Header.desc.main'>Build on Defichain
          </div>
        </div>
      </Header>
      <Container>
        <div className='flex w-full py-20'>
          <h1 className='text-3xl md:text-5xl font-medium w-full  lg:w-1/2 text-center md:text-left' data-testid='DevelopersPage.Heading'>
            Start building on DeFiChain with developer resources and code.
          </h1>
        </div>
        <ResourceSection />
      </Container>
      <div className='bg-white'>
        <div className='container mx-auto p-10 md:p-20 lg:p-32'>
          <div className='w-full md:w-4/5 lg:1/2 space-y-10'>
            <h1
              className='text-5xl font-semibold'
              data-testid='DevelopersPage.Contributors.Heading'
            >
              Core contributors
            </h1>
            <p
              className='font-light text-3xl leading-10'
              data-testid='DevelopersPage.Contributors.Text'
            >
              DeFiChain is an open-source project with a global team of core contributors,
              supported by a community of developers.
              The full list of projects and contributors can be found on <a className='text-primary-500' href='https://github.com/defich/ain'>GitHub</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout']))
    }
  }
}
