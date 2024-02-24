import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';


const MainContent = ({ children }) => {
    return <main className="bg-slate-100">
        <div className="h-[50px]">
            <Navbar />
        </div>
        <div className='min-h-[100vh]'>
            {children}
        </div>
        <Footer />
    </main>;
};

export default MainContent;
