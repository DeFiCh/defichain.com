import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TsConfigJson } from 'type-fest'
import JSX = TsConfigJson.CompilerOptions.JSX

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
