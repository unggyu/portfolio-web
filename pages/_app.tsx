import { useStore } from 'store'
import { Provider } from 'react-redux'
import { MyAppProps } from 'portfolio-web'
import 'reflect-metadata'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'devicon/devicon.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-vertical-timeline-component/style.min.css'
import '@iconify/iconify'
import 'styles/index.scss'
import 'styles/app.scss'
import 'styles/custom-font/style.css'

// This default export is required in a new `pages/_app.tsx` file.
function MyApp({ Component, pageProps }: MyAppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
