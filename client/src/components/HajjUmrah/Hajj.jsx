import React, { useState } from 'react';
import { Tabs } from 'antd';
const App = () => {
    const items = [
        {
            key: '1',
            label: 'Visa Requirements',
            children: 'Tourist Destinations',
        },
        {
            key: '2',
            label: 'Travel Preparations',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Religious Rituals',
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
            label: 'Q&A Forum',
            children: 'Content of Tab Pane 3',
        },
    ];

    return (
        <>
            <Tabs
                tabPosition={"left"}
                defaultActiveKey="1" items={items}
            />
        </>
    );
};
export default App;