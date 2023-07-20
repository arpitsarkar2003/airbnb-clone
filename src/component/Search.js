import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'

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

  return (
    <div>

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
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
