import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>airbnb Clone</title>

      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        {/* Section */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Section Items */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img} 
                distance={distance}
                location={location} />
            ))}
          </div>
        </section>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());

  return {
    props: {
      exploreData
    }
  }
}
