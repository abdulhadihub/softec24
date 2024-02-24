import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <button onClick={showModal} className='py-2 px-3 bg-orange-500 rounded-lg text-white hover:bg-orange-600 transition-all mt-3'>Book Trip </button>
            <Modal title="Booking Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={"Book trip"}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default App;