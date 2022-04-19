import Layout from '../components/Layout'
import Global from '../styles/Global'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Global/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
