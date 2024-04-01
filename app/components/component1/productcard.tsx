import React from 'react'
import Image from 'next/image'
import img from "../../assets/image1.png"
import { Inter } from "next/font/google";

const ProductCard:React.FC = () => {
  return (
    <div className='shadow-md sm:w-237 460:w-450 w-full h-fit bg-white flex flex-none sm:flex-1 xl:flex-none justify-center mx-2 sm:my-4 my-6 dark:bg-3B3E47 '>
        <div>
            <Image src={img} alt='image' className='w-218 mt-2'></Image>
            <div className='text-black text-lg font-serif my-2 dark:text-white'>Sacramento River Cats</div>
            <div className='bg-costom w-full h-14 flex mt-3 justify-start items-center mb-3 dark:bg-292B32'>
                <div className='w-1/2 ml-2'>
                    <div className='text-xs font-normal text-525965 dark:text-DFDFDF'>Total Events</div>
                    <div className='font-medium text-sm font-sans text-black dark:text-white'>48 Events</div>
                </div>
                <div className='w-1/2 ml-2'>
                    <div className='text-xs font-normal text-525965 dark:text-DFDFDF'>Sport</div>
                    <div className='font-medium text-sm font-sans text-black dark:text-white'>Baseball</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard