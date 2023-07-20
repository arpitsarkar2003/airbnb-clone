import React from 'react'
import Header from './Header';
import Banner from './Banner';
import SmallCard from './SmallCard';
import MediumCard from './MediumCard';
import LargeCard from './LargeCard';
import Footer from './Footer';

function Home() {
  return (
    <div>
         <div className="App">
      {/* header */}
      <div>
        <Header />
      </div>

      {/* banner */}
      <Banner />

      <main className='max-w-7xl mx-auto'>
        <section className='pt-6 px-8 sm:px-16'>
          <h2 className='text-4xl pb-5'>Explore Nearby</h2>
          <SmallCard/>
        </section>
        <section className='px-8 sm:px-16'>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <MediumCard/>
        </section>

        <div className='px-8 sm:px-12 flex justify-center'>
          <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
          />
        </div>
        <div></div>
        <Footer />
      </main>
    </div>
    </div>
  )
}

export default Home