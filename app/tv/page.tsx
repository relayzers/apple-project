import React from 'react'
import type { Metadata } from "next";
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';
export const metadata: Metadata = {
  title: "Tv & Home",
};

const Tv = () => {
  return (
    <div>
      <div className='w-full h-12 bg-black'>
      </div>
      <Grid container className='flex justify-center gap-12 mt-10 h-fit text-center mx-auto' spacing={2}>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/appletv4k.svg" alt='photo' width={70} height={70} className='mt-0.5 mx-auto' />
          <p className='mt-3.5'>Apple TV 4K</p>
          <p className='text-orange-600 '>New</p>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/appletv.svg" alt='photo' width={50} height={70} className='mx-auto' />
          <p className='mt-3.5'>Apple TV app</p>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/appletv+.svg" alt='photo' width={90} height={70} className='mt-2 mx-auto' />
          <p className='mt-5'>Apple TV+</p>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/homepod.svg" alt='photo' width={50} height={70} className='mt-1 mx-auto' />
          <p className='mt-3.5'>HomePod</p>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/homeapp.svg" alt='photo' width={55} height={70} className='mx-auto' />
          <p className='mt-3.5'>Home app</p>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/accessories.svg" alt='photo' width={30} height={70} className='mx-auto' />
          <p className='mt-3.5'>Accessories</p>
        </Grid>
      </Grid>
      <div className='bg-blue-600 py-4'>
        <p className='text-white text-center text-md'>MLS Season Pass. Stream every Major League Soccer match. Coming soon.* Notify Me</p>
      </div>
      <Image src="/tv/herotv.svg" alt='photo' width={1400} height={700} className='mx-auto mb-20' />
      <Image src="/tv/herohomepod.svg" alt='photo' width={1400} height={700} className='mx-auto' />
      <div>
        <p className='text-center text-7xl font-bold -mt-10'>The future hits home.</p>
        <p className='text-center text-xl mt-5 text-gray-500'>Simply connect your favorite devices and transform your house into a remarkably smart,<br /> convenient, and entertaining home. Control lights, locks, and thermostats with your <br /> iPhone — or just your voice. Play any song, in any room, from anywhere. And elevate movie <br /> night with theater-like picture and sound. All with the security and privacy of Apple.</p>
        <p className='text-xs text-center mt-2 text-gray-500'>Stream Luck on the Apple TV app</p>
      </div>
      <Grid>
        <Grid container justifyContent={'center'} marginTop={10} gap={10}>
          <Grid >
            <div className='text-center'>
              <p className='text-lg font-bold my-3'>HomePod mini </p>
              <p className='text-2xl font-bold'>Room-filling sound <br /> in every room.</p>
              <p className='my-5 font-medium'>$99</p>
              <Button variant='contained' className='rounded-full normal-case mr-5'>Buy</Button>
              <Button className='normal-case'>Learn more</Button>
            </div>
            <Image src="/tv/fililing.svg" alt='photo' width={550} height={400} />
          </Grid>
          <Grid >
            <div className='text-center'>
              <p className='text-orange-600 -mt-4'>New</p>
              <Image src="/tv/4klogo.svg" alt='photo' width={70} height={400} className='mx-auto my-3' />
              <p className='text-2xl font-bold'>The Apple experience. <br /> Cinematic in every sense.</p>
              <p className='my-5 font-medium'>Starting at $129</p>
              <Button className='normal-case  rounded-full mr-5' variant='contained'>Buy</Button>
              <Button className='normal-case'>Learn more</Button>
            </div>
            <Image src="/tv/4ktv.svg" alt='photo' width={550} height={400} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid>
          <Image src="" alt='photo' width={500} height={500}/>
        </Grid>
        <Grid>

        </Grid>
      </Grid>
    </div >
  )
}

export default Tv