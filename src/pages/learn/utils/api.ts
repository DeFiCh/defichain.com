import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface Post {
  slug: string
  title: string
  description: string
  content: string
}

export function getPostsDirectory (locale: string): string {
  return join(process.cwd(), '_learn', locale)
}

export function getPostSlugs (locale): string[] {
  return fs.readdirSync(getPostsDirectory(locale))
}

export function getPostBySlug (slug, fields: string[] = [], locale: string): Post {
  const realSlug: string = slug.replace(/\.md$/, '')
  const fullPath = join(getPostsDirectory(locale), `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post: Post = {
    slug: '',
    title: '',
    description: '',
    content: ''
  }

  fields.forEach((field) => {
    if (field === 'slug') {
      post.slug = realSlug
    }
    if (field === 'content') {
      post.content = content
    }
    if (field === 'title') {
      post.title = data.title
    }
    if (field === 'description') {
      post.description = data.description
    }
  })

  return post
}

export function getAllPosts (fields: string[] = [], locale: string): Post[] {
  const slugs = getPostSlugs(locale)

  return slugs.map((slug) => getPostBySlug(slug, fields, locale))
}
