import React from 'react'
import type { Metadata } from "next";
import { Box, Grid } from '@mui/material';
export const metadata: Metadata = {
  title: "Tv & Home",
};

const Tv = () => {
  return (
    <div>
      <div className='w-full h-12 bg-black'>
      </div>
      <div className="relative overflow-hidden bg-gray-100 py-4">
      </div>
    </div >
  )
}

export default Tv