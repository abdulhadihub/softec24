import React from 'react'
import { Link } from 'react-router-dom'
import BookTrip from 'components/Modal/BookTrip'

export default function DestinationCard({ destination }) {
    return (
        <>
            <div className='shadow-md rounded-lg hover:shadow-lg transition-all'>
                <div className=''>
                    <img src="https://imagevars.gulfnews.com/2019/10/15/Tourist-spot-in-Pakistan_16dd01a7947_large.jpg" alt="destination" className=' object-cover w-full h-full' />
                </div>
                <div className='px-5 py-3' >
                    <div className='font-bold'>
                        {destination._key}
                    </div>
                    <div className='truncate'>
                        {destination.Desc}
                    </div>
                    <div className='flex justify-between'>
                        <Link to={`/tourism/${destination._key}`}>
                            <button className='py-2 px-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-all mt-3'>Learn more</button>
                        </Link>
                        <BookTrip />

                    </div>
                </div>
            </div>
        </>
    )
}
