import React from 'react'
import ProductCard from "./productcard";
// import "./component1.css";

const product = () => {
  return (
    <div className='h-auto max-w-1271 text-center bg-costom mx-auto pt-10'>
        <div className='sm:text-left text-center text-black sm:ml-4  font-bold text-2xl underline underline-offset-8 textDecorationcolor'>sport</div>
        <div className="bg-costom w-full flex flex-col sm:flex-row sm:justify-between sm:items-start justify-start items-center " >
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
        <div className='btn btn-info text-white mt-5 mb-1 px-8'>See More</div>
    </div>
  )
}

export default product