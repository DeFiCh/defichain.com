import NextImage from 'next/image'
import { ExternalLink } from '@components/commons/link/ExternalLink'

export function PlaystoreDownload (props: {className?: string, url: string, testid?: string}): JSX.Element {
  return (
    <ExternalLink {...props}>
      <NextImage src='/assets/svg/downloads/play_store.svg' className='p-0 m-0' width='169px' height='48px' />
    </ExternalLink>
  )
}
