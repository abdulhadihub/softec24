import React, { useEffect, useState } from 'react'
import { IoMdHome } from "react-icons/io";
import UserDropdown from './UserDropdown';
import { LuLinkedin } from "react-icons/lu";
import { useCookies } from 'react-cookie';
import { useUser } from 'auth/UserContext';
import { FaPlus, FaUserPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import MobileNavbar from './MobileNavbar';
import { useNavigate, Link } from 'react-router-dom';
import { useVerifyUser } from 'hooks/useHooks';


function Navbar() {
    const [data, setData] = useState({})
    const [cookies] = useCookies(['x-auth-token'])
    const [query, setQuery] = useState('')
    const { user } = useUser()
    const { fetchUser, loading, error } = useVerifyUser();
    const navigation = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        navigation(`/search/${query}`)
    }


    useEffect(() => {
        if (!user) {
            if (cookies["x-auth-token"]) {
                fetchUser().then((user) => {
                    if (user) {
                        setData(user);
                    }
                });
            }
        }
    }, [user, cookies, fetchUser]);


    return (
        <nav className='h-[50px] fixed w-full bg-white z-[999]'>
            {/* desktop navbar */}
            <div className='hidden lg:grid grid-cols-3 h-full'>
                <div className='flex justify-start items-center mx-5'>
                    <Link to='/tourism'>
                        <h2 className='text-2xl font-bold flex items-center'>
                            <div className='text-gray-600'>Softec</div>
                            <div className='bg-blue-500 text-white rounded-md p-1 flex items-center'>
                                <LuLinkedin />
                            </div>
                        </h2>
                    </Link>
                    {/* <form onSubmit={handleSearch}>
                        <label className='mx-3 bg-gray-100 flex items-center py-2 px-5 rounded-full'>
                            <IoSearch className='text-gray-600 text-2xl' />
                            <input onChange={(e) => setQuery(e.target.value)} placeholder='Search' className='px-2 text-[14px] bg-gray-100 outline-none border-none' type="text" />
                        </label>
                    </form> */}
                </div>
                {user ?
                    <div className='flex justify-center items-center gap-10'>
                        <Link title='Home' to='/tourism' className='mx-3'>
                            Tourism
                        </Link>
                        <Link title='Create Post' to='/hajj-umrah' className='mx-3'>
                            Hajj & Umrah
                        </Link>
                    </div> : <div className='flex justify-center items-center gap-10'></div>}
                <div className='flex justify-center items-center'>
                    {user ? <UserDropdown data={data} /> : <Link to='/login'> <button className='bg-blue-500 text-white px-5 py-2 rounded-md font-bold'>Sign In</button></Link>}

                </div>
            </div>

            {/* mobile navbar */}
            <div className='lg:hidden'>
                <MobileNavbar />
            </div>
        </nav>
    )
}

export default Navbar