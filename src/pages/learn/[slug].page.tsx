import { Container } from '@components/commons/Container'
import React from 'react'
import { getAllPosts, getPostBySlug, Post } from './utils/api'
import { remark } from 'remark'
import ReactMarkdown from 'react-markdown'
import { Header } from '@components/commons/Header'
import rehypeSlug from 'rehype-slug'
import rehypeSanitize from 'rehype-sanitize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import remarkGfm from 'remark-gfm'
import { UserConfig } from 'next-i18next'
import { GetStaticPathsResult } from 'next/types'
import { Head } from '@components/commons/Head'

interface PostPageProps {
  props: {
    _nextI18Next: { initialI18nStore: any, initialLocale: string, userConfig: UserConfig | null }
    post: Post
  }
}

export default function PostPage ({ post }): JSX.Element {
  return (
    <>
      <Head
        title={post.title}
        description={post.description}
      />
      <Header title={post.title}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            {post.description}
          </div>
        </div>
      </Header>
      <Container>
        <article className='prose lg:prose-xl mx-auto py-20'>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSanitize, rehypeSlug, [rehypeAutolinkHeadings, {
              behavior: 'wrap',
              properties: {
                className: ['no-underline hover:underline']
              }
            }]]}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </Container>
    </>
  )
}

export async function getStaticProps ({ params, locale }): Promise<PostPageProps> {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'content'
  ], locale)

  const result = await remark()
    .process(post.content)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout'])),
      post: {
        ...post,
        content: result.toString()
      }
    }
  }
}

export async function getStaticPaths (context): Promise<GetStaticPathsResult> {
  const allPosts = context.locales.map(locale => (
    {
      locale: locale,
      posts: getAllPosts(['slug'], locale)
    }
  ))

  return {
    paths: allPosts.map(postsWithLocale => {
      return postsWithLocale.posts.map(post => {
        return {
          params: {
            slug: post.slug
          },
          locale: postsWithLocale.locale
        }
      })
    }).flat(),
    fallback: false
  }
}
