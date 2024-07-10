import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import summer from '../assets/summer.jpg'
import { MdHeight } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from "react-icons/bs";

const Products = () => {
    const navigate = useNavigate()

  return (
    <div className="overflow-x-hidden px-3">
        <Navbar />
        <div onClick={() => navigate(-1)} className='cursor-pointer font-bold text-xl flex gap-x-6 mt-6 px-12'><BsArrowLeftCircle size={25} /> Back </div>
        <p className='text-4xl font-semibold text-center py-9'>Products</p>

        <div className='px-12 grid grid-cols-1 md:grid-cols-4 content-center gap-y-9'>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={summer} className='object-cover w-72 h-[180px]' />
        <p className='font-semibold text-xl pt-2'>Black Summer dress</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦17000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>20 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        </div>
        
        
        
    </div>
  )
}

export default Products