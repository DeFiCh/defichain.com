import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface Post {
  title: string
  description: string
  date: Date
  locale: string
}

export function getPostsDirectory (locale: string): string {
  return join(process.cwd(), '_learn', locale)
}

export function getPostSlugs (locale): string[] {
  return fs.readdirSync(getPostsDirectory(locale))
}

export function getPostBySlug (slug, fields: string[] = [], locale: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(getPostsDirectory(locale), `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const post = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = realSlug
    }
    if (field === 'content') {
      post[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      post[field] = data[field]
    }
  })

  return post
}

export function getAllPosts (fields: string[] = [], locale: string) {
  const slugs = getPostSlugs(locale)

  return slugs
    .map((slug) => getPostBySlug(slug, fields, locale))
    .sort((post1: Post, post2: Post) => (post1.date > post2.date ? -1 : 1))
}
