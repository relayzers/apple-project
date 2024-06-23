'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Search from '../search'
import { Button } from '@mui/material'

const Navbar = () => {
   
    return (
        <div>
            <div className='fixed w-full  z-10'>
                <div className='text-xs  backdrop-blur-xl backdrop-brightness-75 transform text-white'>
                    <div className=' flex w-4/5 items-center justify-around  p-2 mx-auto'>
                        <Link href='/'><Image src="/Home/applelogo.svg" alt='photo' width={20} height={50} className='mr-10' /></Link>
                        <Link href='/store' className='mr-10'>Store</Link>
                        <Link href='/not-found' className='mr-10'>Mac</Link>
                        <Link href='/not-found' className='mr-10'>iPad</Link>
                        <Link href='/iphone' className='mr-10'>iPhone</Link>
                        <Link href='/not-found' className='mr-10'>Watch</Link>
                        <Link href='/not-found' className='mr-10'>AirPods</Link>
                        <Link href='/not-found' className='mr-10'>AirTag</Link>
                        <Link href='/tv' className='mr-10'>Tv & Home</Link>
                        <Link href='/not-found' className='mr-10'>Only on Apple</Link>
                        <Link href='/accessories' className='mr-10'>Accessories</Link>
                        <Link href='/support' className='mr-10'>Support</Link>
                        <Button><Image alt='' src="/Home/searchlogo.svg" width={20} height={50} /></Button >
                        <Link href='/appstore' className='mr-10'><Image alt='' src="/Home/shoplogo.svg" width={20} height={50} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar