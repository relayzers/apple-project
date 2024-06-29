import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const page = () => {
    return (
        <div className=''>
            <div className='w-full h-12 bg-black'>
            </div>
            <p className='text-4xl font-bold  text-center mt-32 border-2 border-black p-5 transition-all w-fit mx-auto hover:bg-slate-300'>r e l a y z e r s</p>
            <p className='text-3xl font-semibold text-center mt-5'>Communication</p>
            <Grid container justifyContent={'space-around'} marginY={10} marginRight={10} spacing={4}>
                <Grid width={200} height={200} item xs={12} sm={6} md={4} lg={2} xl={1} >
                    <div className='rounded-3xl shadow-2xl transition-all hover:shadow-green-400'>
                        <Link href="tel:+994706789125"><FaWhatsapp className='p-14  text-9xl transition-all mx-auto hover:p-10 ' /></Link>
                    </div>
                </Grid>
                <Grid width={200} height={200} item xs={12} sm={6} md={4} lg={2} xl={1} >
                    <div className=' rounded-3xl shadow-2xl transition-all hover:shadow-pink-600'>
                        <Link target='_blank' href="https://www.instagram.com/relayzers/"><FaInstagram className='p-14 mx-10 text-9xl transition-all hover:p-10' /></Link>
                    </div>
                </Grid>
                <Grid width={200} height={200} item xs={12} sm={6} md={4} lg={2} xl={1} >
                    <div className=' rounded-3xl shadow-2xl transition-all hover:shadow-black'>
                        <Link target='_blank' href="https://www.x.com/relayzers"><FaXTwitter className='p-14 mx-10 text-9xl transition-all hover:p-10' /></Link>
                    </div>
                </Grid>
                <Grid width={200} height={200} item xs={12} sm={6} md={4} lg={2} xl={1} >
                    <div className=' rounded-3xl shadow-2xl transition-all hover:shadow-sky-500'>
                        <Link target='_blank' href="https://www.linkedin.com/in/relayzers/"><FaLinkedin className='p-14 mx-10 text-9xl transition-all hover:p-10' /></Link>
                    </div>
                </Grid>
                <Grid width={200} height={200} item xs={12} sm={6} md={4} lg={2} xl={1} >
                    <div className=' rounded-3xl shadow-2xl transition-all hover:shadow-red-400'>
                        <Link href="mailto:relayzers@mail.ru"><IoMdMail className='p-14 mx-10 text-9xl transition-all hover:p-10' /></Link>
                    </div>
                </Grid>
            </Grid>
            <Typography className='text-4xl font-bold mt-10 text-center border-2 rounded-full w-max px-8 p-4 mx-auto border-black'><Link href="/"><Image src="/store/applelogoblack.svg" alt="" width={100} height={100} className='mx-auto' /></Link></Typography>
            <Typography className='text-4xl font-bold my-10 text-center'>Thank You Support</Typography>

        </div>
    )
}

export default page