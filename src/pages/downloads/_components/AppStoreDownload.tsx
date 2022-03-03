import { ExternalLink } from '@components/commons/link/ExternalLink'
import { PlayStoreDownloadBadge } from './badges/AppStoreDownloadBadge'

export function AppStoreDownload (props: { className?: string, url: string, testid?: string }): JSX.Element {
  return (
    <ExternalLink {...props}>
      <PlayStoreDownloadBadge />
    </ExternalLink>
  )
}
