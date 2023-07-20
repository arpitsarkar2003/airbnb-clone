import React from 'react'

function LargeCard({ img, title, description, buttonText }) {
    return (
        <div className='realative py-16 cursor-pointer'>
            <div className='relative'>
                <img src={img} className='rounded-2xl object-cover h-96 min-w-[300px]' />
                <div className='absolute top-32 left-12 z-50'>
                    <h1 className='text-4xl mb-3 w-64'>{title}</h1>
                    <p>{description}</p>
                    <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default LargeCard
