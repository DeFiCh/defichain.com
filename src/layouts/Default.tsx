/* eslint-disable no-restricted-imports */
import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { WhaleProvider } from './context/WhaleContext'
import { useRouter } from 'next/router'

const title = 'DeFiChain'
const description = 'A blockchain dedicated to fast, intelligent and transparent decentralized financial services, accessible by everyone, and enabled on Bitcoin.'

/**
 * Default Layout with <Head> providing default Metadata for SEO
 */
export function Default (props: PropsWithChildren<any>): JSX.Element | null {
  const router = useRouter()

  return (
    <div className='flex flex-col min-h-screen antialiased'>
      <Head>
        <meta charSet='UTF-8' />

        <title key='title'>{title}</title>
        <meta key='description' name='description' content={description} />
        <meta key='robots' name='robots' content='follow,index' />
        <meta key='viewport' name='viewport' content='user-scalable=no, width=device-width, initial-scale=1' />
        <meta key='apple-mobile-web-app-capable' name='apple-mobile-web-app-capable' content='yes' />

        <meta key='og:title' name='og:title' content={title} />
        <meta key='og:site_name' name='og:site_name' content={title} />
        <meta key='og:type' name='og:type' content='website' />
        <meta key='og:url' name='og:url' content='https://defichain.com/' />
        <meta key='og:description' name='og:description' content={description} />
        <meta key='og:locale' name='og:locale' content={router.locale} />
        <meta key='og:image' name='og:image' content='https://defichain.com/img/og/ogimage_en.png' />
        <meta key='og:image:type' name='og:image:type' content='image/png' />

        <link rel='canonical' href='' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='48x48' href='/favicon.png' />
      </Head>

      <WhaleProvider>
        <Header />
        <main className='flex-grow'>
          {props.children}
        </main>
        <Footer />
      </WhaleProvider>
    </div>
  )
}
