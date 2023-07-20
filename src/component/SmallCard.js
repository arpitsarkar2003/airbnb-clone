import React, { useState, useEffect } from 'react'

function SmallCard() {
  const [smallData, setSamllData] = useState("");

  useEffect(() => {
    async function fetchData() {
      let data = "https://api.npoint.io/a198cf28289994ea776e"
      const response = await fetch(data);
      const json = await response.json();
      setSamllData(json);
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          smallData && smallData.map((each, index) => {

            return (
              <div key={index}>
                {/* left */}
                <div className='flex items-center m-2 mt-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 ease-out transition duration-200 transform'>
                  <div className='relative h-16 w-16'>
                    <img src={each.img} className='rounded-lg'/>
                  </div>
                  {/* right */}
                  <div>
                    <h2>{each.location}</h2>
                    <h3 className='text-gray-500'>{each.distance}</h3>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default SmallCard
