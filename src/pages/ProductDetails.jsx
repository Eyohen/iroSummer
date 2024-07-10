import React, {useState} from 'react'
import summer from '../assets/summer.jpg'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Navbar from '../components/Navbar';


const ProductDetails = () => {
  const [count, setCount] = useState(1)

const negative = () => {
  if(count == 1){
    return setCount(1)
  }
  setCount(count - 1)
}

const positive = () => {
  setCount(count + 1)
}

  const navigate = useNavigate()
  return (
    <div className=''>
      <div className='max-w-[1200px] mx-auto'>
      <Navbar/>
      <div onClick={() => navigate(-1)} className='cursor-pointer font-bold text-xl flex gap-x-6 mt-24'><BsArrowLeftCircle size={25} /> Back </div>
      </div>
      {/* <div onClick={() => navigate(-1)} className='cursor-pointer font-bold text-xl flex gap-x-6 mt-24 ml-24'><BsArrowLeftCircle size={25} /> Back </div> */}
    <div className='flex gap-x-24 justify-center mt-24'>
      <div>
    <img src={summer} className='object-cover w-[480px] h-[350px]' />
    </div>


    <div>
      <p className='font-bold text-2xl'>Cute Summer Dress</p>
      <p className='font-semibold text-2xl mt-4'> ₦50000</p>
      <div className='font-light text-2xl mt-4'>Color: yellow</div>

      {/* color rows */}
      <div className='flex gap-x-4 mt-4'>
        <div className='flex justify-center bg-red-500 w-9 h-9 rounded-full'></div>
        <div className='flex justify-center bg-green-500 w-9 h-9 rounded-full'></div>
        <div className='flex justify-center bg-blue-500 w-9 h-9 rounded-full'></div>
        <div className='flex justify-center bg-pink-300 w-9 h-9 rounded-full'></div>

      </div>

      <div className='font-light text-2xl mt-4'>Size (inches): 5</div>
 {/* size rows */}
 <div className='flex gap-x-4 mt-4'>
        <div className='flex items-center justify-center border border-gray-400 w-9 h-9 '>5</div>
        <div className='flex items-center justify-center border border-gray-400 w-9 h-9 '>10</div>
        <div className='flex items-center justify-center border border-gray-400 w-9 h-9 '>15</div>
        <div className='flex items-center justify-center border border-gray-400 w-9 h-9 '>20</div>

      </div>

   {/* quantity counter */}
   <div className='flex items-center gap-x-6 mt-4'>
      <div onClick={negative} className='border border-gray-500 px-2 py-2'><AiOutlineMinus /></div><div>{count}</div><div onClick={positive} className='border border-gray-500 px-2 py-2'><AiOutlinePlus /></div>
      </div>

      <div className='bg-gray-300 border border-gray-400 mt-6 px-2 py-2'>
        <p className='text-gray-500 text-medium'>Free shipping on purchases over ₦20000 </p>
      </div>

<div className='w-[300px] h-[0.5px] bg-gray-400 mt-6'></div>

<p className='text-xl text-gray-600 mt-4'>Item Details</p>

<p className='text-lg text-gray-500 mt-3 max-w-[400px]'>Aesthetically pleasing and delightful summer dress that comes in all sizes and is great for all your fun activities. </p>

<div className='flex gap-x-6'>
<button onClick={() => navigate('/cart')} className='bg-red-400 border border-gray-400 text-white mt-6 px-16 py-2'>Add To Cart</button>
<button className='bg-gray-300 border border-gray-400 mt-6 px-16 py-2'>Make Purchase</button>
</div>

    </div>

    </div>
    <div className='mb-9'></div>
</div>
  )
}

export default ProductDetails