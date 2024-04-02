import React from 'react'
import Image from 'next/image'
import "./component2.css"
// import "./component1.css"
interface ProductCardProps {
    Data: {
        Name: string;
        Location: string;
        Time: string;
        Date: string;
        Day: string;
        img: string;
    };
}

const ProductCard:React.FC<ProductCardProps> = ({Data}) => {
  return (
    <div className='685:max-w-52 890:max-w-64 460:w-375 w-full h-625 shadow-md test relative bg-white mt-14 flex-none 685:flex-1 890:flex-none mx-2 685:my-0 my-6 dark:bg-3B3E47 dark:before:bg-mix dark:after:bg-mix'>
        <div className='w-full h-440 border-dashed border-b-2 border-A9ACB2 dark:border-818A97'>
            <Image src={require(`../../assets/${Data.img}`)} alt='img.png' className='685:w-full w-64 mb-2 mx-auto'></Image>
        </div>
        <div className='  w-full  text-center'>
            <div className='w-52 mx-auto text-center mt-3'>
            <div className="">
                <div className='font-medium text-black text-lg my-2 dark:text-white'>{Data.Name}</div>
                <div className='font-normal text-sm text-black dark:text-white '>{`${Data.Date} | ${Data.Day} | ${Data.Time}`}</div>
                <div className='font-normal text-sm text-525965 my-2 dark:text-DFDFDF'>{Data.Location}</div>
            </div>
            <button className=' py-1 btn w-full font-medium text-xs text-white rounded-none my-2 dark:bg-black'>Take Flight Collection</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard