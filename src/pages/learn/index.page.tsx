import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { UserConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PropsWithChildren } from 'react'
import { getAllPosts } from './utils/api'
import { HowToCard } from './_components/HowToCard'
import { InferGetStaticPropsType } from 'next'
import { Disclosure } from '@headlessui/react'
import { BsChevronCompactDown } from 'react-icons/bs'

interface PostI {
  title: string
  description: string
  slug: string
}

interface LearnPageProps {
  props: {
    _nextI18Next: { initialI18nStore: any, initialLocale: string, userConfig: UserConfig | null }
    posts: PostI[]
  }
}

export default function LearnPage (props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
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
      <Container>
        <HowToSection posts={props.posts} />
        <FAQSection />
      </Container>
    </>
  )
}

function HowToSection (props: PropsWithChildren<{ posts: PostI[] }>): JSX.Element {
  return (
    <section className='my-16'>
      <div
        className='text-2xl lg:text-3xl font-medium w-full md:text-left mb-5'
        data-testid='HowToSection.Title'
      >How To Guides
      </div>

      <div className='flex flex-wrap pb-10 -m-1'>
        {(() => {
          return (
            props.posts.map(post => {
              return <HowToCard title={post.title} desc={post.description} slug={post.slug} key={post.slug} />
            })
          )
        })()}
      </div>
    </section>
  )
}

function FAQSection (): JSX.Element {
  const { t } = useTranslation(['learn'])
  const entries: Array<{ title: string, desc: string }> = t('FAQSection.entries', { returnObjects: true })

  return (
    <section className='my-16'>
      <h1
        className='text-2xl lg:text-3xl font-medium w-full md:text-left mb-5'
        data-testid='FAQSection'
      >FAQ
      </h1>

      {
        entries.map(entry => {
          return (
            <FAQEntry title={entry.title} desc={entry.desc} key={entry.title} />
          )
        })
      }

    </section>
  )

  function FAQEntry (props: { title: string, desc: string }): JSX.Element {
    return (
      <div data-testid='FAQEntry'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='py-4 text-xl lg:text-2xl font-medium flex items-center'>
                <BsChevronCompactDown size={28} className={`${open ? 'rotate-180' : ''}`} />
                <span className='ml-4' data-testid='FAQEntry.Title'>{props.title}</span>
              </Disclosure.Button>
              <Disclosure.Panel className='text-gray-500 text-lg mb-10' data-testid='FAQEntry.Desc'>
                {props.desc}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    )
  }
}

export async function getStaticProps ({ locale }): Promise<LearnPageProps> {
  const allPosts: PostI[] = getAllPosts(['slug', 'title', 'description'], locale) as PostI[]

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'learn'])),
      posts: allPosts
    }
  }
}
