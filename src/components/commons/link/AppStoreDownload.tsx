import { ExternalLink } from '@components/commons/link/ExternalLink'
import NextImage from 'next/image'

export function AppStoreDownload (props: {className?: string, url: string, testid?: string}): JSX.Element {
  return (
    <ExternalLink {...props}>
      <NextImage src='/assets/svg/downloads/app_store.svg' className='p-0 m-0' width='150px' height='48px' />
    </ExternalLink>
  )
}
