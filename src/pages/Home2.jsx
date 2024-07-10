import React from 'react'
import Navbar from '../components/Navbar'
import summer from '../assets/summer.jpg'
import { MdHeight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';



const backgroundImageStyle = {
    position: 'relative',
    width: '100%',
    // height: '100vh',
    height: '650px',
    backgroundImage: `url(${summer})`, // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  const textOverlayStyle = {
    position: 'absolute',
    color: 'white',
    fontSize: '2em',
    textAlign: 'center',
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.5)', // Optional: background for text readability
    borderRadius: '10px' // Optional: rounded corners
  };
  

const Home2 = () => {
  return (
    <div className="overflow-x-hidden">
        <Navbar />

        {/* <img src={summer} className='w-full object-cover h-[800px]' /> */}

        <div style={backgroundImageStyle}>

      {/* <div style={textOverlayStyle}> */}

      {/* <div className='flex flex-col md:flex-row md:gap-x-[200px] gap-y-[100px]'> */}
        <div className="flex flex-col md:flex-row md:gap-x-[200px] gap-y-[100px] items-center justify-center md:items-start">
        <div className="text-center md:text-left">
        <p className='text-5xl font-bold '>JULY 2025</p>
        <p className='max-w-[400px] mt-4 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>
               </div>

        <div className='text-center'>
            <p className='text-5xl font-bold'>SALE</p>
            <p className='text-5xl font-medium mt-4'>New Collection</p>
            
        <Link to={'/products'}><button className='bg-black  px-9 py-1 rounded-full text-white mt-4 text-lg'>See more</button></Link>
        </div>

      </div>

    </div>



<p className='text-3xl font-medium text-center mt-9'>We were Inspired by the beauty of Nature</p>
<p className='mt-2 text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididuntt.
         </p>


<div className='flex flex-col md:flex-row justify-center md:gap-x-12 gap-y-9 mt-12 items-center'>
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

<div className='mb-12'></div>


<Footer/>
        </div>
  )
}

export default Home2