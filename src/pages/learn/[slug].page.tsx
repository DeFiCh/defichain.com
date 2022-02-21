import fs from 'fs'
import matter from 'gray-matter'
import {MDXRemote} from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import {getPostFilePaths, getPostPath} from './utils/mdxUtils'
import {Container} from "@components/commons/Container";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
}

export default function PostPage({source, frontMatter}) {
  return (
    <Container>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components}/>
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }

        .description {
          opacity: 0.6;
        }
      `}</style>
    </Container>
  )
}

export const getStaticProps = async ({params, locale}) => {
  const postFilePath = path.join(getPostPath(locale), `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const {content, data} = matter(source)

  const mdxSource = await serialize(content, {
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async ({locales}) => {
  const paths = locales.map(locale => getPostFilePaths(locale)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({params: {slug}, locale: locale}))).flat()

  return {
    paths,
    fallback: false,
  }
}
