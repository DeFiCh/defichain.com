import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { Default } from '../layouts/Default'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Default {...pageProps}>
      <Component {...pageProps} />
    </Default>
  )
}

export default appWithTranslation(MyApp)
