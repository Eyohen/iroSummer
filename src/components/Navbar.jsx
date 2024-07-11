import React from 'react'
import { PiShoppingCartLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { RxPerson } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import logo from '../assets/logo.jpg';


const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-between px-4 md:px-24'>

        <div className='flex gap-x-12 items-center py-1'>
        {/* <p className='text-red-500 text-3xl font-semibold'>IROLAGOS</p> */}
        <img src={logo} className='w-[50px] object-cover' />
        <Link to={'/'}><p className='text-lg font-medium text-gray-500 hidden md:block'>Home</p></Link>
        <Link to={'/products'}><p className='text-lg font-medium text-gray-500 hidden md:block'>Products</p></Link>
        {/* <p className='text-lg font-medium text-gray-500 hidden md:block'>About</p>
        <p className='text-lg font-medium text-gray-500 hidden md:block'>Quick Links</p> */}

     
        </div>

        {/* <div className='md:hidden'><IoMenuOutline/></div> */}


    {/* <div className='flex gap-x-12'>
    <div className='hidden md:block'><CiSearch size={25}/></div>

<Link to={'/cart'}><div className='relative hidden md:block'>
    <PiShoppingCartLight size={25} />
    <div className='absolute bottom-2 left-6 bg-red-500 rounded-full text-white px-1 hidden md:block'>0</div>
    </div>
    </Link>

    <Link to={'/profile'}>
    <div className='hidden md:block'><RxPerson size={25} /></div>
    </Link>

    </div> */}

    </div>
    </div>

  )
}

export default Navbar