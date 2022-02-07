import { SSRConfig } from 'next-i18next'
import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ResourceSection } from './_components/DeveloperResourceSection'

export default function DevelopersPage (): JSX.Element {
  return (
    <>
      <Header title='Developers'>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>Build on Defichain
          </div>
        </div>
      </Header>
      <Container>
        <div className='flex w-full mt-16 mb-10'>
          <h1
            className='text-2xl lg:text-3xl font-medium w-full text-center md:text-left'
            data-testid='DevelopersPage.Heading'
          >
            Start building on DeFiChain with developer resources and code.
          </h1>
        </div>
        <ResourceSection />
      </Container>
      <Container bgClassName='bg-gray-50'>
        <div className='container mx-auto py-10 md:py-20 lg:py-32'>
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
              The full list of projects and contributors can be found on
              <a className='text-primary-500' href='https://github.com/defich/ain'>GitHub</a>.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout']))
    }
  }
}
