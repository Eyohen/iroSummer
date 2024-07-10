import React from 'react'
import vases from '../assets/3vases.jpg'

const Hero = () => {
  return (
    <div>
        <div className='flex justify-center  gap-x-[100px]'>
       
        <div>
        <p className='text-3xl font-semibold mt-0 md:mt-24'>Discover the latest</p>
        <p className='text-red-500 text-5xl font-semibold mt-0 md:mt-6'>Home Decor Collection</p>
        <p className='text-3xl font-semibold mt-0 md:mt-6'>Crafted just for you</p>
        <button className='rounded-full px-6 py-2 text-white text-lg bg-orange-500 mt-9'>Shop Now</button>
        </div>


    <img src={vases} alt='' className='object-cover rounded-lg' />

        </div>
    </div>
  )
}

export default Hero