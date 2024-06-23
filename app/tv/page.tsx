import React from 'react'
import type { Metadata } from "next";
import Test from '../Components/Test';
export const metadata: Metadata = {
  title: "Tv & Home",
};

const Tv = () => {
  return (
    <div>
      <div className='w-full h-12 bg-black'>
      </div>
      <Test/>
    </div >
  )
}

export default Tv