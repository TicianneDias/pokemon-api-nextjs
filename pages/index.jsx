import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemon API</title>
      </Head>
      <NavBar/>
      <h1>Home Page</h1>
      <Footer/>
    </div>
  )
}
