import { AppProps } from 'next/app'
import wrapper from '../stores'
import 'reflect-metadata'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'devicon/devicon.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-vertical-timeline-component/style.min.css'
import '@iconify/iconify'
import '../styles/app.scss'

// This default export is required in a new `pages/_app.tsx` file.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
