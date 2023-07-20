import React, { useState, useEffect } from 'react'

function MediumCard() {
    const [mediumData, setMediumData] = useState("");

  useEffect(() => {
    async function fetchData() {
      let data = "https://api.npoint.io/65c34f6f3e678c93eb38"
      const response = await fetch(data);
      const json = await response.json();
      setMediumData(json);
    }
    fetchData()
  }, [])

  return (
    <div className=''>
        <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
        {
          mediumData && mediumData.map((each, index) => {

            return (
              <div key={index}>
                {/* left */}
                <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                  <div className='relative h-80 w-80'>
                    <img src={each.img} className='rounded-xl'/>
                  </div>
                  <div>
                    <h2 className='text-2xl'>{each.title}</h2>
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

export default MediumCard
