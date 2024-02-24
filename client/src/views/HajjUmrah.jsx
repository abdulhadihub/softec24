import React, { useState } from 'react';
import { Tabs } from 'antd';
import Hajj from 'components/HajjUmrah/Hajj'
import Umrah from 'components/HajjUmrah/Umrah'


const App = () => {
    const items = [
        {
            key: '1',
            label: 'Hajj',
            children: <Hajj />,
        },
        {
            key: '2',
            label: 'Umrah',
            children: <Umrah />,
        }
    ];

    return (
        <>
            <div>

                <Tabs
                    tabPosition={"top"}
                    defaultActiveKey="1" items={items}
                    type='card'
                    size='large'
                />
            </div>
        </>
    );
};
export default App;