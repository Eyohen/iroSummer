import React from 'react'
import cuteceramiccup from '../assets/cuteceramiccup.jpeg'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <Link to={'/productdetails'}><div className='flex justify-center items-center py-12 '>
        <div className='w-[280px] '>
        <img src={cuteceramiccup} className='object-cover w-[280px] h-[200px] rounded-lg' />
        <p className='font-semibold text-lg mt-4'>Cute Ceramic cup</p>
        <p className='font-bold text-lg mt-2'>₦5000</p>
        </div>
    </div>
    </Link>
  )
}

export default Products