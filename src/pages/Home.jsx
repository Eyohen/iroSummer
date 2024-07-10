import React from 'react'
import Navbar from '../components/Navbar'
import spaghetti from '../assets/spaghetti.jpeg'
import axios from 'axios'
import { URL } from '../url'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner'
// import smartwatch2 from "./assets/smartwatch2-removebg-preview.png";
import smartwatch2 from '../assets/smartwatch2-removebg-preview.png';
import greenvase from '../assets/greenvase1.png'
import Services from '../components/Services';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { CarouselCustomNavigation } from '../components/CarouselCustomNavigation'
import Hero from '../components/Hero'




const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  // image: smartwatch2,
  image: greenvase,
  title2: "Smart Solo",
  title3: "Summer Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const Home = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
        <Navbar/>
        {/* <CarouselCustomNavigation/> */}
        <Hero/>
        <p className='font-bold text-3xl text-center'>Our Products</p>
        <div className='grid grid-cols-3 '>
        <Products />
        <Products />
        <Products />
        <Products />
        </div>
 
        <Services />
        <Banner data={BannerData2} />
        <Footer/>

  

        </div>
  )
}

export default Home