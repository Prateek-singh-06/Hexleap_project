import React from 'react'
import Image from 'next/image'
import img from "../../assets/com21.png"
import "./component2.css"
// import "./component1.css"

const ProductCard:React.FC = () => {
  return (
    <div className='685:w-64 w-450 h-625 shadow-md test relative bg-white mt-14 flex-none 685:flex-1 824:flex-none mx-2 685:my-0 my-6'>
        <div className='w-full h-440 border-dashed border-b-2 border-A9ACB2'>
            <Image src={img} alt='img.png' className='685:w-full w-64 mb-2 mx-auto'></Image>
        </div>
        <div className='  w-full  text-center'>
            <div className='w-52 mx-auto text-center mt-3'>
            <div className="">
                <div className='font-medium text-black text-lg my-2'>Las Vegas Aviators</div>
                <div className='font-normal text-sm text-black '>oct 15 | SUN | 4:30 PM</div>
                <div className='font-normal text-sm text-525965 my-2 '>Las Vegas Ballpark, Las Vegas, Nevada</div>
            </div>
            <button className=' py-1 btn w-full font-medium text-xs text-white rounded-none my-2'>Take Flight Collection</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard