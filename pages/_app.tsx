import type { AppProps } from 'next/app'
import '../styles/style.scss'

// This default export is required in a new `pages/_app.tsx` file.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp