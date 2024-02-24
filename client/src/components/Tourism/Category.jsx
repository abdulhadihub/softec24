import React from 'react'
import DestinationCard from './DestinationCard'

function Category({ destinations }) {
    return (
        <div className='grid grid-cols-1  lg:grid-cols-3 gap-5'>
            {destinations.map((destination, i) => {
                return (
                    <DestinationCard destination={destination} />
                )
            })}
        </div>
    )
}

export default Category