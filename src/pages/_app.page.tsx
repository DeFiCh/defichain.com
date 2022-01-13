import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { Default } from '../layouts/Default'
import { GetServerSidePropsResult } from 'next'
import { initializeStore, RootState } from '@store/index'

export interface SiteProps {
  initialReduxState: RootState
}
function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Default {...pageProps}>
      <Component {...pageProps} />
    </Default>
  )
}

export function getServerSideProps (): GetServerSidePropsResult<SiteProps> {
  const store = initializeStore()
  return {
    props: {
      initialReduxState: store.getState()
    }
  }
}

export default appWithTranslation(MyApp)
