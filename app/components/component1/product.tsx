import React from 'react'
import ProductCard from "./productcard";
import AdCard from './adCard';
// import "./component1.css";
import { Data1 } from './data';

const product = () => {
  interface myobject{
    Name:string;
    TotalEvents:number;
    Sport:string;
    img:string;
}

  return (
    <div className='h-auto max-w-1271 text-center mx-auto pt-10'>
        <div className='685:text-left text-center text-black 685:ml-4  font-bold text-2xl underline underline-offset-8 textDecorationcolor dark:text-white'>sport</div>
        <div className=" w-full flex flex-col 685:flex-row 685:justify-between 685:items-stretch justify-start items-center " >
          {
            Data1.map((data,index)=>
              (<ProductCard key={index} Data={data}/>)

            )
          }
          <AdCard/>
        </div>
        <div className='btn btn-info text-white mt-4 mb-1 px-8'>See More</div>
    </div>
  )
}

export default product