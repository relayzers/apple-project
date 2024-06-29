import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Support"
};

const Support = () => {
  return (
        <div className='overflow-hidden'>
          <div className='w-full h-12 bg-black'>
          </div>
          <Image src='/' alt='photo' width={1400} height={500} />
        </div>
      

  )
}

export default Support