import React from 'react'
import ProductCard from "./productcard2";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const product = () => {
  return (
    <div className=' max-w-1240 mx-auto mt-14 bg-white py-20'>
    <div className='max-w-1090 text-center  mx-auto '>
        <div className='font-bold text-5xl text-black'>Collection Spotlight</div>
        <div className='max-w-918 mx-auto text-black font-normal text-sm mb-10 mt-6'>Discover extraordinary moments with our Spotlight Collection metatickets-exclusive access to premium events for an unforgettable exprrience. Grab yours today!</div>
        <div className='max-w-1090 mx-auto flex items-center'>
            <div className='w-9 h-12 border-2 border-2C9CF0 flex justify-center items-center hover:cursor-pointer'><IoIosArrowBack className='text-3xl text-2C9CF0'/></div>
            <div className=' max-w-864 mx-auto "bg-costom w-full flex flex-col 685:flex-row 685:justify-between 685:items-start justify-start items-center '>
                <ProductCard/>    
                <ProductCard/>    
                <ProductCard/>    
            </div>
            <div className='w-9 h-12 border-2 border-2C9CF0 flex justify-center items-center hover:cursor-pointer'><IoIosArrowForward className='text-3xl text-2C9CF0'/></div>
        </div>
    </div>
    </div>
  )
}

export default product