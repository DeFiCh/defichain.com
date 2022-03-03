import { Container } from '@components/commons/Container'
import React from 'react'
import { getAllPosts, getPostBySlug } from './utils/api'
import { remark } from 'remark'
import ReactMarkdown from 'react-markdown'
import { Header } from '@components/commons/Header'
import remarkMdx from 'remark-mdx'

export default function PostPage ({ post }): JSX.Element {
  return (
    <>
      <Header title={post.title}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            {post.description}
          </div>
        </div>
      </Header>
      <Container>
        <article className='prose lg:prose-xl mx-auto py-20'>
          <ReactMarkdown children={post.content} />
        </article>
      </Container>
    </>
  )
}

export async function getStaticProps ({ params, locale }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'content'
  ], locale)

  const result = await remark().use(remarkMdx).process(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content: result.toString()
      }
    }
  }
}

export async function getStaticPaths (context) {
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
