import React from 'react'
import { useParams } from 'react-router-dom'
import { historicalSites, naturalWonders, culturalAttractions, adventureSpots } from 'utils/data'
import { Tabs } from 'antd';
import Map from 'components/Map/Map'

const App = () => {
    const { id } = useParams()

    const touristDestinations = [...historicalSites, ...naturalWonders, ...culturalAttractions, ...adventureSpots]

    const destination = touristDestinations.find((location) => {
        if (id == location._key) {
            return location
        }
    })

    function Destination({ destination }) {

        return (
            <>
                <div className=''>
                    <div className=''>
                        <img src="https://imagevars.gulfnews.com/2019/10/15/Tourist-spot-in-Pakistan_16dd01a7947_large.jpg" alt="destination" className='object-cover w-full h-[300px]' />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>{destination._key}</h1>
                        <p>{destination.Desc}</p>
                    </div>
                </div>
            </>
        )
    }

    const items = [
        {
            key: '1',
            label: 'Destination',
            children: <Destination destination={destination} />
        },
        {
            key: '2',
            label: 'Map',
            children: <Map destination={destination} />
        },
        {
            key: '3',
            label: 'Build Itinerary',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '4',
            label: 'Budget Calculator',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '5',
            label: 'Travel Checklist',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '6',
            label: 'History',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '7',
            label: 'Significance',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '8',
            label: 'Nearby Accomodations',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '9',
            label: 'Transportation Options',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '10',
            label: 'Tourist Facilities',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '11',
            label: 'Gallery',
            children: 'Content of Tab Pane 3',
        },
    ];

    return (
        <>
            <Tabs
                tabPosition={"left"}
                defaultActiveKey="1" items={items}
                onChange={() => window.scrollTo(0, 0)}
            />
        </>
    );
};
export default App;

