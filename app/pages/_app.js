import '../styles/globals.css'
import { getClient } from '../utils'

function MyApp({ Component, pageProps }) {
  const client = getClient()
  return <Component {...pageProps} client={client} />
}

export default MyApp
