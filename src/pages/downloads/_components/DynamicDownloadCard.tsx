import {PropsWithChildren, useEffect, useState} from 'react'
import NextImage from 'next/image'
import {ExternalLink} from "@components/commons/link/ExternalLink";

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

export function DynamicDownloadCard(props: PropsWithChildren<DynamicDownloadCardProps>): JSX.Element {
  const [downloadLinks, setDownloadLinks] = useState<DownloadLinks>()
  const [isLoading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setLoading(true)
    let links: DownloadLinks = {}

    getGitHubAssets(props.repoName).then(assets => {
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
    <div className='p-1.5 w-full lg:w-1/2 flex flex-col' data-testid={props.testid}>
      <div
        className='rounded bg-gray-50 p-5 lg:p-10 space-y-10 flex flex-col flex-1'
      >
        {(typeof props.imageSrc === 'string')
          ? (<div className='w-full'><NextImage src={props.imageSrc} width='64px' height='64px'/></div>)
          : props.imageSrc}
        <h3 className='text-2xl font-medium'>{props.title}</h3>
        <div className='text-lg flex-1'>{props.desc}</div>
        <div className='grow flex items-center'>
          {
            isLoading || hasError ?
              (<ExternalLink
                className='text-lg font-medium'
                text='GitHub'
                url={`https://github.com/${props.repoName}/releases/latest`}
              />) :
              (<div className='flex items-center space-x-4 text-lg font-medium'>
                {
                  props.keywords.mac && downloadLinks?.mac ? (
                      <ExternalLink
                        text='Mac'
                        url={downloadLinks?.mac}
                      />
                    ) :
                    (<></>)
                }
                {
                  props.keywords.win && downloadLinks?.win ? (
                      <ExternalLink
                        text='Windows'
                        url={downloadLinks?.win}
                      />
                    ) :
                    (<></>)
                }
                {
                  props.keywords.linux && downloadLinks?.linux ? (
                      <ExternalLink
                        text='Linux'
                        url={downloadLinks?.linux}
                      />
                    ) :
                    (<></>)
                }
              </div>)
          }
        </div>
      </div>
    </div>
  )
}

export async function getGitHubAssets(repoName: string): Promise<any | undefined> {
  const baseUrl = `https://api.github.com/repos/${repoName}/releases/latest`
  const res = await fetch(baseUrl)
  const json = await res.json()

  const assets: Array<any> = json['assets']

  if (assets === undefined || assets.length === 0) {
    return undefined
  }

  return assets
}

function getLink(assets, keyword: string): string | undefined {
  const blockList = ['.sha256', '.blockmap', '.yml']

  const results = assets.filter(asset => {
    const url = asset['browser_download_url']
    if (url.toLowerCase().includes(keyword.toLowerCase()) && !blockList.some(blockWord => url.toLowerCase().includes(blockWord.toLowerCase()))) {
      return url
    }
  })

  if (results.length === 1) {
    return results[0]['browser_download_url']
  }

  return undefined
}

