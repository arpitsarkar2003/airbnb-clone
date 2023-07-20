import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'
import InfoCard from './InfoCard';
import Map from './Map';

function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const locationParam = searchParams.get('location');
    const startDateParam = searchParams.get('startDate');
    const endDateParam = searchParams.get('endDate');
    const noOfGuestsParam = searchParams.get('noOfGuests');

    const formattedStartDate = format(new Date(startDateParam),"dd MMMM yy")
    const formattedEndDate = format(new Date(endDateParam),"dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    const [searchResult, setSearchResult] = useState("");

    useEffect(() => {
      async function fetchData() {
        let data = "https://api.npoint.io/9b046feff1bb1efae14f"
        const response = await fetch(data);
        const json = await response.json();
        setSearchResult(json);
      }
      fetchData()
    }, [])

    // console.log(searchResult)

    function LoadingScreen() {
      const [hideLoading, setHideLoading] = React.useState(false)
    
      React.useEffect(() => {
        const timer = setTimeout(() => {
          // myScroll("#hero")
          setHideLoading(true);
        }, 200);
        return () => clearTimeout(timer);
      }, []);
    
      return (
        <div className={`loading-screen ${hideLoading ? "hidden" : "block"}  duration-500 bg-white h-screen w-screen flex justify-center items-center`}>
          <img src={"https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"} alt="Loading" className='w-12 h-12'/>
        </div>
      );
    
    }
  return (
    <div>
      <LoadingScreen/>
      <Header placeholder={`${locationParam} | ${range} | ${noOfGuestsParam} Guests`}/>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
        <p>{`300+ Stays - ${range} - for ${noOfGuestsParam} guest${noOfGuestsParam > 1 ? 's' : ''}`}</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in <span className='capitalize'>{locationParam}</span></h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className='flex flex-col cursor-pointer space-y-2 border-t '>
          {
          searchResult && searchResult.map((each, index) => {
            return (
              <div key={index}>
                <InfoCard img={each.img} location={each.location} title={each.title} description={each.description} star={each.star} price={each.price} total={each.total} />
              </div>
            )
          })
          }
          </div>
      
         </section>
         {/* <section className='hidden xl:block xl:min-w-[600px]'>
            <Map/>
          </section> */}
      </main>

      <Footer />
    </div>
  );
}

export default Search;