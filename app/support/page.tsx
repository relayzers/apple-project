import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image';
import { Grid } from '@mui/material';

export const metadata: Metadata = {
  title: "Support"
};

const Support = () => {
  return (
    <div className='overflow-hidden'>
      <div className='w-full h-12 bg-black'>
      </div>
      <div>
        <Image src='/support/firstimg.svg' alt='photo' width={2000} height={1000} className='' />
        <p className='absolute text-white text-[42px] font-medium text-center ml-[565px] -mt-[360px]'>Apple Support</p>
      </div>
      <Grid container justifyContent={'center'} gap={10} textAlign={'center'}>
        <Grid>
          <Image src='/support/iphone.svg' alt='photo' width={70} height={100}className='cursor-pointer' />
          <p>iPhone</p>
        </Grid>
        <Grid>
          <Image src='/support/imac.svg' alt='photo' width={70} height={100}className='cursor-pointer' />
          <p>Mac</p>
        </Grid>
        <Grid>
          <Image src='/support/ipad.svg' alt='photo' width={70} height={100}className='cursor-pointer' />
          <p>iPad</p>
        </Grid>
        <Grid>
          <Image src='/support/applewatch.svg' alt='photo' width={70} height={100}className='cursor-pointer' />
          <p>Watch</p>
        </Grid>
        <Grid>
          <Image src='/support/airpods.svg' alt='photo' width={70} height={100}className='cursor-pointer' />
          <p>AirPods</p>
        </Grid>
        <Grid>
          <Image src='/support/applemusic.svg' alt='photo' width={70} height={100} className='cursor-pointer'/>
          <p>Music</p>
        </Grid>
        <Grid>
          <Image src='/support/appletv.svg' alt='photo' width={70} height={100} className='cursor-pointer'/>
          <p>TV</p>
        </Grid>
      </Grid>
    </div>


  )
}

export default Support