import { ExternalLink } from '@components/commons/link/ExternalLink'
import { PlayStoreDownloadBadge } from './badges/PlayStoreDownloadBadge'

export function PlaystoreDownload (props: { className?: string, url: string, testid?: string }): JSX.Element {
  return (
    <ExternalLink {...props}>
      <PlayStoreDownloadBadge />
    </ExternalLink>
  )
}
