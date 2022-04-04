import { PropsWithChildren, useEffect, useState } from 'react'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import { DownloadCard } from './DownloadCard'

interface DynamicDownloadCardProps {
  repoName: string
  testid: string
  title: string
  desc: string
  imageSrc: string | JSX.Element
  keywords: {
    mac?: string
    win?: string
    linux?: string
  }
}

interface DownloadLinks {
  mac?: string
  win?: string
  linux?: string
}

export function DynamicDownloadCard (props: PropsWithChildren<DynamicDownloadCardProps>): JSX.Element {
  const [downloadLinks, setDownloadLinks] = useState<DownloadLinks>()
  const [isLoading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setLoading(true)
    const links: DownloadLinks = {}

    void getGitHubAssets(props.repoName).then(assets => {
      if (assets === undefined) {
        setHasError(true)
        return
      }

      if (props.keywords.mac !== undefined) {
        const link = getLink(assets, props.keywords.mac)
        if (link === undefined) {
          setHasError(true)
        }
        links.mac = link
      }

      if (props.keywords.win !== undefined) {
        const link = getLink(assets, props.keywords.win)
        if (link === undefined) {
          setHasError(true)
        }
        links.win = link
      }

      if (props.keywords.linux !== undefined) {
        const link = getLink(assets, props.keywords.linux)
        if (link === undefined) {
          setHasError(true)
        }
        links.linux = link
      }

      setDownloadLinks(links)
      setLoading(false)
    })
  }, [])

  return (
    <DownloadCard
      title={props.title}
      desc={props.desc}
      imageSrc={props.imageSrc}
      testid={props.testid}
    >
      <div className='flex items-center text-lg font-medium'>
        {
          isLoading || hasError
            ? (<ExternalLink
                className='text-lg font-medium'
                text='GitHub'
                url={`https://github.com/${props.repoName}/releases/latest`}
               />)
            : (
              <div className='flex items-center space-x-4 text-lg font-medium'>
                {
                  props.keywords.mac !== undefined && downloadLinks?.mac !== undefined ? (
                    <ExternalLink
                      text='macOS'
                      url={downloadLinks.mac}
                    />
                  )
                    : (<></>)
                }
                {
                  props.keywords.win !== undefined && downloadLinks?.win !== undefined ? (
                    <ExternalLink
                      text='Windows'
                      url={downloadLinks.win}
                    />
                  )
                    : (<></>)
                }
                {
                  props.keywords.linux !== undefined && downloadLinks?.linux !== undefined ? (
                    <ExternalLink
                      text={props.keywords.linux === '.appimage' ? 'Linux (App Image)' : 'Linux'}
                      url={downloadLinks.linux}
                    />
                  )
                    : (<></>)
                }
              </div>
              )
        }
      </div>
    </DownloadCard>
  )
}

export async function getGitHubAssets (repoName: string): Promise<any | undefined> {
  const baseUrl = `https://api.github.com/repos/${repoName}/releases/latest`
  const res = await fetch(baseUrl)
  const json = await res.json()

  const assets: any[] = json.assets

  if (assets === undefined || assets.length === 0) {
    return undefined
  }

  return assets
}

function getLink (assets, keyword: string): string | undefined {
  const blockList = ['.sha256', '.blockmap', '.yml']

  const results = assets.filter(asset => {
    const url: string = asset.browser_download_url
    return url.toLowerCase().includes(keyword.toLowerCase()) && !blockList.some(blockWord => url.toLowerCase().includes(blockWord.toLowerCase()))
  })

  if (results.length === 1) {
    return results[0].browser_download_url
  }

  return undefined
}
