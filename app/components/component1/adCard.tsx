import React from 'react'
import Image from 'next/image'



const AdCard:React.FC = () => {
  return (
    <div className='shadow-md 685:w-237 460:w-450 w-full bg-white flex flex-none sm:flex-1 xl:flex-none justify-center mx-2 685:my-4 my-6 dark:bg-3B3E47 min-h-25.5 '>
        <div className=''>
            <div className=' w-fit mx-auto relative content '>
            <Image src={require(`../../assets/imagead.png`)} alt='image' className='w-218 mt-2 mx-auto '></Image>
            </div>
            <div className='px-3'>
            <div className='text-black text-lg sm:text-sm md:text-base  lg:text-lg font-serif mt-3 mb-2 dark:text-white text-nowrap'>Advertisement title</div>
            <div className=' w-full  mt-1 text-center font-normal text-2xs text-525965 dark:text-DFDFDF '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
    </div>

  )
}

export default AdCard;