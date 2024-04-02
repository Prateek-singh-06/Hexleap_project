import React from 'react'
import Image from 'next/image'

interface ProductCardProps {
    Data: {
        Name: string;
        TotalEvents: number;
        Sport: string;
        img: string;
    };
}

const ProductCard:React.FC<ProductCardProps> = ({Data}) => {
  return (
    <div className='shadow-md min-h-26 685:w-237 460:w-450 w-full h-fit bg-white flex flex-non 685:flex-1 xl:flex-non justify-center mx-2 685:my-4 my-6 dark:bg-3B3E47'>
        <div>
            <Image src={require(`../../assets/${Data.img}`)} alt='image' className='w-218 mt-2'></Image>
            <div className='text-black text-lg sm:text-sm md:text-base  lg:text-lg font-serif my-2 dark:text-white'>{Data.Name}</div>
            <div className='bg-costom w-full h-14 flex mt-3 justify-start items-center mb-3 dark:bg-292B32'>
                <div className='w-1/2 ml-2'>
                    <div className='text-xs font-normal text-525965 dark:text-DFDFDF'>Total Events</div>
                    <div className='font-medium text-sm font-sans text-black dark:text-white'>{`${Data.TotalEvents} Events`}</div>
                </div>
                <div className='w-1/2 ml-2'>
                    <div className='text-xs font-normal text-525965 dark:text-DFDFDF'>Sport</div>
                    <div className='font-medium text-sm font-sans text-black dark:text-white'>{Data.Sport}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard