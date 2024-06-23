import React from 'react'
import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
export const metadata: Metadata = {
  title: "App Store"
};

const AppStore = () => {
  return (
    <div>
      <div className='w-full h-12 bg-black'>
      </div>
      <div id='h' className='w-full h-14 py-2'>
        <div className='text-center items-center flex justify-around'>
          <Link href="/appstore" className='text-3xl'><p className='text-white -ml-10'>App Store</p></Link>
          <div className='flex ml-52'>
            <Link href="/appstore" className='text-sm'><p className='text-gray-400 mr-5 '>About the App Store</p></Link>
            <Link href="/appstore" className='text-sm'><p className='text-gray-300 '>Developing for the App Store</p></Link>
          </div>
        </div>
      </div>
      <Grid>
        <Box>
          <Image src="/appstore/sectionlogos.svg" alt="photo" width={1450} height={1000} className='mx-auto' />
          <Image src="/appstore/appstorelogo.svg" alt="photo" width={120} height={1000} className='mx-auto' />
          <p className='font-bold text-xl text-center my-1'>App Store</p>
          <p className='font-bold text-center text-5xl my-5'>The apps you love.</p>
          <p className='font-bold text-center text-5xl'>From a place you can trust.</p>
          <p className='text-center font-bold text-xl my-7'>For over a decade, the App Store has proved to be a safe and <br /> trusted place to discover and download apps. But the App <br /> Store is more than just a storefront — it’s an innovative <br /> destination focused on bringing you amazing experiences. <br /> And a big part of those experiences is ensuring that the apps <br /> we offer are held to the highest standards for privacy, <br /> security, and content. Because we offer nearly two million <br />  apps — and we want you to feel good about using every <br /> single one of them.</p>
        </Box>
      </Grid>
      <p className='font-bold text-4xl text-center mt-40 mb-32'>Designed for discovery.</p>
      <Grid container justifyContent={'space-around'}>
        <Box marginY={10} marginLeft={35} width={350}>
          <div className='mt-2 -ml-10'>
            <p className='w-2/3 font-bold text-4xl ml-20'>Stories and collections that inform, help, and inspire. </p>
            <p className='font-bold text-4xl ml-20'>Updated daily.</p>
          </div>
        </Box>
        <Box>
          <Image src='/appstore/stories.svg' alt='' width={500} height={500} className='mx-auto mr-72' />
        </Box>
      </Grid>
      <Grid container marginTop={10} justifyContent={'space-around'}>
        <Box width={400} height={500} marginLeft={35}>
          <div className='rounded-2xl bg-blue-600 pt-72'>
            <p className='text-5xl font-bold p-7 text-white mt-0.5'>Over 20K stories and counting.</p>
          </div>
        </Box>
        <Box width={400} height={500} marginRight={35}>
          <div className=' rounded-2xl pt-9'>
            <p className='text-3xl font-bold w-2/4 mt-8 ml-16'>Curated by experts. Handpic <br /> ked for you.</p>
            <div className='flex'>
              <Image src="/appstore/curated.svg" alt='photo' width={260} height={400} className=' mt-3 mx-auto ml-14' />
              <Image src="/appstore/label.svg" alt='photo' width={30} height={20} className='mt-44 mr-10' />
            </div>
          </div>
        </Box>
      </Grid>
      <Image src="/appstore/inapp.svg" alt='photo' width={840} height={500} className='mx-auto my-10' />
      <div className='text-center w-2/3 mx-auto'>
        <p className='border w-fit rounded-full px-4 py-1 border-gray-300 ml-20'>New</p>
        <p className=' text-start ml-20 text-4xl mt-5 font-bold'>Explore in-app events like movie premieres, <br /> gaming competitions, and livestreams.</p>
        <div className='ml-96'>
          <div className='ml-12'>
            <Image src="/appstore/label.svg" alt='photo' width={30} height={20} className='ml-96' />
          </div>
        </div>
      </div>
      <Grid container marginTop={10} justifyContent={'space-around'} width={1000}  spacing={2} item xs={4} xl={8} lg={12} className='mx-auto'>
        <Box width={400} height={500} >
          <div className='rounded-2xl pt-10'>
            <Image src="/appstore/search.svg" alt="photo" width={200} height={300} className='mx-auto' />
            <p className='text-4xl font-bold   mx-10 mt-5'>Discover <br /> amazing apps <br /> with a rich search experience.</p>
          </div>
        </Box>
        <Box width={400} height={500} >
          <div className='rounded-2xl bg-gray-900 pt-72'>
            <p className='text-5xl font-bold p-7 text-white mt-0.5'>1.8M apps available worldwide.</p>
          </div>
        </Box>
        <Box width={400} height={500} >
          <div className='rounded-2xl bg-gray-900 pt-60'>
            <p className='text-5xl font-bold p-7 text-white mt-0.5'>175 storefronts in over 40 languages.</p>
          </div>
        </Box>
        <Box width={400} height={500} >
          <div className='rounded-2xl bg-gray-900 pt-60'>
            <p className='text-5xl font-bold p-7 text-white mt-0.5'>Over 150 expert <br /> editors worldwide.</p>
          </div>
        </Box>
      </Grid>
      <Grid container justifyContent={'space-around'} marginTop={5} marginBottom={40}>
        <Box display={'flex'} justifyContent={'space-around'}>
          <div>
            <Image src="/appstore/details.svg" alt='photo' width={390} height={500} />
          </div>
          <div className='mt-40 ml-10'>
            <p className='text-3xl font-bold '>Get the details <br /> on every app.</p>
            <Image src="/appstore/label.svg" alt='photo' width={30} height={500} className='ml-60 mt-20' />
          </div>
        </Box>
      </Grid>
      <p className='text-4xl font-bold text-center mb-5'>Privacy and security.</p>
      <p className='text-4xl font-bold text-center'>Built into everything we do.</p>
      <Grid container justifyContent={'space-around'} marginTop={20}>
        <Box marginLeft={40}>
          <p className='text-4xl font-bold mt-24'>Security for every <br /> app. At every level.</p>
        </Box>
        <Box marginRight={35} justifyContent={'center'}>
          <Image src="appstore/security.svg" alt='' width={420} height={400} />
          <div className='ml-60'>
            <Image src="/appstore/label.svg" alt='photo' width={30} height={500} className='ml-32  mt-10' />
          </div>
        </Box>
      </Grid>
      <Grid container justifyContent={'space-around'} marginTop={5}>
        <Box width={400} height={500} marginLeft={38}>
          <div className='rounded-2xl bg-blue-600 pt-40'>
            <p className='text-5xl font-bold ml-5 pb-10 p-7 w-4/5 text-white mt-0.5'>100% of <br /> apps  are <br /> automatica <br /> screened <br /> for known malware.</p>
          </div>
        </Box>
        <Box width={400} height={500} marginRight={37}>
          <div className='rounded-2xl bg-gray-900 pt-32'>
            <p className='text-3xl font-bold p-7 ml-5 pb-9 text-white mt-0.5'>Over 16K apps <br /> use Apple health <br /> technologies like <br /> HealthKit, <br /> CareKit, and <br /> ResearchKit <br /> designed to <br /> protect patient <br /> privacy.</p>
          </div>
        </Box>
      </Grid>
      <Grid container justifyContent={'space-around'} marginTop={5} marginBottom={3}>
        <Box display={'flex'} justifyContent={'space-around'}>
          <div className='mr-20'>
            <Image src="/appstore/data.svg" alt='photo' width={300} height={500} />
          </div>
          <div className='mt-40 ml-10'>
            <p className='text-3xl font-bold '>You choose what <br /> data to share. <br /> And with whom.</p>
            <Image src="/appstore/label.svg" alt='photo' width={30} height={500} className='ml-64 mt-20' />
          </div>
        </Box>
      </Grid>
      <Grid container justifyContent={'space-around'} marginTop={1} marginBottom={40}>
        <Box display={'flex'} justifyContent={'space-around'}>
          <Box width={400} height={500} marginRight={25}>
            <div className='rounded-2xl bg-gray-900 pt-28'>
              <p className='text-5xl font-bold p-7 ml-5 pb-9 text-white mt-0.5'>Over 215K <br /> submissi <br /> ons rejected last year for violating privacy guidelines.</p>
            </div>
          </Box>
          <div className='mt-10 -ml-10'>
            <Image src="/appstore/privacylogo.svg" alt='photo' width={130} height={300} className='my-10 mx-auto' />
            <p className='text-3xl font-bold '>Apps can’t pull <br /> your data from <br /> other apps.</p>
            <Image src="/appstore/label.svg" alt='photo' width={30} height={500} className='ml-56 mt-20' />
          </div>
        </Box>
      </Grid>
    </div>
  )
}

export default AppStore