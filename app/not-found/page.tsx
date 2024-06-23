import React from 'react'
import type { Metadata } from "next";
import { Box } from '@mui/material';
export const metadata: Metadata = {
    title: "Not Found",
};

const NotFound = () => {
    return (
        <div>
            <div className='w-full h-12 bg-black'>
            </div>
            <div>

            </div>
            <div className='mb-80 mt-60'>
                <p className='text-9xl text-center my-20 backdrop-blur-3xl  h-12'>Oops..</p>
                <p className='text-5xl text-center my-20 backdrop-blur-3xl  h-12'>404. Page ready soon!</p>
            </div>
        </div>
    )
}

export default NotFound