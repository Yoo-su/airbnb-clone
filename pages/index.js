import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>airbnb Clone</title>

      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main>
      
      </main>

      <footer>
    
      </footer>
    </div>
  )
}
