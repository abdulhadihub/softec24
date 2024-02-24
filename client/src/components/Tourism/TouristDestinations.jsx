import React from 'react'
import { historicalSites, culturalAttractions, adventureSpots, naturalWonders } from 'utils/data'
import DestinationCard from './DestinationCard'
import { Tabs } from 'antd'
import Category from './Category'


function TouristDestinations() {
    const items = [
        {
            key: '1',
            label: 'Historical Sites',
            children: <Category destinations={historicalSites} />
        },
        {
            key: '2',
            label: 'Natural Wonders',
            children: <Category destinations={naturalWonders} />
        },
        {
            key: '3',
            label: 'Cultural Attractions',
            children: <Category destinations={culturalAttractions} />
        },
        {
            key: '4',
            label: 'Adventure Spots',
            children: <Category destinations={adventureSpots} />
        }
    ];


    return (
        <>
            <Tabs
                tabPosition={"top"}
                type='card'
                defaultActiveKey="1" items={items}
            />
        </>
    )
}

export default TouristDestinations