import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export function getPostPath(locale: string): string {
  return path.join(process.cwd(), '_learn', locale)
}

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export function getPostFilePaths(locale: string): string[] {
  return fs.readdirSync(getPostPath(locale))
    .filter((path) => /\.mdx?$/.test(path))
}
