import React from 'react'
import Navbar from '../components/Navbar'

import heroimage2 from '../assets/heroimage2.jpg'
import { MdHeight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import highlowshirtdressyellow from '../assets/highlowshirtdressyellow.jpg'
import adirepantslemon from '../assets/adirepantslemon.jpg'
import scrubsandshortslemon from '../assets/scrubsandshortslemon.jpg'



const backgroundImageStyle = {
    position: 'relative',
    width: '100%',
    // height: '100vh',
    height: '750px',
    backgroundImage: `url(${heroimage2})`, // Replace with your image path
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

      <div className='md:pt-0 bg-gray-700 bg-opacity-50 md:mt-0 mt-[280px] px-4 rounded-md py-4'>
        <p className='text-5xl font-bold text-white '>Welcome to a Boho chic summer</p>
        <p className='mt-3 text-xl text-white text-center'>Experience comfort with our creatively curated designs. </p>
        </div>
               </div>

        <div className='text-center'>
            {/* <p className='text-5xl font-bold'>SALE</p> */}
            <p className='text-5xl font-medium mt-[-36px] md:mt-4'>New Summer Collection</p>
            
        <Link to={'/products'}><button className='bg-black  px-9 py-1 rounded-full text-white mt-2 md:mt-4 text-lg'>See more</button></Link>
        </div>

      </div>

    </div>



<p className='text-3xl font-medium text-center mt-9'>Sway to the Rhythms of Summer</p>
<p className='mt-2 text-lg text-center'>Step into free-spirited fashion with our Bohemian Summer Collection. Featuring earthy tones, flowing fabrics, and eclectic designs, it captures summer's wild and carefree energy.
         </p>


<div className='flex flex-col md:flex-row justify-center md:gap-x-12 gap-y-9 mt-12 items-center'>
<Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={highlowshirtdressyellow} className='object-cover w-72 h-[280px]' />
        <p className='font-semibold text-xl pt-2'>High Low Shirt Dress (yellow)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦55,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={adirepantslemon} className='object-cover w-72 h-[280px]' />
        <p className='font-semibold text-xl pt-2'>Adire pants (lemon)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦45,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={scrubsandshortslemon} className='object-cover w-72 h-[280px]' />
        <p className='font-semibold text-xl pt-2'>Scrubs and shorts (lemon)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦50000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>2 available</p>
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