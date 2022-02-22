import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { getPostFilePaths, getPostPath } from './utils/mdxUtils'
import { Container } from '@components/commons/Container'
import { Header } from '@components/commons/Header'
import rehypeSlug from 'rehype-slug'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types'

interface PostPageProps {
  source: MDXRemoteSerializeResult
  frontMatter: { [p: string]: any }
}

export default function PostPage ({ source, frontMatter }): JSX.Element {
  return (
    <>
      <Header title={frontMatter.title}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>
            {frontMatter.description}
          </div>
        </div>
      </Header>
      <Container>
        <article className='prose lg:prose-xl mx-auto py-20'>
          <MDXRemote {...source} />
        </article>
      </Container>
    </>
  )
}

export async function getStaticProps ({ params, locale }): Promise<GetStaticPropsResult<PostPageProps>> {
  const slug: string = params.slug
  const postFilePath = path.join(getPostPath(locale), `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug]
    },
    scope: data
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}

export async function getStaticPaths (context): Promise<GetStaticPathsResult> {
  const paths = context.locales?.map(locale => getPostFilePaths(locale)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug }, locale: locale }))).flat()

  return {
    paths,
    fallback: false
  }
}
